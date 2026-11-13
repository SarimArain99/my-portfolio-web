export const PROFILE = {
  name: "Muhammad Sarim",
  handle: "SarimArain99",
  role: "Software developer building Agentic AI systems",
  email: "sarimarain99@gmail.com",
  github: "https://github.com/SarimArain99",
  instagram: "https://instagram.com/dev_sarim_arain",
  instagramHandle: "@dev_sarim_arain",
  linkedin: "https://www.linkedin.com/in/muhammad-sarim-arain-b3795a2ba",
  site: "https://portfoliosarim.vercel.app",
};

export const STATS = [
  { value: "4 Years", label: "Web Development" },
  { value: "3 Years", label: "Agentic AI" },
  { value: "2 Years", label: "Teaching" },
];

export const CURRENTLY =
  "School Admin, Teaching Website Development and AI";

export type ProjectVisual =
  | { kind: "screenshot"; src: string; alt: string }
  | { kind: "cover"; alt: string }
  | { kind: "diagram"; alt: string };

export type Project = {
  title: string;
  problem: string;
  outcome: string;
  tags: string[];
  live?: string;
  github: string;
  visual: ProjectVisual;
};

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Dayline",
    problem:
      "Hackathon Todo Evolution, rebuilt in five phases into an AI agent system.",
    outcome:
      "Five phases: in-memory, persistence, auth, AI assistant.",
    tags: ["Python", "Agentic AI", "OpenAI Agents SDK"],
    live: "https://dayline-todo.vercel.app",
    github: "https://github.com/SarimArain99/hackathon-todo-evolution",
    visual: {
      kind: "screenshot",
      src: "/projects/dayline.jpg",
      alt: "Screenshot of the Dayline app showing the day timeline",
    },
  },
  {
    title: "Physical AI & Humanoid Robotics",
    problem:
      "An online book on Physical AI and humanoid robotics.",
    outcome:
      "How AI moves from software into robots.",
    tags: ["Next.js", "TypeScript", "React"],
    live: "https://physical-ai-and-humanoid-robotics-sarim.vercel.app",
    github:
      "https://github.com/SarimArain99/physical-ai-and-humanoid-robotics",
    visual: {
      kind: "cover",
      alt: "Cover of the book Physical AI and Humanoid Robotics",
    },
  },
  {
    title: "CipherVault",
    problem:
      "A zero-knowledge vault that encrypts in the browser first.",
    outcome:
      "AES-256-GCM in the browser, file tools, and expiring share links.",
    tags: ["Next.js", "TypeScript", "WebCrypto"],
    live: "https://cipher-vault-bice.vercel.app",
    github: "https://github.com/SarimArain99/CipherVault",
    visual: {
      kind: "diagram",
      alt: "Diagram of CipherVault's encryption flow, from plaintext to ciphertext",
    },
  },
];

export const SERVICES = [
  {
    name: "Website",
    rows: [
      "A fast site on your domain",
      "Businesses that need to be found",
      "Contact form, maps, SEO",
    ],
  },
  {
    name: "AI assistant",
    rows: [
      "Answers from your pages or FAQ",
      "Same questions, answered daily",
      "Your logo, setup guide",
    ],
    recommended: true,
  },
  {
    name: "Automation",
    rows: [
      "One automation, two apps",
      "Repetitive work done by hand",
      "Runs itself",
    ],
  },
];

export const SERVICE_ROW_LABELS = ["What you get", "Good for", "Included"];

export const LIVE = {
  heading: "What would I build for you?",
  note: "Type your business. This is the first screen and the chat greeting I would start from.",
  placeholder: "Islamic Science College",
};

export const INDEX_ITEMS: { name: string; kind: "AI" | "Web"; href: string }[] = [
  { name: "Dayline", kind: "AI", href: "https://github.com/SarimArain99/hackathon-todo-evolution" },
  { name: "Physical AI book", kind: "AI", href: "https://github.com/SarimArain99/physical-ai-and-humanoid-robotics" },
  { name: "CipherVault", kind: "Web", href: "https://github.com/SarimArain99/CipherVault" },
  { name: "ICLP", kind: "Web", href: "https://github.com/SarimArain99/ICLP" },
];

export const TOOLBOX: { name: string; rows: [string, string][] }[] = [
  {
    name: "AI",
    rows: [
      ["OpenAI Agents SDK", "Dayline"],
      ["RAG with Qdrant", "Physical AI"],
      ["Agentic AI", "Dayline"],
      ["Claude Code", "this site"],
    ],
  },
  {
    name: "Web",
    rows: [
      ["Next.js and React", "this site"],
      ["Tailwind CSS", "this site"],
      ["TypeScript", "all three projects"],
      ["three.js", "this site"],
    ],
  },
  {
    name: "Backend and data",
    rows: [
      ["Python", "Dayline"],
      ["PostgreSQL (Neon)", "CipherVault"],
      ["WebCrypto", "CipherVault"],
    ],
  },
  {
    name: "Ship",
    rows: [
      ["Vercel", "most projects"],
      ["GitHub", "all projects"],
    ],
  },
];

export const MORE_PROJECTS = [
  {
    title: "ICLP, Islamic Science College Portal",
    description:
      "The production portal for Islamic Science College, built for the school I administer.",
    tags: ["Next.js", "TypeScript"],
    live: "https://iclp-isc-edu.vercel.app",
    github: "https://github.com/SarimArain99/ICLP",
  },
];
