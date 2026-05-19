import { Link } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-bold tracking-tight">{site.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">{site.title}</p>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">{site.tagline}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Navigate</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/experience" className="hover:text-foreground">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-foreground">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${site.email}`} className="hover:text-foreground">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {site.phone}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {site.location}
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Built with precision.</p>
        </div>
      </div>
    </footer>
  );
}
