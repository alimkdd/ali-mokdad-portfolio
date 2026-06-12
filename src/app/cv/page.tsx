import type { Metadata } from "next";
import { site, summary, experience, education, skillGroups, projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Ali Mokdad — CV",
  robots: { index: false },
};

const featuredProjects = projects.slice(0, 3);

export default function CvPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 print:bg-white">
      <div className="mx-auto max-w-[800px] px-10 py-12 print:px-0 print:py-0">
        {/* print hint — hidden on paper */}
        <div className="mb-8 flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-4 py-3 print:hidden">
          <p className="text-sm text-neutral-500">
            Print-ready CV — use your browser&apos;s Print → Save as PDF (margins: default, headers off).
          </p>
          <a href="/" className="text-sm font-bold text-red-600 hover:underline">
            ← back to site
          </a>
        </div>

        {/* header */}
        <header className="border-b-2 border-red-600 pb-5">
          <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900">
            {site.name}
            <span className="text-red-600">.</span>
          </h1>
          <p className="mt-1 font-mono text-sm tracking-[0.2em] text-red-600">{site.role.toUpperCase()}</p>
          <p className="mt-3 text-xs leading-relaxed text-neutral-500">
            {site.location} · {site.phone} · {site.email}
            <br />
            github.com/alimkdd · linkedin.com/in/ali-mokdad-5511a5168 · alimokdadportfolio.vercel.app
          </p>
        </header>

        {/* summary */}
        <section className="mt-6">
          <h2 className="font-mono text-xs font-bold tracking-[0.25em] text-red-600">PROFILE</h2>
          <p className="mt-2 text-sm leading-relaxed">{summary}</p>
        </section>

        {/* experience */}
        <section className="mt-6">
          <h2 className="font-mono text-xs font-bold tracking-[0.25em] text-red-600">EXPERIENCE</h2>
          {experience.map((job) => (
            <div key={job.company} className="mt-4 break-inside-avoid">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-sm font-bold text-neutral-900">
                  {job.title} — {job.company}
                </h3>
                <p className="shrink-0 font-mono text-[11px] text-neutral-400">{job.period}</p>
              </div>
              <ul className="mt-1.5 space-y-1">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-[13px] leading-snug text-neutral-700">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-red-600" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="mt-1.5 font-mono text-[11px] text-neutral-400">{job.tech.join(" · ")}</p>
            </div>
          ))}
        </section>

        {/* projects */}
        <section className="mt-6 break-inside-avoid">
          <h2 className="font-mono text-xs font-bold tracking-[0.25em] text-red-600">SELECTED PROJECTS</h2>
          {featuredProjects.map((project) => (
            <div key={project.name} className="mt-3">
              <h3 className="text-sm font-bold text-neutral-900">{project.name}</h3>
              <p className="mt-0.5 text-[13px] leading-snug text-neutral-700">
                {project.blurb} <span className="font-mono text-[11px] text-neutral-400">({project.repo.replace("https://", "")})</span>
              </p>
            </div>
          ))}
          <p className="mt-2 text-[12px] text-neutral-500">More open-source work at github.com/alimkdd.</p>
        </section>

        {/* skills */}
        <section className="mt-6 break-inside-avoid">
          <h2 className="font-mono text-xs font-bold tracking-[0.25em] text-red-600">SKILLS</h2>
          <div className="mt-2 space-y-1">
            {skillGroups.map((group) => (
              <p key={group.title} className="text-[13px] leading-snug">
                <span className="font-bold text-neutral-900">{group.title}: </span>
                <span className="text-neutral-700">{group.skills.join(", ")}</span>
              </p>
            ))}
          </div>
        </section>

        {/* education */}
        <section className="mt-6 break-inside-avoid pb-10 print:pb-0">
          <h2 className="font-mono text-xs font-bold tracking-[0.25em] text-red-600">EDUCATION</h2>
          {education.map((item) => (
            <div key={item.degree} className="mt-2 flex items-baseline justify-between gap-4">
              <p className="text-[13px]">
                <span className="font-bold text-neutral-900">{item.degree}</span>
                <span className="text-neutral-700"> — {item.school}</span>
              </p>
              <p className="shrink-0 font-mono text-[11px] text-neutral-400">{item.period}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
