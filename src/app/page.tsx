import Image from "next/image";
import AgentDemo from "@/components/AgentDemo";
import { FEATURED_PROJECTS, MORE_PROJECTS, PROFILE } from "@/lib/data";

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22c55e]">{kicker}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-[#1f1f1f] bg-[#0c0c0c] px-3 py-1 font-mono text-xs text-zinc-300">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div id="top" className="mx-auto max-w-5xl px-5 sm:px-8">
      {/* Hero */}
      <section className="animate-fade-up pb-16 pt-16 sm:pt-24">
        <p className="font-mono text-sm text-[#22c55e]">Hi, my name is</p>
        <h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl">
          Muhammad Sarim<span className="text-[#22c55e]">.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-zinc-300 sm:text-2xl">
          Software developer building Agentic AI systems — and the school
          software I wished existed.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">
          I&apos;m a developer and School Admin at Islamic Science College
          (Boys), where I look after 1,195 students. I build with React,
          Next.js, TypeScript, Python and the OpenAI Agents SDK — and I use
          Claude Code every day.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-[#22c55e] px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
          >
            View work ↓
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
          >
            Get in touch
          </a>
        </div>
        <div className="mt-12">
          <AgentDemo />
        </div>
      </section>

      {/* Featured projects */}
      <section id="work" className="scroll-mt-20 border-t border-[#1f1f1f] py-16">
        <SectionHeading kicker="01 · Selected work" title="Featured projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURED_PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] transition-colors hover:border-[#22c55e]/60"
            >
              {/* Screenshot-style card: CSS mock browser chrome, not a fake screenshot */}
              <div className="border-b border-[#1f1f1f] bg-[#050505] px-4 pb-6 pt-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
                </div>
                <p className="mt-6 font-mono text-4xl font-bold text-white">
                  {p.initials}
                  <span className="text-[#22c55e]">.</span>
                </p>
                <p className="mt-2 font-mono text-xs text-zinc-500">
                  {p.live ? new URL(p.live).host : "github.com"}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{p.problem}</p>
                <p className="mt-2 leading-relaxed text-zinc-400">{p.outcome}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className="mt-5 flex gap-5 text-sm font-semibold">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#22c55e] hover:underline"
                    >
                      Live site ↗
                    </a>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-200 hover:underline"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-bold text-white">More projects</h3>
          <ul className="mt-4 space-y-4">
            {MORE_PROJECTS.map((p) => (
              <li
                key={p.title}
                className="flex flex-col gap-3 rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-bold text-white">{p.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
                <div className="flex shrink-0 gap-5 text-sm font-semibold">
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-[#22c55e] hover:underline">
                    Live site ↗
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:underline">
                    GitHub ↗
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 border-t border-[#1f1f1f] py-16">
        <SectionHeading kicker="02 · About" title="Why I build school software" />
        <div className="grid gap-10 md:grid-cols-[240px_1fr]">
          <div>
            <Image
              src="/sa.jpg"
              alt="Muhammad Sarim"
              width={480}
              height={640}
              className="w-full rounded-xl border border-[#1f1f1f] object-cover"
            />
            <p className="mt-3 text-center font-mono text-xs text-zinc-500">
              Muhammad Sarim — School Admin, Islamic Science College (Boys)
            </p>
          </div>
          <div className="space-y-4 leading-relaxed text-zinc-300">
            <p>
              I&apos;m a software developer — and every day I&apos;m also the
              School Admin at Islamic Science College (Boys), responsible for
              1,195 students.
            </p>
            <p>
              The school runs on RISE SMS, a system with a lot of bugs. I
              spend my days working around them: attendance that doesn&apos;t
              add up, records that don&apos;t stay in sync, and screens that
              fight you instead of helping you.
            </p>
            <p>
              So I&apos;m building a better school system myself — a
              multi-school management system, designed from the admin&apos;s
              chair, not from a sales demo. It starts with the people who run
              schools, and works outwards from there.
            </p>
            <p>
              The same instinct drives my other work: the Hackathon Todo
              Evolution, which grows a simple app into an AI agent system;
              the Physical AI &amp; Humanoid Robotics book; and tools like
              the Data Encryption System. I like building things that are
              useful, honest, and easy to understand.
            </p>
            <p className="text-zinc-400">
              Stack I use most: React, Next.js, TypeScript, Python, Agentic
              AI, OpenAI Agents SDK, Claude Code, Tailwind CSS.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 border-t border-[#1f1f1f] py-16">
        <SectionHeading kicker="03 · Experience" title="What I've done" />
        <ol className="relative space-y-10 border-l border-[#1f1f1f] pl-8">
          <li>
            <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#050505] bg-[#22c55e]" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22c55e]">Now</p>
            <h3 className="mt-1 text-xl font-bold text-white">
              School Admin — Islamic Science College (Boys)
            </h3>
            <p className="mt-2 leading-relaxed text-zinc-400">
              Administering a boys&apos; school of 1,195 students — students,
              staff, academics and attendance — and learning, first-hand, what
              school software gets wrong.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Tag>School administration</Tag>
              <Tag>1,195 students</Tag>
            </div>
          </li>
          <li>
            <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#050505] bg-zinc-600" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Education</p>
            <h3 className="mt-1 text-xl font-bold text-white">
              Cloud Applied Generative AI Engineering — GIAIC
            </h3>
            <p className="mt-2 leading-relaxed text-zinc-400">
              Currently pursuing Cloud Applied Generative AI Engineering under
              the Governor Initiative for Artificial Intelligence &amp;
              Computing (GIAIC).
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Tag>Agentic AI</Tag>
              <Tag>OpenAI Agents SDK</Tag>
              <Tag>Python</Tag>
              <Tag>TypeScript</Tag>
            </div>
          </li>
          <li>
            <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#050505] bg-zinc-600" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Certification</p>
            <h3 className="mt-1 text-xl font-bold text-white">
              Freelancing — DigiSkills
            </h3>
            <p className="mt-2 leading-relaxed text-zinc-400">
              Certified in Freelancing under DigiSkills.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Tag>Freelancing</Tag>
            </div>
          </li>
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 border-t border-[#1f1f1f] py-20 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22c55e]">04 · Contact</p>
        <h2 className="mx-auto mt-3 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Let&apos;s build something useful.
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-400">
          I&apos;m open to freelance work, collaborations, and conversations
          about Agentic AI and school systems. The fastest way to reach me is
          email.
        </p>
        <a
          href={`mailto:${PROFILE.email}`}
          className="mt-8 inline-block rounded-full bg-[#22c55e] px-8 py-4 text-base font-bold text-black transition-opacity hover:opacity-90"
        >
          {PROFILE.email}
        </a>
        <ul className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-semibold">
          <li>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-[#22c55e]">
              GitHub ↗
            </a>
          </li>
          <li>
            <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-[#22c55e]">
              Instagram {PROFILE.instagramHandle} ↗
            </a>
          </li>
          <li>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-[#22c55e]">
              LinkedIn ↗
            </a>
          </li>
        </ul>
        <p className="mt-8 text-sm text-zinc-500">
          No contact form here on purpose — email me directly and I&apos;ll reply.
        </p>
      </section>
    </div>
  );
}
