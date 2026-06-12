import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <Reveal>
        <SectionHeading set="01" title="About" />
      </Reveal>
      <div className="max-w-3xl space-y-5">
        {about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="leading-relaxed text-muted">{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
