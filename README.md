# Polemos Labs

Enterprise AI consultancy landing page built with React, TypeScript, Vite, and Tailwind CSS.

## Development

```sh
npm install
npm run dev
```

## Checks

```sh
npm run build
npm run lint
```

## Contact Form

The contact form posts to `/api/contact`, which is intended for a Vercel-style serverless deployment.
During local Vite development, `vite.config.ts` serves the same endpoint so `npm run dev` can submit the form too.

Set these environment variables in the deploy provider:

```sh
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
RESEND_API_KEY=
CONTACT_FROM_EMAIL="Polemos Labs <hello@polemos.in>"
CONTACT_TO_EMAIL=hello@polemos.in
```

Telegram can be enabled before email. Receiving and forwarding `hello@polemos.in` can be set up separately, but form-to-email delivery through Resend still needs `polemos.in` verified as a sending domain. `CONTACT_TO_EMAIL` can be a comma-separated list if you want to send to both the domain inbox and a personal inbox.

## Deployment

Vercel is the recommended deployment target for the current codebase because the contact handler lives in `/api/contact.ts`.
Cloudflare Pages can also work, but the handler should be moved/adapted to Cloudflare Pages Functions under `/functions`.
