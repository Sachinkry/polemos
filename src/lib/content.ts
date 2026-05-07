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
  { text: "AI systems for decisive operators", accent: true },
  { text: "·", accent: false },
  { text: "From messy data to governed action", accent: false },
  { text: "·", accent: false },
  { text: "Private models when control matters", accent: true },
  { text: "·", accent: false },
  { text: "Deploy the first workflow in weeks", accent: false },
  { text: "·", accent: false },
  { text: "Audit trails. Guardrails. Human command.", accent: true },
  { text: "·", accent: false },
  { text: "No demo theater. Operational advantage.", accent: false },
  { text: "·", accent: false },
];

export const outcomes: Outcome[] = [
  {
    industry: "Finance & Operations",
    result: "Invoices move from inbox chaos to controlled exception queues",
    story: "Ingest PDFs, emails, and ERP records; validate fields against policy; and escalate only the decisions that need a human owner.",
    highlight: "Replace manual chasing with governed review loops.",
  },
  {
    industry: "Logistics & Supply Chain",
    result: "Demand signals become procurement moves before pressure hits",
    story: "Connect transaction history, supplier data, and live operational context so planners can act before bottlenecks become expensive.",
    highlight: "Turn forecasts into triggers, not another dashboard.",
  },
  {
    industry: "Professional Services",
    result: "Institutional knowledge becomes a cited analyst layer",
    story: "Build retrieval, citation, and synthesis systems across contracts, research, tickets, and client records.",
    highlight: "Senior teams spend less time searching and more time deciding.",
  },
];

export const products: Product[] = [
  {
    tag: "Knowledge Command",
    name: "OmniGraph",
    codename: "Governed Context Layer",
    description: "Turns fragmented enterprise data into a permission-aware command layer for search, RAG, analytics, and agents.",
    features: [
      "Ingests CRM, ERP, documents, tickets, and databases",
      "Resolves entities, permissions, and source-of-truth conflicts",
      "Grounds AI outputs with traceable, structured context",
    ],
  },
  {
    tag: "Workflow Command",
    name: "NeuroTask",
    codename: "Agentic Operations Runtime",
    description: "Coordinates agents, tools, validations, and approvals across operational workflows where reliability matters.",
    features: [
      "Breaks work into inspectable, testable steps",
      "Escalates uncertainty instead of guessing",
      "Logs actions, approvals, and model decisions for audit",
    ],
  },
];

export const services: Service[] = [
  {
    problem: "Choose the battlefield",
    title: "AI Opportunity Mapping",
    description: "We identify the workflows worth automating, the data required, and the fastest route to measurable production value.",
  },
  {
    problem: "Make data usable",
    title: "Ingestion, Retrieval & Knowledge Graphs",
    description: "Pipelines, indexing, permissions, and RAG systems that make internal data usable by people, agents, and decision systems.",
  },
  {
    problem: "Move from chat to action",
    title: "Agentic Workflow Automation",
    description: "Agents that execute bounded tasks, use tools, validate outputs, and hand off to humans at the right moment.",
  },
  {
    problem: "Keep control",
    title: "Model Deployment & Tuning",
    description: "Open-source model deployment, evaluation, fine-tuning, and monitoring for teams that need security, cost control, and auditability.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01 / MAP",
    title: "Discover",
    duration: "2 weeks",
    description: "Map high-friction workflows, data readiness, risk, and ROI. You leave with a prioritized implementation brief.",
  },
  {
    number: "02 / DESIGN",
    title: "Plan",
    duration: "3 weeks",
    description: "Define architecture, model strategy, integrations, evaluation sets, and human-in-the-loop controls before code.",
  },
  {
    number: "03 / DEPLOY",
    title: "Execute",
    duration: "4 – 6 weeks",
    description: "Ship the first production workflow with ingestion, retrieval, agents, tests, observability, and real user feedback.",
  },
  {
    number: "04 / EXPAND",
    title: "Command",
    duration: "Ongoing",
    description: "Harden the system, expand to adjacent workflows, monitor quality and cost, and train your team to operate it.",
  },
];

export const fitItems: TextSegment[][] = [
  [{ text: "You have a " }, { text: "specific operational bottleneck", bold: true }, { text: " with measurable cost, delay, or risk" }],
  [{ text: "You own " }, { text: "proprietary data", bold: true }, { text: " that should become a strategic advantage" }],
  [{ text: "You need " }, { text: "secure deployment", bold: true }, { text: " across existing tools, teams, and approval paths" }],
  [{ text: "You measure success by " }, { text: "business outcomes", bold: true }, { text: ", not model benchmarks or prototypes" }],
  [{ text: "You have the " }, { text: "mandate to ship", bold: true }, { text: " and a team ready to own the system after launch" }],
];

export const problemStats = [
  { value: "01", label: "workflow terrain mapped before model choice" },
  { value: "02", label: "private data connected with permissions intact" },
  { value: "03", label: "human command where risk is high" },
  { value: "04", label: "production telemetry from day one" },
] as const;

export const navLinks = [
  { label: "Work", href: "#outcomes" },
  { label: "Accelerators", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
] as const;
