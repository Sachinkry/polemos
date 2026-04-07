import assert from "node:assert/strict";
import { describe, test } from "node:test";
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

describe("contact form Telegram integration", () => {
  test(
    "sends a real contact submission to Telegram",
    { skip: process.env.RUN_TELEGRAM_INTEGRATION !== "1" },
    async () => {
      assert.ok(process.env.TELEGRAM_BOT_TOKEN, "TELEGRAM_BOT_TOKEN is required");
      assert.ok(process.env.TELEGRAM_CHAT_ID, "TELEGRAM_CHAT_ID is required");

      const response = makeResponse();

      await handler(
        {
          method: "POST",
          body: {
            name: "Polemos Test",
            email: "hello@polemos.in",
            organization: "Polemos Labs",
            timeline: "Integration test",
            message:
              "Integration test from the Polemos Labs contact form handler. Safe to ignore.",
          },
        },
        response,
      );

      assert.equal(response.statusCode, 200);
      assert.deepEqual(response.body, { ok: true });
    },
  );
});
