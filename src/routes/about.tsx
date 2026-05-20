import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { site, strengths, education, certifications } from "@/lib/site-data";
import portrait from "@/assets/about-portrait.jpg";
import { GraduationCap, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${site.name}` },
      {
        name: "description",
        content: `${site.summary} Learn more about ${site.name}, ${site.title}.`,
      },
      { property: "og:title", content: `About — ${site.name}` },
      { property: "og:description", content: site.summary },
      { property: "og:image", content: portrait },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Engineer by training. Builder by instinct."
        description={site.summary}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src={portrait}
                alt={`${site.name} on site`}
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border p-5">
                <p className="font-display text-3xl font-bold">{site.yearsExperience}+</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Years experience
                </p>
              </div>
              <div className="rounded-lg border border-border p-5">
                <p className="font-display text-3xl font-bold">10+</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Projects delivered
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <h2 className="font-display text-2xl font-semibold">
              A pragmatic structural engineer.
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                I design and supervise steel structures for industrial, infrastructure, and
                commercial projects. My work bridges the design office and the construction site — I
                draw what can be built, and I build what I've drawn.
              </p>
              <p>
                I've worked on PEB warehouses, heavy industrial halls, pedestrian bridges, and
                high-rise composite frames. I'm fluent in international codes (AISC 360, Eurocode 3)
                and the practical realities of fabrication tolerances, erection sequence, and
                on-site coordination.
              </p>
              <p>
                Every project is judged on three things:{" "}
                <span className="text-foreground">
                  is it safe, is it efficient, and can it actually be built on time
                </span>
                . Those constraints are the fun part.
              </p>
            </div>

            <h3 className="mt-12 font-display text-xl font-semibold">Key strengths</h3>
            <ul className="mt-4 space-y-2">
              {strengths.map((s) => (
                <li key={s} className="flex gap-3 text-sm">
                  <span className="mt-2 h-px w-5 flex-none bg-accent" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-accent" />
              <h2 className="font-display text-2xl font-semibold">Education</h2>
            </div>
            <ul className="mt-6 space-y-6">
              {education.map((e) => (
                <li key={e.title} className="border-l-2 border-accent pl-5">
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-sm text-muted-foreground">{e.org}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {e.period}
                  </p>
                  {e.note && <p className="mt-2 text-sm text-muted-foreground">{e.note}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-accent" />
              <h2 className="font-display text-2xl font-semibold">Certifications</h2>
            </div>
            <ul className="mt-6 space-y-4">
              {certifications.map((c) => (
                <li key={c.title} className="rounded-lg border border-border bg-background p-4">
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-muted-foreground">{c.org}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
