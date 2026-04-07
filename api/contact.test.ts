import assert from "node:assert/strict";
import { afterEach, beforeEach, describe, test } from "node:test";
import handler from "./contact.ts";

type MockResponse = {
  headers: Record<string, string>;
  statusCode: number;
  body: unknown;
  setHeader: (name: string, value: string) => void;
  status: (code: number) => MockResponse;
  json: (body: unknown) => void;
  end: () => void;
};

const originalEnv = { ...process.env };
const originalFetch = globalThis.fetch;

const makeResponse = (): MockResponse => ({
  headers: {},
  statusCode: 200,
  body: undefined,
  setHeader(name, value) {
    this.headers[name] = value;
  },
  status(code) {
    this.statusCode = code;
    return this;
  },
  json(body) {
    this.body = body;
  },
  end() {},
});

const submitContact = async (body: Record<string, unknown>, method = "POST") => {
  const response = makeResponse();
  await handler({ method, body }, response);
  return response;
};

beforeEach(() => {
  process.env = { ...originalEnv };
  delete process.env.TELEGRAM_BOT_TOKEN;
  delete process.env.TELEGRAM_CHAT_ID;
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_FROM_EMAIL;
  delete process.env.CONTACT_TO_EMAIL;
});

afterEach(() => {
  globalThis.fetch = originalFetch;
  process.env = { ...originalEnv };
});

