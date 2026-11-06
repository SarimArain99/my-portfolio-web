import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CURRENTLY, FEATURED_PROJECTS, MORE_PROJECTS, PROFILE, STATS } from "@/lib/data";

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2dd4a7]">{kicker}</p>
      <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      <div className="mt-5 h-px w-24 bg-gradient-to-r from-[#2dd4a7] to-transparent" />
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
      <section className="pb-16 pt-16 sm:pt-24">
        <p
          className="animate-fade-up font-mono text-sm text-[#2dd4a7]"
          style={{ animationDelay: "0ms" }}
        >
          Hi, my name is
        </p>
        <h1
          className="animate-fade-up mt-3 text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Muhammad Sarim<span className="text-[#2dd4a7]">.</span>
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-2xl text-xl leading-relaxed text-zinc-100 sm:text-2xl"
          style={{ animationDelay: "160ms" }}
        >
          Software developer building Agentic AI systems.
        </p>
        <p
          className="animate-fade-up mt-4 max-w-2xl text-lg leading-relaxed text-zinc-300"
          style={{ animationDelay: "240ms" }}
        >
          I&apos;m also a teacher — I teach students Website Development using
          Next.js, along with AI.
        </p>
        <p
          className="animate-fade-up mt-4 max-w-2xl leading-relaxed text-zinc-400"
          style={{ animationDelay: "320ms" }}
        >
          I&apos;m a developer and School Admin at Islamic Science College,
          where I look after 1,195 students. I build with React, Next.js,
          TypeScript, Python and the OpenAI Agents SDK.
        </p>
        <div
          className="animate-fade-up mt-6 flex flex-wrap gap-2"
          style={{ animationDelay: "380ms" }}
        >
          <Tag>Agentic AI Developer</Tag>
          <Tag>School Admin</Tag>
          <Tag>Teacher — Website Development &amp; AI</Tag>
        </div>
        <div
          className="animate-fade-up mt-8 flex flex-wrap gap-4"
          style={{ animationDelay: "440ms" }}
        >
          <a
            href="#work"
            className="rounded-full bg-[#2dd4a7] px-6 py-3 text-sm font-bold text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(45,212,167,0.35)]"
          >
            View work ↓
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[#2dd4a7] hover:text-[#2dd4a7]"
          >
            Get in touch
          </a>
        </div>
        <p
          className="animate-fade-up mt-8 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500"
          style={{ animationDelay: "500ms" }}
        >
          Currently — <span className="text-zinc-300">{CURRENTLY}</span>
        </p>

        {/* Experience stats */}
        <div
          className="animate-fade-up mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#1f1f1f] sm:grid-cols-3"
          style={{ animationDelay: "560ms" }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-[#0c0c0c] px-6 py-6 transition-colors hover:bg-[#101a17]"
            >
              <p className="text-3xl font-bold tracking-tight text-[#2dd4a7] sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section id="work" className="scroll-mt-20 border-t border-[#1f1f1f] py-16 sm:py-20">
        <Reveal>
          <SectionHeading kicker="01 · Selected work" title="Featured projects" />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURED_PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0c0c0c] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2dd4a7]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* Card header: CSS mock browser chrome, not a fake screenshot */}
                <div className="border-b border-[#1f1f1f] bg-[#050505] px-4 pb-6 pt-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#2dd4a7]" />
                  </div>
                  <p className="mt-6 font-mono text-4xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                    {p.initials}
                    <span className="text-[#2dd4a7]">.</span>
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
                        className="text-[#2dd4a7] hover:underline"
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
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <h3 className="text-lg font-bold text-white">More projects</h3>
          <ul className="mt-4 space-y-4">
            {MORE_PROJECTS.map((p) => (
              <li
                key={p.title}
                className="flex flex-col gap-3 rounded-2xl border border-[#1f1f1f] bg-[#0c0c0c] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2dd4a7]/50 sm:flex-row sm:items-center sm:justify-between"
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
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-[#2dd4a7] hover:underline">
                    Live site ↗
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:underline">
                    GitHub ↗
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 border-t border-[#1f1f1f] py-16 sm:py-20">
        <Reveal>
          <SectionHeading kicker="02 · About" title="Developer, admin &amp; teacher" />
        </Reveal>
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[260px_1fr]">
            <div>
              <Image
                src="/profile.jpg"
                alt="Muhammad Sarim"
                width={720}
                height={1207}
                className="aspect-[3/4] w-full rounded-2xl border border-[#1f1f1f] object-cover"
                priority
              />
              <p className="mt-3 text-center font-mono text-xs text-zinc-500">
                Muhammad Sarim — School Admin, Islamic Science College
              </p>
            </div>
            <div className="space-y-4 leading-relaxed text-zinc-300">
              <p>
                I&apos;m a software developer — and every day I&apos;m also
                the School Admin at Islamic Science College, responsible for
                1,195 students.
              </p>
              <p>
                I&apos;m also a teacher. I teach students Website Development
                using Next.js, along with AI — from building real websites to
                using AI as part of the development workflow.
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
        </Reveal>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 border-t border-[#1f1f1f] py-16 sm:py-20">
        <Reveal>
          <SectionHeading kicker="03 · Experience" title="What I've done" />
        </Reveal>
        <Reveal>
          <ol className="relative space-y-10 border-l border-[#1f1f1f] pl-8">
            <li>
              <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#050505] bg-[#2dd4a7]" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2dd4a7]">Now</p>
              <h3 className="mt-1 text-xl font-bold text-white">
                School Admin — Islamic Science College
              </h3>
              <p className="mt-2 leading-relaxed text-zinc-400">
                Administering a school of 1,195 students — students, staff,
                academics and attendance.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Tag>School administration</Tag>
                <Tag>1,195 students</Tag>
              </div>
            </li>
            <li>
              <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#050505] bg-[#2dd4a7]" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2dd4a7]">Teaching</p>
              <h3 className="mt-1 text-xl font-bold text-white">
                Teacher — Website Development &amp; AI
              </h3>
              <p className="mt-2 leading-relaxed text-zinc-400">
                Teaching students Website Development using Next.js, along
                with AI.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Tag>Next.js</Tag>
                <Tag>Website Development</Tag>
                <Tag>AI</Tag>
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
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 border-t border-[#1f1f1f] py-20 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2dd4a7]">04 · Contact</p>
          <h2 className="mx-auto mt-3 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-400">
            I&apos;m open to freelance work, collaborations, and conversations
            about Agentic AI, teaching, and school systems. The fastest way to
            reach me is email.
          </p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-8 inline-block rounded-full bg-[#2dd4a7] px-8 py-4 text-base font-bold text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(45,212,167,0.35)]"
          >
            {PROFILE.email}
          </a>
          <ul className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-semibold">
            <li>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-zinc-200 transition-colors hover:text-[#2dd4a7]">
                GitHub ↗
              </a>
            </li>
            <li>
              <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-200 transition-colors hover:text-[#2dd4a7]">
                Instagram {PROFILE.instagramHandle} ↗
              </a>
            </li>
            <li>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-200 transition-colors hover:text-[#2dd4a7]">
                LinkedIn ↗
              </a>
            </li>
          </ul>
          <p className="mt-8 text-sm text-zinc-500">
            No contact form here on purpose — email me directly and I&apos;ll reply.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
