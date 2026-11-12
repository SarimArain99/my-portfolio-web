import Image from "next/image";
import { BusinessPreview } from "@/components/BusinessPreview";
import ContactForm from "@/components/ContactForm";
import { HeroSwarm } from "@/components/HeroSwarm";
import { WorkScene } from "@/components/WorkScene";
import {
  INDEX_ITEMS,
  LIVE,
  PROFILE,
  SERVICES,
  SERVICE_ROW_LABELS,
  TOOLBOX,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <main id="top">
        <section data-chapter="night" className="hero frame" aria-labelledby="hero-title">
          <HeroSwarm className="hero-stage" />
          <h1 id="hero-title" className="text-display">
            <span className="block">Useful software,</span>
            <span className="block">honestly built.</span>
          </h1>
          <div className="hero-body">
            <div className="hero-swarm" data-hero-focus>
              <p className="hero-fallback wordmark" aria-hidden>
                Muhammad Sarim
              </p>
            </div>
            <div className="hero-foot">
              <p className="text-lead">
                I build websites and AI assistants, and ship products of my own.
              </p>
              <a href="#contact" className="btn">
                Start a project
              </a>
            </div>
          </div>
        </section>

        <section data-chapter="night" id="work" aria-labelledby="work-title" className="pt-0!">
          <h2 id="work-title" className="sr-only">
            Featured work
          </h2>
          <WorkScene />
        </section>

        <section data-chapter="amber" id="try" className="frame" aria-labelledby="try-title">
          <div data-reveal>
            <h2 id="try-title" className="text-head max-w-[16ch]">
              {LIVE.heading}
            </h2>
            <p className="mt-6 max-w-[48ch] text-body">{LIVE.note}</p>
            <div className="mt-12">
              <BusinessPreview />
            </div>
          </div>
        </section>

        <section data-chapter="ground" id="services" className="frame roomy" aria-labelledby="services-title">
          <div data-reveal className="grid gap-12">
            <div className="grid gap-6 md:grid-cols-2 md:items-end">
              <h2 id="services-title" className="text-head max-w-[12ch]">
                What I build for you
              </h2>
              <p className="text-lead max-w-[36ch]">
                Every project starts with a scoped quote. The code is yours.
              </p>
            </div>
            <div className="plans-stack">
              {SERVICES.map((p) => (
                <div
                  key={p.name}
                  className={`plan-block ${"recommended" in p && p.recommended ? "bg-amber" : ""}`}
                >
                  <h3 className="text-head">{p.name}</h3>
                  <dl className="mt-5 grid gap-3">
                    {SERVICE_ROW_LABELS.map((label, r) => (
                      <div key={label}>
                        <dt className="text-muted">{label}</dt>
                        <dd>{p.rows[r]}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
            <div className="hidden md:block">
              <table className="plans">
                <thead>
                  <tr>
                    <th scope="col" className="w-[28%] text-body font-normal text-muted">
                      Compare
                    </th>
                    {SERVICES.map((p) => (
                      <th
                        key={p.name}
                        scope="col"
                        className={"recommended" in p && p.recommended ? "rec" : undefined}
                      >
                        <span className="block text-lead font-medium">{p.name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SERVICE_ROW_LABELS.map((label, r) => (
                    <tr key={label}>
                      <th scope="row" className="text-body font-normal text-muted">
                        {label}
                      </th>
                      {SERVICES.map((p) => (
                        <td
                          key={p.name}
                          className={"recommended" in p && p.recommended ? "rec" : undefined}
                        >
                          {p.rows[r]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a href="#contact" className="btn btn-ink justify-self-start">
              Ask about your project
            </a>
          </div>
        </section>

        <section data-chapter="grey" id="index" className="frame" aria-labelledby="index-title">
          <div data-reveal>
            <div className="mb-10 flex flex-wrap items-baseline gap-x-8 gap-y-2">
              <h2 id="index-title" className="text-head">
                Everything shipped
              </h2>
              <p className="text-body text-muted">
                Every project links to code or a live page.
              </p>
            </div>
            <ul className="spines">
              {INDEX_ITEMS.map((it) => (
                <li key={it.name} className="contents">
                  <a
                    href={it.href}
                    data-kind={it.kind}
                    className="spine"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{it.name}</span>
                    <span className="kind">{it.kind}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section data-chapter="ground" className="frame" aria-labelledby="tools-title">
          <div data-reveal className="toolbox">
            <h2 id="tools-title" className="text-lead font-medium md:col-span-2">
              What I build with
            </h2>
            {TOOLBOX.map((g) => (
              <div key={g.name} className="mt-10">
                <p className="text-body text-muted">{g.name}</p>
                <ul className="mt-2">
                  {g.rows.map(([tool, where]) => (
                    <li key={tool} className="tool-row">
                      <span>{tool}</span>
                      <span className="text-small text-muted">{where}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section data-chapter="night" className="frame roomy" aria-labelledby="about-title">
          <h2 id="about-title" className="sr-only">
            About Muhammad Sarim
          </h2>
          <div data-reveal className="about-grid">
            <div className="about-photo">
              <Image
                src="/profile.jpg"
                alt="Muhammad Sarim"
                width={480}
                height={640}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="about-text">
              <span className="font-medium">Muhammad Sarim</span> is a
              developer, a teacher, and the School Admin at Islamic Science
              College, for{" "}
              <span className="mark mark-ground">1,195 students</span>.{" "}
              <span className="mark mark-amber">Dayline</span> began as a
              hackathon todo app and became an AI agent system. The{" "}
              <span className="mark mark-amber">Physical AI book</span> teaches
              how AI moves into real robots.{" "}
              <span className="mark mark-amber">CipherVault</span> keeps secrets
              where even the server cannot read them.
            </p>
          </div>
        </section>

        <section data-chapter="ground" id="contact" className="frame" aria-labelledby="contact-title">
          <div data-reveal className="mx-auto w-full max-w-[560px]">
            <h2 id="contact-title" className="text-lead font-medium">
              <span className="block text-muted">Tell me what you need.</span>
              <span className="block">I reply within a day.</span>
            </h2>
            <div className="mt-7">
              <ContactForm />
            </div>
            <dl className="mt-16 grid gap-3">
              <div className="tool-row">
                <dt className="text-muted">Email</dt>
                <dd>
                  <a href={`mailto:${PROFILE.email}`} className="link">
                    {PROFILE.email}
                  </a>
                </dd>
              </div>
              <div className="tool-row">
                <dt className="text-muted">GitHub</dt>
                <dd>
                  <a href={PROFILE.github} className="link" target="_blank" rel="noopener noreferrer">
                    github.com/SarimArain99
                  </a>
                </dd>
              </div>
              <div className="tool-row">
                <dt className="text-muted">LinkedIn</dt>
                <dd>
                  <a href={PROFILE.linkedin} className="link" target="_blank" rel="noopener noreferrer">
                    Muhammad Sarim
                  </a>
                </dd>
              </div>
              <div className="tool-row">
                <dt className="text-muted">Instagram</dt>
                <dd>
                  <a href={PROFILE.instagram} className="link" target="_blank" rel="noopener noreferrer">
                    {PROFILE.instagramHandle}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
    </>
  );
}
