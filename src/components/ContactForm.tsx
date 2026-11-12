"use client";

import { useState, type FormEvent } from "react";
import { PROFILE } from "@/lib/data";

/**
 * Contact form with no backend and no fake send: it validates the four
 * fields, then opens the visitor's own email app with a prefilled
 * message to Muhammad. Nothing is sent from this page.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [kind, setKind] = useState("Website");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("That email address does not look right.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(
      `${kind} project, from ${name.trim()}`,
    );
    const body = encodeURIComponent(
      `Hi Muhammad,\n\n${message.trim()}\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nProject: ${kind}`,
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} noValidate className="w-full text-left">
      <div className="grid gap-4">
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Name
          </label>
          <div className="contact-field">
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="contact-input"
              placeholder="Your name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <div className="contact-field">
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contact-input"
              placeholder="Your email"
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-kind" className="sr-only">
            Project type
          </label>
          <div className="contact-field">
            <select
              id="contact-kind"
              value={kind}
              onChange={(e) => setKind(e.target.value)}
              className="contact-input"
            >
              <option>Website</option>
              <option>AI assistant or agent</option>
              <option>Automation</option>
              <option>Something else</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="contact-message" className="sr-only">
            About the project
          </label>
          <textarea
            id="contact-message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="contact-area"
            placeholder="What do you need, and when?"
          />
        </div>
      </div>
      {error && (
        <p role="alert" className="mt-4 text-sm text-amber-deep">
          {error}
        </p>
      )}
      <button type="submit" className="btn mt-6 w-full">
        Send by email
      </button>
      <p className="mt-4 text-small text-muted">
        Opens your email app. Nothing is sent from this page.
      </p>
    </form>
  );
}
