/**
 * Bespoke visuals for the featured-project cards (direction C).
 * Each visual is a real artifact of its project, drawn in the portfolio's
 * own tokens — no fake browser chrome, no initials monograms.
 */

export function BookCover() {
  return (
    <svg
      viewBox="0 0 300 450"
      role="img"
      aria-label="Cover of the book Physical AI and Humanoid Robotics"
      className="h-full w-auto drop-shadow-cover"
    >
      <rect width="300" height="450" rx="6" className="fill-paper" />
      <rect
        x="0"
        y="0"
        width="300"
        height="450"
        rx="6"
        fill="none"
        className="stroke-line"
        strokeWidth="1"
      />
      {/* spine rule */}
      <rect x="14" y="0" width="2" height="450" className="fill-accent" />
      <text
        x="34"
        y="58"
        className="fill-muted font-mono"
        fontSize="12"
        letterSpacing="0.5"
      >
        Muhammad Sarim
      </text>
      <text
        x="34"
        y="120"
        className="fill-ink font-sans font-bold"
        fontSize="34"
      >
        <tspan x="34" dy="0">
          Physical AI
        </tspan>
        <tspan x="34" dy="40">
          &amp; Humanoid
        </tspan>
        <tspan x="34" dy="40">
          Robotics
        </tspan>
      </text>
      <rect x="34" y="212" width="56" height="3" className="fill-accent" />
      {/* Sense – Think – Act loop */}
      <g className="fill-ink font-sans" fontSize="13">
        <circle cx="52" cy="278" r="17" className="fill-panel stroke-line" />
        <circle cx="150" cy="278" r="17" className="fill-panel stroke-line" />
        <circle cx="248" cy="278" r="17" className="fill-accent" />
        <line x1="69" y1="278" x2="133" y2="278" className="stroke-line" strokeWidth="1.5" />
        <line x1="167" y1="278" x2="231" y2="278" className="stroke-line" strokeWidth="1.5" />
        <text x="52" y="283" textAnchor="middle" className="fill-ink" fontSize="12">
          S
        </text>
        <text x="150" y="283" textAnchor="middle" className="fill-ink" fontSize="12">
          T
        </text>
        <text x="248" y="283" textAnchor="middle" className="fill-accent-ink" fontSize="12">
          A
        </text>
        <text x="52" y="312" textAnchor="middle" className="fill-muted" fontSize="11">
          Sense
        </text>
        <text x="150" y="312" textAnchor="middle" className="fill-muted" fontSize="11">
          Think
        </text>
        <text x="248" y="312" textAnchor="middle" className="fill-muted" fontSize="11">
          Act
        </text>
      </g>
      <text x="34" y="404" className="fill-muted font-sans" fontSize="13">
        Robots that see, think, and act.
      </text>
      <text x="34" y="428" className="fill-muted font-mono" fontSize="11">
        An online book
      </text>
    </svg>
  );
}

export function VaultDiagram() {
  return (
    <svg
      viewBox="0 0 600 200"
      role="img"
      aria-label="Diagram of CipherVault's encryption flow, from plaintext to ciphertext"
      className="h-auto w-full"
    >
      {/* Plaintext chip */}
      <g>
        <rect x="8" y="52" width="150" height="56" rx="10" className="fill-panel stroke-line" />
        <text x="83" y="76" textAnchor="middle" className="fill-muted font-sans" fontSize="12">
          Plaintext
        </text>
        <text x="83" y="98" textAnchor="middle" className="fill-ink font-mono" fontSize="14">
          my secret
        </text>
        <text x="83" y="134" textAnchor="middle" className="fill-muted font-sans" fontSize="11">
          in your browser
        </text>
      </g>
      {/* arrow 1 */}
      <line x1="162" y1="80" x2="196" y2="80" className="stroke-accent" strokeWidth="2" />
      <path d="M196 80 l-8 -5 v10 z" className="fill-accent" />
      {/* lock / AES badge */}
      <g>
        <rect x="200" y="36" width="200" height="88" rx="10" className="fill-ink" />
        <g transform="translate(222 62)">
          <rect x="0" y="10" width="28" height="22" rx="4" fill="none" className="stroke-gold" strokeWidth="2" />
          <path
            d="M7 10 V6 a7 7 0 0 1 14 0 v4"
            fill="none"
            className="stroke-gold"
            strokeWidth="2"
          />
          <circle cx="14" cy="20" r="3" className="fill-gold" />
        </g>
        <text x="262" y="76" className="fill-paper font-mono" fontSize="15">
          AES-256-GCM
        </text>
        <text x="262" y="98" className="fill-paper font-sans" fontSize="12" opacity="0.75">
          600,000 PBKDF2 rounds
        </text>
        <text x="300" y="150" textAnchor="middle" className="fill-muted font-sans" fontSize="11">
          encrypted before it leaves
        </text>
      </g>
      {/* arrow 2 */}
      <line x1="404" y1="80" x2="438" y2="80" className="stroke-accent" strokeWidth="2" />
      <path d="M438 80 l-8 -5 v10 z" className="fill-accent" />
      {/* Ciphertext chip */}
      <g>
        <rect x="442" y="52" width="150" height="56" rx="10" className="fill-panel stroke-line" />
        <text x="517" y="76" textAnchor="middle" className="fill-muted font-sans" fontSize="12">
          Ciphertext
        </text>
        <text x="517" y="98" textAnchor="middle" className="fill-ink font-mono" fontSize="14">
          9f3a…c41d
        </text>
        <text x="517" y="134" textAnchor="middle" className="fill-muted font-sans" fontSize="11">
          what the server sees
        </text>
      </g>
    </svg>
  );
}
