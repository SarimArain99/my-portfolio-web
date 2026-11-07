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

export type Project = {
  title: string;
  problem: string;
  outcome: string;
  tags: string[];
  live?: string;
  github: string;
  initials: string;
};

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Dayline",
    problem:
      "Built as the Hackathon Todo Evolution project and renamed Dayline — a simple Todo app, rebuilt in five spec-driven phases until it becomes an AI agent system.",
    outcome:
      "Each phase adds a layer — in-memory, then persistent, then agent-driven — so the same app shows how a spec evolves into agentic software.",
    tags: ["Python", "Agentic AI", "OpenAI Agents SDK"],
    live: "https://zenith-flow-zeta.vercel.app",
    github: "https://github.com/SarimArain99/hackathon-todo-evolution",
    initials: "DL",
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
    initials: "PA",
  },
  {
    title: "Data Encryption System",
    problem:
      "Sensitive data needs a safe place — a Streamlit app that encrypts and stores it securely.",
    outcome:
      "A secure data vault: encrypt what matters, store it, and get it back only when you need it.",
    tags: ["Python", "Streamlit"],
    github: "https://github.com/SarimArain99/Data-EncryptionSystem",
    initials: "DE",
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
    initials: "CV",
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
