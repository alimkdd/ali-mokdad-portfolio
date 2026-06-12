import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20">
      <Reveal>
        <SectionHeading set="05" title="Education" />
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 0.08}>
            <div className="h-full rounded-lg border border-edge bg-surface p-6">
              <p className="font-mono text-xs tracking-widest text-faint">{item.period}</p>
              <h3 className="mt-2 font-display text-base font-bold">{item.degree}</h3>
              <p className="mt-1 text-sm text-accent-bright">{item.school}</p>
              <p className="mt-2 text-sm text-muted">{item.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
