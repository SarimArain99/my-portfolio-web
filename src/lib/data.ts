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
  { value: "4 Years", label: "of experience in Web Development" },
  { value: "3 Years", label: "of experience in Agentic AI Development" },
  { value: "2 Years", label: "of Teaching Website Development and AI" },
];

export const CURRENTLY =
  "School Admin · Teaching Website Development & AI";

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
      "Built as the Hackathon Todo Evolution project and renamed Dayline — a simple Todo app, rebuilt in five spec-driven phases until it becomes an AI agent system.",
    outcome:
      "Each phase adds a layer — in-memory, then persistent, then agent-driven — so the same app shows how a spec evolves into agentic software.",
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
      "A book about Physical AI and humanoid robotics — bridging the gap between the digital brain and the physical body.",
    outcome:
      "A complete online book that students can read and learn from, covering how AI moves from software into real robots.",
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
      "Secrets need a place where even the server can't read them — a zero-knowledge vault that encrypts in the browser before anything is stored.",
    outcome:
      "AES-256-GCM encryption in the browser, file tools, a password generator, and expiring share links — live and verified end to end.",
    tags: ["Next.js", "TypeScript", "WebCrypto"],
    live: "https://cipher-vault-bice.vercel.app",
    github: "https://github.com/SarimArain99/CipherVault",
    visual: {
      kind: "diagram",
      alt: "Diagram of CipherVault's encryption flow, from plaintext to ciphertext",
    },
  },
  {
    title: "Crafted Visions",
    problem:
      "A modern mini website to showcase creative and technical projects in one place.",
    outcome:
      "A sleek, fast showcase — the kind of site that lets the work speak first.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://crafted-visions-projects.vercel.app",
    github: "https://github.com/SarimArain99/Crafted-Visions",
    visual: {
      kind: "screenshot",
      src: "/projects/crafted-visions.jpg",
      alt: "Screenshot of the Crafted Visions homepage illustration",
    },
  },
];

export const MORE_PROJECTS = [
  {
    title: "ICLP — Islamic Science College Portal",
    description:
      "The production portal for Islamic Science College, built for the school I administer.",
    tags: ["Next.js", "TypeScript"],
    live: "https://iclp-isc-edu.vercel.app",
    github: "https://github.com/SarimArain99/ICLP",
  },
];
