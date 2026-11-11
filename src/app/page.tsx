import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CURRENTLY, FEATURED_PROJECTS, MORE_PROJECTS, PROFILE, STATS } from "@/lib/data";

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs text-muted">{kicker}</p>
      <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      <div className="mt-5 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-ink">
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
          className="animate-fade-up font-mono text-sm text-accent"
          style={{ animationDelay: "0ms" }}
        >
          Hi, my name is
        </p>
        <h1
          className="animate-fade-up mt-3 text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Muhammad Sarim<span className="text-accent">.</span>
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-2xl text-xl leading-relaxed text-ink sm:text-2xl"
          style={{ animationDelay: "160ms" }}
        >
          Software developer building Agentic AI systems.
        </p>
        <p
          className="animate-fade-up mt-4 max-w-2xl text-lg leading-relaxed text-ink"
          style={{ animationDelay: "240ms" }}
        >
          I&apos;m also a teacher. I teach students Website Development using
          Next.js, along with AI.
        </p>
        <p
          className="animate-fade-up mt-4 max-w-2xl leading-relaxed text-muted"
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
          <Tag>Teacher: Website Development &amp; AI</Tag>
        </div>
        <div
          className="animate-fade-up mt-8 flex flex-wrap gap-4"
          style={{ animationDelay: "440ms" }}
        >
          <a
            href="#work"
            className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-ink hover:bg-accent-dim transition-colors transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-lift"
          >
            View work ↓
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-full border border-muted px-6 py-3 text-sm font-semibold text-ink transition-colors transition-transform transition-shadow hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
        <p
          className="animate-fade-up mt-8 font-mono text-xs text-muted"
          style={{ animationDelay: "500ms" }}
        >
          Currently: <span className="text-ink">{CURRENTLY}</span>
        </p>

        {/* Experience stats */}
        <div
          className="animate-fade-up mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
          style={{ animationDelay: "560ms" }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-surface px-6 py-6 transition-colors hover:bg-panel"
            >
              <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section id="work" className="scroll-mt-20 border-t border-line py-16 sm:py-20">
        <Reveal>
          <SectionHeading kicker="01 · Selected work" title="Featured projects" />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURED_PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors transition-transform transition-shadow duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-card">
                {/* Card header: CSS mock browser chrome, not a fake screenshot */}
                <div className="border-b border-line bg-paper px-4 pb-6 pt-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                    <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  </div>
                  <p className="mt-6 font-mono text-4xl font-bold text-ink transition-transform duration-300 group-hover:-translate-y-0.5">
                    {p.initials}
                    <span className="text-accent">.</span>
                  </p>
                  <p className="mt-2 font-mono text-xs text-muted">
                    {p.live ? new URL(p.live).host : "github.com"}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.problem}</p>
                  <p className="mt-2 leading-relaxed text-muted">{p.outcome}</p>
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
                        className="text-accent hover:underline"
                      >
                        Live site ↗
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink hover:underline"
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
          <h3 className="text-lg font-bold text-ink">More projects</h3>
          <ul className="mt-4 space-y-4">
            {MORE_PROJECTS.map((p) => (
              <li
                key={p.title}
                className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-5 transition-colors transition-transform transition-shadow duration-300 hover:-translate-y-0.5 hover:border-accent/50 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-bold text-ink">{p.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
                <div className="flex shrink-0 gap-5 text-sm font-semibold">
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Live site ↗
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-ink hover:underline">
                    GitHub ↗
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 border-t border-line py-16 sm:py-20">
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
                className="aspect-[3/4] w-full rounded-2xl border border-line object-cover"
                priority
              />
              <p className="mt-3 text-center font-mono text-xs text-muted">
                Muhammad Sarim, School Admin, Islamic Science College
              </p>
            </div>
            <div className="space-y-4 leading-relaxed text-ink">
              <p>
                I&apos;m a software developer, and every day I&apos;m also
                the School Admin at Islamic Science College, responsible for
                1,195 students.
              </p>
              <p>
                I&apos;m also a teacher. I teach students Website Development
                using Next.js, along with AI, from building real websites to
                using AI as part of the development workflow.
              </p>
              <p>
                The same instinct drives my other work: Dayline, built as
                the Hackathon Todo Evolution project and renamed Dayline,
                which grows a simple app into an AI agent system;
                the Physical AI &amp; Humanoid Robotics book; and tools like
                the Data Encryption System. I like building things that are
                useful, honest, and easy to understand.
              </p>
              <p className="text-muted">
                Stack I use most: React, Next.js, TypeScript, Python, Agentic
                AI, OpenAI Agents SDK, Claude Code, Tailwind CSS.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 border-t border-line py-16 sm:py-20">
        <Reveal>
          <SectionHeading kicker="03 · Experience" title="What I've done" />
        </Reveal>
        <Reveal>
          <ol className="relative space-y-10 border-l border-line pl-8">
            <li>
              <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-paper bg-accent" />
              <p className="font-mono text-xs text-accent">Now</p>
              <h3 className="mt-1 text-xl font-bold text-ink">
                School Admin, Islamic Science College
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                Administering a school of 1,195 students: students, staff,
                academics and attendance.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Tag>School administration</Tag>
                <Tag>1,195 students</Tag>
              </div>
            </li>
            <li>
              <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-paper bg-accent" />
              <p className="font-mono text-xs text-accent">Teaching</p>
              <h3 className="mt-1 text-xl font-bold text-ink">
                Teacher: Website Development &amp; AI
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
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
              <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-paper bg-muted" />
              <p className="font-mono text-xs text-muted">Education</p>
              <h3 className="mt-1 text-xl font-bold text-ink">
                Cloud Applied Generative AI Engineering (GIAIC)
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
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
              <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-paper bg-muted" />
              <p className="font-mono text-xs text-muted">Certification</p>
              <h3 className="mt-1 text-xl font-bold text-ink">
                Freelancing (DigiSkills)
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
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
      <section id="contact" className="scroll-mt-20 border-t border-line py-20 text-center">
        <Reveal>
          <p className="text-xs text-muted">04 · Contact</p>
          <h2 className="mx-auto mt-3 max-w-xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
            I&apos;m open to freelance work, collaborations, and conversations
            about Agentic AI, teaching, and school systems. The fastest way to
            reach me is email.
          </p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-8 inline-block rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-ink hover:bg-accent-dim transition-colors transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-lift"
          >
            {PROFILE.email}
          </a>
          <ul className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-semibold">
            <li>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-ink transition-colors hover:text-accent">
                GitHub ↗
              </a>
            </li>
            <li>
              <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" className="text-ink transition-colors hover:text-accent">
                Instagram {PROFILE.instagramHandle} ↗
              </a>
            </li>
            <li>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink transition-colors hover:text-accent">
                LinkedIn ↗
              </a>
            </li>
          </ul>
          <p className="mt-8 text-sm text-muted">
            No contact form here on purpose. Email me directly and I&apos;ll reply.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
