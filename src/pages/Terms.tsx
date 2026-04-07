import LegalPage from "./LegalPage";

const sections = [
  {
    title: "Website use",
    body: [
      "This website is provided for general information about Polemos Labs and our AI implementation services. You may browse the site and contact us about potential work.",
      "You may not misuse the site, attempt to disrupt it, submit malicious content, or use it to send spam.",
    ],
  },
  {
    title: "No client relationship",
    body: [
      "Submitting the contact form or emailing us does not create a client, consulting, fiduciary, or confidential relationship.",
      "Any pilot, implementation, advisory, or consulting work will require a separate written agreement that defines scope, responsibilities, fees if any, confidentiality, security, and other project terms.",
    ],
  },
  {
    title: "Sensitive information",
    body: [
      "Do not submit passwords, API keys, confidential credentials, private customer data, regulated data, or production system secrets through the website form.",
      "If sensitive information is required to evaluate or deliver work, we will decide the right process separately before receiving it.",
    ],
  },
  {
    title: "No guarantees",
    body: [
      "We try to keep the website accurate, but we do not guarantee that all content is complete, current, error-free, or suitable for a specific business outcome.",
      "References to possible AI systems, automations, agents, model deployments, retrieval workflows, or fine-tuning are examples of capabilities, not promises of results.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "The website content, visual design, brand assets, and Polemos Labs name are owned by or licensed to Polemos Labs unless otherwise stated.",
      "You may not copy or reuse our brand assets in a way that suggests endorsement, partnership, or ownership.",
    ],
  },
  {
    title: "Third parties",
    body: [
      "The site may rely on third-party infrastructure or link to third-party services. Those services may have their own terms and privacy practices.",
    ],
  },
  {
    title: "Governing law",
    body: [
      "These website terms are governed by the laws of India, unless a separate written agreement says otherwise.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions about these terms, email hello@polemos.in.",
    ],
  },
];

const Terms = () => (
  <LegalPage
    eyebrow="Terms"
    title="Terms of Use"
    intro="These terms cover use of the Polemos Labs website. They are separate from any future pilot, consulting, or implementation agreement."
    sections={sections}
  />
);

export default Terms;
