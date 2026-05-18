import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { projects, site } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Projects — ${site.name}` },
      { name: "description", content: `Selected steel structure and construction projects by ${site.name}.` },
      { property: "og:title", content: `Projects — ${site.name}` },
      { property: "og:description", content: `Featured engineering projects by ${site.name}.` },
      { property: "og:image", content: projects[0].image },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="A portfolio of buildings, bridges, and industrial frames."
        description="A curated selection of work spanning design and on-site supervision."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-elevated">
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="font-mono text-[10px] uppercase tracking-wider">{t}</Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
