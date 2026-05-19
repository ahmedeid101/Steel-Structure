interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/30">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent animate-fade-up">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-balance md:text-6xl animate-fade-up animate-delay-1">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up animate-delay-2">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