describe("contact form submission", () => {
  test("sends a valid submission to Telegram when Telegram env vars are configured", async () => {
    process.env.TELEGRAM_BOT_TOKEN = "test-bot-token";
    process.env.TELEGRAM_CHAT_ID = "test-chat-id";

    const fetchCalls: Array<{ url: string; init?: RequestInit }> = [];
    globalThis.fetch = async (url, init) => {
      fetchCalls.push({ url: String(url), init });
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    };

    const response = await submitContact({
      name: " Sachin ",
      email: "sachin@example.com ",
      organization: " Polemos ",
      timeline: " This week ",
      message: " Automate document review. ",
    });

    assert.equal(response.statusCode, 200);
    assert.deepEqual(response.body, { ok: true });
    assert.equal(fetchCalls.length, 1);
    assert.equal(
      fetchCalls[0]?.url,
      "https://api.telegram.org/bottest-bot-token/sendMessage",
    );

    const requestBody = JSON.parse(String(fetchCalls[0]?.init?.body));
    assert.equal(requestBody.chat_id, "test-chat-id");
    assert.equal(requestBody.disable_web_page_preview, true);
    assert.match(requestBody.text, /New Polemos Labs inquiry/);
    assert.match(requestBody.text, /Name: Sachin/);
    assert.match(requestBody.text, /Email: sachin@example.com/);
    assert.match(requestBody.text, /Organization: Polemos/);
    assert.match(requestBody.text, /Timeline: This week/);
    assert.match(requestBody.text, /Automate document review\./);
  });

  test("sends to Telegram and email when both providers are configured", async () => {
    process.env.TELEGRAM_BOT_TOKEN = "test-bot-token";
    process.env.TELEGRAM_CHAT_ID = "test-chat-id";
    process.env.RESEND_API_KEY = "test-resend-key";
    process.env.CONTACT_FROM_EMAIL = "Polemos Labs <hello@polemos.in>";
    process.env.CONTACT_TO_EMAIL = "hello@polemos.in";

    const fetchCalls: Array<{ url: string; init?: RequestInit }> = [];
    globalThis.fetch = async (url, init) => {
      fetchCalls.push({ url: String(url), init });
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    };

    const response = await submitContact({
      name: "Sachin",
      email: "sachin@example.com",
      organization: "Polemos",
      timeline: "Q3",
      message: "Connect ERP documents <safely>.",
    });

    assert.equal(response.statusCode, 200);
    assert.equal(fetchCalls.length, 2);
    assert.equal(fetchCalls[0]?.url.includes("api.telegram.org"), true);
    assert.equal(fetchCalls[1]?.url, "https://api.resend.com/emails");

    const emailBody = JSON.parse(String(fetchCalls[1]?.init?.body));
    assert.equal(emailBody.from, "Polemos Labs <hello@polemos.in>");
    assert.deepEqual(emailBody.to, ["hello@polemos.in"]);
    assert.equal(emailBody.reply_to, "sachin@example.com");
    assert.equal(emailBody.subject, "New Polemos inquiry from Polemos");
    assert.match(emailBody.html, /Connect ERP documents &lt;safely&gt;\./);
  });

  test("supports multiple comma-separated email recipients", async () => {
    process.env.RESEND_API_KEY = "test-resend-key";
    process.env.CONTACT_FROM_EMAIL = "Polemos Labs <hello@polemos.in>";
    process.env.CONTACT_TO_EMAIL = "hello@polemos.in, personal@example.com";

    const fetchCalls: Array<{ url: string; init?: RequestInit }> = [];
    globalThis.fetch = async (url, init) => {
      fetchCalls.push({ url: String(url), init });
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    };

    const response = await submitContact({
      name: "Sachin",
      email: "sachin@example.com",
      message: "Automate documents.",
    });

    assert.equal(response.statusCode, 200);
    assert.equal(fetchCalls.length, 1);

    const emailBody = JSON.parse(String(fetchCalls[0]?.init?.body));
    assert.deepEqual(emailBody.to, ["hello@polemos.in", "personal@example.com"]);
  });

  test("returns success when Telegram sends but configured email fails", async () => {
    process.env.TELEGRAM_BOT_TOKEN = "test-bot-token";
    process.env.TELEGRAM_CHAT_ID = "test-chat-id";
    process.env.RESEND_API_KEY = "test-resend-key";
    process.env.CONTACT_FROM_EMAIL = "Polemos Labs <hello@polemos.in>";
    process.env.CONTACT_TO_EMAIL = "hello@polemos.in";

    const fetchCalls: Array<{ url: string; init?: RequestInit }> = [];
    globalThis.fetch = async (url, init) => {
      fetchCalls.push({ url: String(url), init });
      return String(url).includes("api.telegram.org")
        ? new Response(JSON.stringify({ ok: true }), { status: 200 })
        : new Response(JSON.stringify({ ok: false }), { status: 401 });
    };

    const response = await submitContact({
      name: "Sachin",
      email: "sachin@example.com",
      organization: "Polemos",
      message: "Automate documents.",
    });

    assert.equal(response.statusCode, 200);
    assert.deepEqual(response.body, { ok: true });
    assert.equal(fetchCalls.length, 2);
  });

  test("accepts honeypot spam without sending notifications", async () => {
    process.env.TELEGRAM_BOT_TOKEN = "test-bot-token";
    process.env.TELEGRAM_CHAT_ID = "test-chat-id";

    const fetchCalls: Array<{ url: string; init?: RequestInit }> = [];
    globalThis.fetch = async (url, init) => {
      fetchCalls.push({ url: String(url), init });
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    };

    const response = await submitContact({
      name: "Bot",
      email: "bot@example.com",
      message: "Spam",
      website: "https://spam.example",
    });

    assert.equal(response.statusCode, 200);
    assert.deepEqual(response.body, { ok: true });
    assert.equal(fetchCalls.length, 0);
  });

  test("rejects invalid submissions", async () => {
    process.env.TELEGRAM_BOT_TOKEN = "test-bot-token";
    process.env.TELEGRAM_CHAT_ID = "test-chat-id";

    const fetchCalls: Array<{ url: string; init?: RequestInit }> = [];
    globalThis.fetch = async (url, init) => {
      fetchCalls.push({ url: String(url), init });
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    };

    const response = await submitContact({
      name: "Sachin",
      email: "not-an-email",
      message: "Automate documents.",
    });

    assert.equal(response.statusCode, 400);
    assert.deepEqual(response.body, {
      error: "Name, valid email, and message are required",
    });
    assert.equal(fetchCalls.length, 0);
  });

  test("returns a provider error when every configured provider rejects the request", async () => {
    process.env.TELEGRAM_BOT_TOKEN = "test-bot-token";
    process.env.TELEGRAM_CHAT_ID = "test-chat-id";

    globalThis.fetch = async () =>
      new Response(JSON.stringify({ ok: false }), { status: 401 });

    const response = await submitContact({
      name: "Sachin",
      email: "sachin@example.com",
      message: "Automate documents.",
    });

    assert.equal(response.statusCode, 502);
    assert.deepEqual(response.body, { error: "Could not send contact notification" });
  });
});
