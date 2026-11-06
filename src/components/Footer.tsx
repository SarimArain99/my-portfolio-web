import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © 2026 Muhammad Sarim. Built with Next.js, React &amp; TypeScript.
        </p>
        <ul className="flex flex-wrap items-center gap-5">
          <li>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              GitHub
            </a>
          </li>
          <li>
            <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              Instagram
            </a>
          </li>
          <li>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${PROFILE.email}`} className="transition-colors hover:text-white">
              Email
            </a>
          </li>
          <li>
            <a href="#top" className="font-semibold text-[#2dd4a7] transition-opacity hover:opacity-80">
              Back to top ↑
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
