import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import portraitImage from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Sanchita Derekar" },
      { name: "description", content: "Fashion designer blending art, culture, and contemporary style." },
      { property: "og:title", content: "About — Sanchita Derekar" },
      { property: "og:description", content: "A passionate fashion designer with a vision to blend art, culture, and contemporary style." },
    ],
  }),
});

function AboutPage() {
  return (
    <main className="pt-24 pb-20">
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative aspect-[2.5/4] overflow-hidden">
              <img
                src="src\assets\sanchita_best.png"
                alt="Sanchita Derekar portrait"
                width={800}
                height={1080}
                className="w-full h-full object-cover object-[50%_15%]  "
                loading="lazy"
              />
              <div className="absolute inset-0 border border-gold/20" />
              <motion.div
                initial={{ scaleY: 1 }}
                whileInView={{ scaleY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="absolute inset-0 bg-background origin-top"
              />
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <span className="font-body text-xs tracking-[0.4em] uppercase text-gold">
                The Designer
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-ivory leading-[1.1]">
                Crafting
                <br />
                <span className="italic font-normal text-gold-light">Identity</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="h-px w-16 bg-gold" />
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <p className="font-serif text-lg md:text-xl text-ivory/70 leading-relaxed italic">
                I'm Sanchita Derekar, a passionate fashion designer with a vision to blend art, culture, and contemporary style.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Fresh out of my design journey, I'm here to make my mark  one stitch at a time. Every piece I create tells a story woven from heritage, innovation, and an unapologetic love for beauty. My work explores the intersection where traditional craftsmanship meets modern silhouettes.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.9}>
              <div className="flex gap-12 pt-4">
                {[
                  { number: "∞", label: "Ideas" },
                  { number: "01", label: "Vision" },
                  { number: "24/7", label: "Passion" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl text-gold">{stat.number}</p>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
