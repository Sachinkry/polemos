type ContactRequest = {
  name?: string;
  email?: string;
  organization?: string;
  timeline?: string;
  message?: string;
  website?: string;
};

type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
  end: () => void;
};

const getString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const normalizePayload = (body: unknown): ContactRequest => {
  const parsedBody = typeof body === "string" ? JSON.parse(body) : body;

  if (!isRecord(parsedBody)) {
    return {};
  }

  return {
    name: getString(parsedBody.name),
    email: getString(parsedBody.email),
    organization: getString(parsedBody.organization),
    timeline: getString(parsedBody.timeline),
    message: getString(parsedBody.message),
    website: getString(parsedBody.website),
  };
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const getEmailRecipients = (value: string) =>
  value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

const buildPlainTextMessage = ({
  name,
  email,
  organization,
  timeline,
  message,
}: Required<Omit<ContactRequest, "website">>) =>
  [
    "New Polemos Labs inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization || "Not provided"}`,
    `Timeline: ${timeline || "Not provided"}`,
    "",
    "Workflow:",
    message,
  ].join("\n");

const sendTelegramMessage = async (text: string) => {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return;
  }

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    throw new Error("Telegram notification failed");
  }
};

const sendEmailMessage = async (
  plainText: string,
  { name, email, organization, timeline, message }: Required<Omit<ContactRequest, "website">>,
) => {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return;
  }

  const recipients = getEmailRecipients(to);

  if (recipients.length === 0) {
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: recipients,
      reply_to: email,
      subject: `New Polemos inquiry from ${organization || name}`,
      text: plainText,
      html: `
        <h2>New Polemos Labs inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Organization:</strong> ${escapeHtml(organization || "Not provided")}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(timeline || "Not provided")}</p>
        <p><strong>Workflow:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    }),
  });

  if (!response.ok) {
    throw new Error("Email notification failed");
  }
};

const isFulfilled = <T,>(result: PromiseSettledResult<T>): result is PromiseFulfilledResult<T> =>
  result.status === "fulfilled";

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader("Allow", "POST");

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  let payload: ContactRequest;

  try {
    payload = normalizePayload(req.body);
  } catch {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  if (payload.website) {
    res.status(200).json({ ok: true });
    return;
  }

  const name = payload.name ?? "";
  const email = payload.email ?? "";
  const organization = payload.organization ?? "";
  const timeline = payload.timeline ?? "";
  const message = payload.message ?? "";

  if (!name || !email || !message || !email.includes("@")) {
    res.status(400).json({ error: "Name, valid email, and message are required" });
    return;
  }

  const hasTelegram = Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
  const hasEmail = Boolean(
    process.env.RESEND_API_KEY &&
      process.env.CONTACT_FROM_EMAIL &&
      process.env.CONTACT_TO_EMAIL,
  );

  if (!hasTelegram && !hasEmail) {
    res.status(500).json({ error: "Contact notifications are not configured" });
    return;
  }

  const normalizedPayload = { name, email, organization, timeline, message };
  const plainText = buildPlainTextMessage(normalizedPayload);

  const notifications = await Promise.allSettled([
    ...(hasTelegram ? [sendTelegramMessage(plainText)] : []),
    ...(hasEmail ? [sendEmailMessage(plainText, normalizedPayload)] : []),
  ]);

  if (notifications.some(isFulfilled)) {
    res.status(200).json({ ok: true });
    return;
  }

  res.status(502).json({ error: "Could not send contact notification" });
}
