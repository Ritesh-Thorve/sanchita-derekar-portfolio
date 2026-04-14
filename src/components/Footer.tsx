import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-lg tracking-[0.2em] text-ivory uppercase">
          Sanchita Derekar
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: "About", to: "/about" },
            { label: "Collection", to: "/portfolio" },
            { label: "Contact", to: "/contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
