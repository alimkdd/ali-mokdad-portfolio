import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Carousel from "./Carousel";
import { skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20">
      <Reveal>
        <SectionHeading set="02" title="Skills" />
      </Reveal>
      <Carousel
        ariaLabel="Skill groups"
        gridClassName="sm:grid-cols-2 lg:grid-cols-3"
        items={skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06} className="w-full">
            <div className="h-full rounded-lg border border-edge bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
              <h3 className="font-display text-sm font-bold tracking-wide text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded border border-edge bg-raised px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      />
    </section>
  );
}
