import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://portfoliosarim.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Sarim — Software Developer & Agentic AI Builder",
    template: "%s | Muhammad Sarim",
  },
  description:
    "Muhammad Sarim is a software developer building Agentic AI systems. School Admin at Islamic Science College, 1,195 students, and a teacher of Website Development with Next.js and AI. Featured work: Dayline (built as the Hackathon Todo Evolution project and renamed Dayline), Physical AI & Humanoid Robotics, CipherVault, Crafted Visions.",
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
    title: "Muhammad Sarim — Software Developer & Agentic AI Builder",
    description:
      "Software developer building Agentic AI systems. Teacher of Website Development with Next.js and AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sarim — Software Developer & Agentic AI Builder",
    description:
      "Software developer building Agentic AI systems. Teacher of Website Development with Next.js and AI.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink flex flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
