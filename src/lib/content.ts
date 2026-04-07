export interface TickerItem {
  text: string;
  accent: boolean;
}

export interface Outcome {
  industry: string;
  result: string;
  story: string;
  highlight: string;
}

export interface Product {
  tag: string;
  name: string;
  codename: string;
  description: string;
  features: string[];
}

export interface Service {
  problem: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
}

/** A text segment — optionally bolded — for rich inline copy. */
export interface TextSegment {
  text: string;
  bold?: boolean;
}

export const tickerItems: TickerItem[] = [
  { text: "Automate document-heavy workflows", accent: true },
  { text: "·", accent: false },
  { text: "From ingestion to deployed agents", accent: false },
  { text: "·", accent: false },
  { text: "Open-source models when they fit", accent: true },
  { text: "·", accent: false },
  { text: "Ship the first workflow in weeks", accent: false },
  { text: "·", accent: false },
  { text: "Private data. Auditable systems.", accent: true },
  { text: "·", accent: false },
  { text: "No AI theater. Production outcomes.", accent: false },
  { text: "·", accent: false },
];

export const outcomes: Outcome[] = [
  {
    industry: "Finance & Operations",
    result: "Invoices routed, checked, and reconciled automatically",
    story: "Ingest PDFs, emails, and ERP records; validate fields; and escalate only the exceptions that need a human decision.",
    highlight: "Move teams from manual review to exception handling.",
  },
  {
    industry: "Logistics & Supply Chain",
    result: "Demand signals become procurement decisions",
    story: "Connect transaction history, supplier data, and live operational context so planners act before bottlenecks turn expensive.",
    highlight: "Turn forecasts into workflow triggers, not dashboard noise.",
  },
  {
    industry: "Professional Services",
    result: "Internal knowledge becomes an analyst copilot",
    story: "Build retrieval, citation, and synthesis systems across contracts, research, tickets, and client documents.",
    highlight: "Senior teams spend less time searching and more time deciding.",
  },
];

export const products: Product[] = [
  {
    tag: "Enterprise Knowledge",
    name: "OmniGraph",
    codename: "Private Knowledge Layer",
    description: "Turns fragmented enterprise data into a governed context layer for search, RAG, analytics, and agents.",
    features: [
      "Ingests CRM, ERP, documents, tickets, and databases",
      "Resolves entities, permissions, and source-of-truth conflicts",
      "Grounds AI outputs with traceable, structured context",
    ],
  },
  {
    tag: "Autonomous Operations",
    name: "NeuroTask",
    codename: "Agentic Workflow Runtime",
    description: "Coordinates AI agents, tools, validations, and approvals across multi-step operational workflows.",
    features: [
      "Breaks work into inspectable, testable steps",
      "Escalates uncertainty instead of guessing",
      "Logs actions, approvals, and model decisions for audit",
    ],
  },
];

export const services: Service[] = [
  {
    problem: "You need clarity before investment",
    title: "AI Workflow Discovery",
    description: "We identify the workflows worth automating, the data required, and the quickest path to production value.",
  },
  {
    problem: "Your data is messy and scattered",
    title: "Data Ingestion & Retrieval",
    description: "Pipelines, indexing, knowledge graphs, and RAG systems that make internal data usable by people and agents.",
  },
  {
    problem: "Work still depends on handoffs",
    title: "Agentic Workflow Automation",
    description: "AI agents that execute bounded tasks, use tools, validate outputs, and hand off to humans at the right moment.",
  },
  {
    problem: "You need control over model behavior",
    title: "Model Deployment & Tuning",
    description: "Open-source model deployment, evaluation, fine-tuning, and monitoring for secure enterprise environments.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01 / EVALUATE",
    title: "Diagnose",
    duration: "2 weeks",
    description: "Map high-friction workflows, data readiness, security constraints, and ROI. You leave with a prioritized implementation brief.",
  },
  {
    number: "02 / ARCHITECT",
    title: "Architect",
    duration: "3 weeks",
    description: "Define the system design, model strategy, integration plan, evaluation set, and human-in-the-loop controls before code.",
  },
  {
    number: "03 / BUILD",
    title: "Build",
    duration: "4 – 6 weeks",
    description: "Ship the first production workflow with ingestion, retrieval, agents, tests, observability, and real user feedback.",
  },
  {
    number: "04 / SCALE",
    title: "Scale",
    duration: "Ongoing",
    description: "Harden the system, expand to adjacent workflows, monitor quality and cost, and train your team to operate it.",
  },
];

export const fitItems: TextSegment[][] = [
  [{ text: "You have a " }, { text: "specific workflow bottleneck", bold: true }, { text: " with measurable cost or delay" }],
  [{ text: "You own " }, { text: "proprietary data", bold: true }, { text: " that should become an operational advantage" }],
  [{ text: "You need " }, { text: "secure deployment", bold: true }, { text: " across existing tools, teams, and approval paths" }],
  [{ text: "You measure success by " }, { text: "business outcomes", bold: true }, { text: ", not model benchmarks or prototypes" }],
  [{ text: "You have the " }, { text: "mandate to ship", bold: true }, { text: " and a team ready to own the system after launch" }],
];

export const problemStats = [
  { value: "01", label: "workflow first, model second" },
  { value: "02", label: "private data connected with permissions intact" },
  { value: "03", label: "human approval where risk is high" },
  { value: "04", label: "production monitoring from day one" },
] as const;

export const navLinks = [
  { label: "Work", href: "#outcomes" },
  { label: "Accelerators", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
] as const;
