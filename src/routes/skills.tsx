import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { skillGroups, site } from "@/lib/site-data";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: `Skills — ${site.name}` },
      { name: "description", content: `Technical skills, software, and standards used by ${site.name}.` },
      { property: "og:title", content: `Skills — ${site.name}` },
      { property: "og:description", content: `Technical skills and standards.` },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <>
      <PageHero
        eyebrow="Skills"
        title="Tools, codes, and disciplines."
        description="The technical stack I work with daily, grouped by discipline."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-xl border border-border p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{group.label}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-secondary/60 px-3 py-1.5 text-sm font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
