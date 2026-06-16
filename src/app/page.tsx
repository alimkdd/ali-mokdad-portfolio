import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import BarLoader from "@/components/BarLoader";
import BackToTop from "@/components/BackToTop";
import { site } from "@/data/content";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  telephone: site.phoneHref,
  url: site.url,
  image: `${site.url}/profile.jpg`,
  address: { "@type": "PostalAddress", addressLocality: "Beirut", addressCountry: "LB" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Lebanese University" },
  worksFor: { "@type": "Organization", name: "Cube Holdings Limited" },
  sameAs: [site.github, site.linkedin],
  knowsAbout: [".NET", "C#", "Payment systems", "Microservices", "SQL Server", "Redis", "RabbitMQ", "Docker"],
};

export default function Home() {
  return (
    <div className="grid-texture min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Nav />
      <BarLoader />
      <BackToTop />
      <main id="main" className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-edge py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-5 font-mono text-xs text-faint sm:flex-row sm:justify-between sm:px-8">
          <p>© Ali Mokdad · Software Engineer</p>
          <p>Built with Next.js & Tailwind · Beirut, Lebanon</p>
        </div>
      </footer>
    </div>
  );
}
