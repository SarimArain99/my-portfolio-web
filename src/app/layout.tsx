import type { Metadata } from "next";
import { Hanken_Grotesk, Mona_Sans } from "next/font/google";
import "./globals.css";
import { ChapterHeader } from "@/components/ChapterHeader";
import Footer from "@/components/Footer";
import { Reveals } from "@/components/Reveals";

const hanken = Hanken_Grotesk({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-hanken",
});

const mona = Mona_Sans({
  weight: ["900"],
  subsets: ["latin"],
  variable: "--font-mona",
});

const siteUrl = "https://portfoliosarim.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Sarim, Software Developer and Agentic AI Builder",
    template: "%s | Muhammad Sarim",
  },
  description:
    "Muhammad Sarim is a software developer building Agentic AI systems. School Admin at Islamic Science College, 1,195 students, and a teacher of Website Development with Next.js and AI. Featured work: Dayline, Physical AI and Humanoid Robotics, and CipherVault.",
  keywords: [
    "Muhammad Sarim",
    "SarimArain99",
    "Agentic AI",
    "OpenAI Agents SDK",
    "Next.js",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "Muhammad Sarim", url: siteUrl }],
  creator: "Muhammad Sarim",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Muhammad Sarim",
    title: "Muhammad Sarim, Software Developer and Agentic AI Builder",
    description:
      "Software developer building Agentic AI systems. Teacher of Website Development with Next.js and AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sarim, Software Developer and Agentic AI Builder",
    description:
      "Software developer building Agentic AI systems. Teacher of Website Development with Next.js and AI.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${mona.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-night text-ink flex flex-col font-sans">
        <ChapterHeader
          wordmark="Muhammad Sarim"
          action="Start a project"
          href="#contact"
          github="https://github.com/SarimArain99"
          linkedin="https://www.linkedin.com/in/muhammad-sarim-arain-b3795a2ba"
        />
        <div className="flex-1">{children}</div>
        <Footer />
        <Reveals />
      </body>
    </html>
  );
}
