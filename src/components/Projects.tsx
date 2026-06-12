import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Lifting from "./Lifting";
import { projects, site } from "@/data/content";

function Terminal({ cmd, lines }: { cmd: string; lines: string[] }) {
  return (
    <div className="overflow-hidden rounded-md border border-edge bg-bg" aria-hidden>
      <div className="flex items-center gap-1.5 border-b border-edge bg-raised px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-accent/70" />
        <span className="h-2 w-2 rounded-full bg-edge" />
        <span className="h-2 w-2 rounded-full bg-edge" />
      </div>
      <div className="space-y-1 px-3 py-2.5 font-mono text-[10px] leading-relaxed text-muted">
        <p className="text-ink">
          <span className="text-accent">$ </span>
          {cmd}
        </p>
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}

function RepoLink({ href, label = "Source ↗" }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono text-xs tracking-widest text-accent-bright transition-colors hover:text-ink"
    >
      {label.toUpperCase()}
    </a>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <Reveal>
        <SectionHeading set="04" title="PRs — Personal Records" />
        <p className="-mt-6 mb-10 max-w-2xl text-sm text-muted">
          A PR is a personal record — and mine come in two flavors: the systems I&apos;m proudest of shipping (all open
          on{" "}
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-accent-bright hover:underline">
            GitHub
          </a>
          ), and the kilograms I put on a barbell.
        </p>
      </Reveal>

      {featured && (
        <Reveal>
          <article className="mb-6 rounded-lg border border-accent/40 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
            <div className="grid gap-7 lg:grid-cols-[1fr_300px] lg:items-start">
              <div>
                <p className="font-mono text-[10px] tracking-[0.3em] text-accent">FEATURED · HEAVIEST SINGLE</p>
                <h3 className="mt-3 font-display text-2xl font-bold">{featured.name}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{featured.blurb}</p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {featured.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <li key={t} className="rounded border border-edge bg-raised px-2.5 py-1 font-mono text-xs text-faint">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-6">
                  <RepoLink href={featured.repo} />
                  {featured.extraLink && (
                    <RepoLink href={featured.extraLink.href} label={`${featured.extraLink.label} ↗`} />
                  )}
                </div>
              </div>
              <div className="hidden lg:block">
                <Terminal cmd={featured.terminal.cmd} lines={featured.terminal.lines} />
              </div>
            </div>
          </article>
        </Reveal>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, i) => (
          <Reveal key={project.name} delay={(i % 3) * 0.06}>
            <article className="flex h-full flex-col rounded-lg border border-edge bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
              <div className="mb-4">
                <Terminal cmd={project.terminal.cmd} lines={project.terminal.lines} />
              </div>
              <h3 className="font-display text-base font-bold">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.blurb}</p>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2.5 text-xs leading-relaxed text-faint">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                    {h}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li key={t} className="rounded border border-edge bg-raised px-2 py-0.5 font-mono text-[10px] text-faint">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4">
                <RepoLink href={project.repo} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Lifting />
    </section>
  );
}
