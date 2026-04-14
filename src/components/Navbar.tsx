import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Collection", to: "/portfolio" as const },
  { label: "Services", to: "/services" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between backdrop-blur-md bg-background/60 border-b border-border/30">
        <Link to="/" className="font-display text-xl tracking-[0.2em] text-ivory uppercase">
          Sanchita
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative font-body text-sm tracking-[0.15em] uppercase transition-colors duration-300 group"
              activeProps={{ className: "text-gold" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-ivory" }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 w-0 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-ivory"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/30"
        >
          <div className="flex flex-col items-center py-8 gap-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="font-body text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
