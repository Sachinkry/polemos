import LegalPage from "./LegalPage";

const sections = [
  {
    title: "What we collect",
    body: [
      "If you use the contact form, we collect the details you choose to submit: your name, work email, organization, timeline, and a short description of the workflow you want to discuss.",
      "Our website and hosting providers may also process basic technical data such as IP address, browser information, request logs, and timestamps for security, reliability, and abuse prevention.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "We use submitted information to respond to inquiries, understand whether a workflow is a good fit, prepare follow-up conversations, and improve our services.",
      "We do not sell contact form submissions or use them for unrelated advertising.",
    ],
  },
  {
    title: "Where it goes",
    body: [
      "Contact form submissions may be sent to our private Telegram notification channel so we can respond quickly. Emails sent to hello@polemos.in may be forwarded to our founder's personal inbox for business follow-up.",
      "If email notification services such as Resend are enabled later, form details may also be processed by that provider for the purpose of delivering the notification.",
    ],
  },
  {
    title: "Do not submit",
    body: [
      "Please do not submit passwords, API keys, confidential credentials, private customer data, regulated data, or production system secrets through the website form.",
      "If a project requires sensitive data, we will handle that separately under an appropriate written agreement and security process.",
    ],
  },
  {
    title: "Retention",
    body: [
      "We keep inquiry details only as long as reasonably needed for business follow-up, recordkeeping, security, and legal compliance.",
      "You can ask us to delete or correct your inquiry by emailing hello@polemos.in.",
    ],
  },
  {
    title: "Analytics",
    body: [
      "We do not currently use website analytics or advertising cookies. If that changes, we will update this policy to describe the tools and the data they process.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy questions or requests, email hello@polemos.in.",
    ],
  },
];

const Privacy = () => (
  <LegalPage
    eyebrow="Privacy"
    title="Privacy Policy"
    intro="This policy explains what Polemos Labs collects through this website and how we use it. It is intentionally short because the site is simple: we collect only what is needed to respond to business inquiries."
    sections={sections}
  />
);

export default Privacy;
