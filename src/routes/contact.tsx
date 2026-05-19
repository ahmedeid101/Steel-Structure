import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${site.name}` },
      {
        name: "description",
        content: `Get in touch with ${site.name} for steel structure design and construction supervision.`,
      },
      { property: "og:title", content: `Contact — ${site.name}` },
      {
        property: "og:description",
        content: `Reach out about your next steel structure or construction project.`,
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
    );
    setTimeout(() => {
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      toast.success("Opening your email client…");
      setSending(false);
      form.reset();
    }, 300);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something solid."
        description="Available for full-time roles, contract design work, and site supervision assignments."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="font-display text-2xl font-semibold">Get in touch</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            The fastest way to reach me is email. I respond within 24 hours.
          </p>
          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 flex-none place-items-center rounded-md bg-secondary">
                <Mail className="h-4 w-4 text-accent" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <a href={`mailto:${site.email}`} className="font-medium hover:text-accent">
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 flex-none place-items-center rounded-md bg-secondary">
                <Phone className="h-4 w-4 text-accent" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                <p className="font-medium">{site.phone}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 flex-none place-items-center rounded-md bg-secondary">
                <Linkedin className="h-4 w-4 text-accent" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</p>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-accent"
                >
                  View profile
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 flex-none place-items-center rounded-md bg-secondary">
                <MapPin className="h-4 w-4 text-accent" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Based in</p>
                <p className="font-medium">{site.location}</p>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="md:col-span-3 space-y-5 rounded-xl border border-border bg-card p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@company.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="Project, role, or question" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project or opportunity…"
            />
          </div>
          <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
            {sending ? "Sending…" : "Send message"}
          </Button>
        </form>
      </section>
    </>
  );
}
