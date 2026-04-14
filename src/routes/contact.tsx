import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useState } from "react";
import { Instagram, Mail, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Sanchita Derekar" },
      { name: "description", content: "Let's create something beautiful together. Get in touch with Sanchita Derekar." },
      { property: "og:title", content: "Contact — Sanchita Derekar" },
    ],
  }),
});

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:hello@sanchitaderekar.com?subject=Inquiry from ${formData.name}&body=${formData.message}`;
  };

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-gold">
            Get In Touch
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-ivory mt-4 leading-tight">
            Let's Create Something
            <br />
            <span className="italic font-normal text-gold-light">Beautiful Together</span>
          </h1>
          <div className="mx-auto mt-6 h-px w-20 bg-gold" />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border/50 focus:border-gold py-3 font-body text-sm text-ivory outline-none transition-colors duration-300 placeholder:text-muted-foreground/40"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border/50 focus:border-gold py-3 font-body text-sm text-ivory outline-none transition-colors duration-300 placeholder:text-muted-foreground/40"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-transparent border-b border-border/50 focus:border-gold py-3 font-body text-sm text-ivory outline-none transition-colors resize-none duration-300 placeholder:text-muted-foreground/40"
                placeholder="Tell me about your vision..."
                required
              />
            </div>

            <button
              type="submit"
              className="group flex items-center gap-3 font-body text-xs tracking-[0.3em] uppercase text-gold border border-gold/40 px-8 py-4 hover:bg-gold/10 transition-all duration-500 mt-4"
            >
              Send Message
              <Send size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="mt-20">
          <div className="flex flex-col items-center gap-6">
            <div className="h-px w-12 bg-border/30" />
            <div className="flex items-center gap-8">
              <a
                href="mailto:hello@sanchitaderekar.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                <Mail size={16} strokeWidth={1} />
                <span className="font-body text-xs tracking-[0.1em]">Email</span>
              </a>
              <a
                href="https://instagram.com/sanchitaderekar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                <Instagram size={16} strokeWidth={1} />
                <span className="font-body text-xs tracking-[0.1em]">Instagram</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
