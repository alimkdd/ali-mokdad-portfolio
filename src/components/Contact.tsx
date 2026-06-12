"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { site } from "@/data/content";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const links = [
  { label: "Email", href: `mailto:${site.email}`, icon: <MailIcon /> },
  { label: "Phone", href: `tel:${site.phoneHref}`, icon: <PhoneIcon /> },
  { label: "LinkedIn", href: site.linkedin, icon: <LinkedInIcon /> },
  { label: "GitHub", href: site.github, icon: <GitHubIcon /> },
];

const inputClasses =
  "w-full rounded border border-edge bg-raised px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data._gotcha) return; // honeypot
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `Portfolio contact — ${data.name}`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <Reveal>
        <div className="hero-glow rounded-xl border border-edge bg-surface px-7 py-12 sm:px-12">
          <div className="text-center">
            <p className="font-mono text-xs tracking-[0.3em] text-accent">FINAL SET — NO SPOTTER NEEDED</p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Building something that has to be reliable?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Wallets, payments, integrations, or anything backend-heavy — I&apos;d love to hear about it.
            </p>
          </div>

          <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-xl space-y-4 text-left">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="sr-only">Your name</span>
                <input name="name" required placeholder="Your name" autoComplete="name" className={inputClasses} />
              </label>
              <label className="block">
                <span className="sr-only">Your email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  autoComplete="email"
                  className={inputClasses}
                />
              </label>
            </div>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="What are you building?"
                className={`${inputClasses} resize-y`}
              />
            </label>
            {/* honeypot — hidden from humans, tempting for bots */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded bg-accent px-7 py-3 font-mono text-sm font-bold text-white transition-colors hover:bg-accent-bright disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
              {status === "sent" && (
                <p role="status" className="text-sm text-emerald-400">
                  Message sent — I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="text-sm text-accent-bright">
                  Something went wrong — email me directly at{" "}
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>
                </p>
              )}
            </div>
          </form>

          <ul className="mt-10 flex items-center justify-center gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-edge text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent-bright"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
