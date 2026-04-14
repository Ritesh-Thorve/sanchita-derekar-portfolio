import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Palette, Scissors, Sparkles } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Sanchita Derekar" },
      { name: "description", content: "Concept Design, Textile Curation, and Style Consulting by Sanchita Derekar." },
      { property: "og:title", content: "Services — Sanchita Derekar" },
    ],
  }),
});

const services = [
  {
    icon: Palette,
    title: "Concept Design",
    description: "From initial sketches to detailed mood boards, I craft cohesive design concepts that capture your vision and translate it into wearable art.",
  },
  {
    icon: Scissors,
    title: "Textile Curation",
    description: "Sourcing and selecting the finest fabrics — from hand-woven silks to sustainable organic materials — to bring each design to its fullest potential.",
  },
  {
    icon: Sparkles,
    title: "Style Consulting",
    description: "Personalized styling guidance for individuals and brands looking to refine their aesthetic identity and make a lasting impression.",
  },
];

function ServicesPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-24">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-gold">
            What I Do
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-medium text-ivory mt-4">
            The <span className="italic font-normal">Vision</span>
          </h1>
          <div className="mx-auto mt-6 h-px w-20 bg-gold" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.15}>
              <div className="group p-8 md:p-10 border border-border/30 hover:border-gold/30 transition-all duration-500 bg-surface hover:bg-surface-elevated">
                <service.icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                <h3 className="font-display text-2xl text-ivory mb-4">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  );
}
