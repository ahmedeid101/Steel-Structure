import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, projects, strengths } from "@/lib/site-data";
import heroImg from "@/assets/hero-steel.jpg";
import portraitImg from "@/assets/eslam-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.title}` },
      { name: "description", content: site.summary },
      { property: "og:title", content: `${site.name} — ${site.title}` },
      { property: "og:description", content: site.summary },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = projects.slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent animate-fade-up">
              {site.location} · Available for projects
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance md:text-7xl animate-fade-up animate-delay-1">
              {site.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-accent">{site.title.split(" ").slice(-1)}</span>
            </h1>
            <p className="mt-4 font-display text-2xl text-muted-foreground animate-fade-up animate-delay-2">
              I'm {site.name}.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground animate-fade-up animate-delay-2">
              {site.tagline} {site.yearsExperience}+ years across design offices and active construction sites.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up animate-delay-3">
              <Button asChild size="lg">
                <Link to="/projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Get in touch</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href={site.cvUrl} download>
                  <Download className="mr-2 h-4 w-4" />Download CV
                </a>
              </Button>
            </div>
          </div>
          <div className="relative md:col-span-5">
            <div className="relative overflow-hidden rounded-xl border border-border shadow-elevated">
              <img
                src={heroImg}
                alt="Steel structure framework at dusk"
                width={1920}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-dark/95 via-steel-dark/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 p-6 text-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-accent/40 blur-md" aria-hidden />
                  <img
                    src={portraitImg}
                    alt={site.name}
                    width={320}
                    height={320}
                    className="relative h-36 w-36 rounded-full border-4 border-background object-cover shadow-elevated md:h-44 md:w-44"
                  />
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-primary-foreground">{site.name}</p>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary-foreground/70">{site.title}</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-background p-5 shadow-elevated md:block">
              <p className="font-display text-3xl font-bold">{site.yearsExperience}+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Years experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-x-12 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s) => (
              <div key={s} className="flex gap-3 text-sm">
                <span className="mt-2 h-px w-6 flex-none bg-accent" />
                <span className="text-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Selected work</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Featured projects</h2>
          </div>
          <Link to="/projects" className="hidden items-center gap-2 text-sm font-medium text-foreground hover:text-accent md:inline-flex">
            All projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <article key={p.title} className="group">
              <div className="relative overflow-hidden rounded-lg border border-border">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
