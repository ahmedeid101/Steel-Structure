import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { experience, site } from "@/lib/site-data";
import { Briefcase } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: `Experience — ${site.name}` },
      { name: "description", content: `Professional experience and roles held by ${site.name}, ${site.title}.` },
      { property: "og:title", content: `Experience — ${site.name}` },
      { property: "og:description", content: `Professional experience of ${site.name}.` },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="From the design desk to the steel frame."
        description="Roles across structural design offices and active construction sites."
      />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <ol className="relative space-y-12 border-l border-border pl-8">
          {experience.map((exp, i) => (
            <li key={exp.role + i} className="relative">
              <span className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background">
                <Briefcase className="h-4 w-4 text-accent" />
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-xl font-semibold">{exp.role}</h2>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{exp.period}</p>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">{exp.company} · <span className="text-muted-foreground">{exp.location}</span></p>
              <ul className="mt-4 space-y-2">
                {exp.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
