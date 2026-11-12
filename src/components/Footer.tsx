import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer data-chapter="night" aria-label="Footer" className="pt-24! pb-10!">
      <div className="frame grid gap-12 md:grid-cols-2">
        <ul className="grid gap-2 text-lead">
          <li>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-amber underline-offset-4 hover:underline"
            >
              {PROFILE.email}
            </a>
          </li>
          <li>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={PROFILE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <ul className="grid content-start gap-2 text-body text-night-muted">
          <li>
            <a href="#work" className="hover:text-night-ink">
              Featured work
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-night-ink">
              What I build
            </a>
          </li>
          <li>
            <a href="#index" className="hover:text-night-ink">
              Everything shipped
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-night-ink">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <p className="frame mt-16 text-lead">
        Four years of web development, three of agentic AI, two of teaching.
      </p>
      <p className="footer-name wordmark frame mt-20" aria-hidden>
        Muhammad Sarim
      </p>
      <div className="frame mt-10 flex flex-wrap justify-between gap-4 text-small text-night-muted">
        <p>© 2026 Muhammad Sarim. Built with Next.js and three.js.</p>
        <a href="#top" className="link">
          Back to top
        </a>
      </div>
    </footer>
  );
}
