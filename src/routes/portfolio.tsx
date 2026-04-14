import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "The Collection — Sanchita Derekar" },
      { name: "description", content: "Explore the collection by Sanchita Derekar. Where tradition meets contemporary fashion." },
      { property: "og:title", content: "The Collection — Sanchita Derekar" },
    ],
  }),
});

const galleryItems = [
  { id: 1, src: collection1, title: "Noir Drape", category: "Evening Wear", tall: true },
  { id: 2, src: collection2, title: "Golden Thread", category: "Textile Art", tall: false },
  { id: 3, src: collection3, title: "Silhouette", category: "Runway", tall: false },
  { id: 4, src: null, title: "Coming Soon", category: "New Collection", tall: true },
  { id: 5, src: null, title: "Coming Soon", category: "Bridal", tall: false },
  { id: 6, src: null, title: "Coming Soon", category: "Resort Wear", tall: false },
];

function PortfolioPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-gold">
            Portfolio
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-medium text-ivory mt-4">
            The <span className="italic font-normal">Collection</span>
          </h1>
          <div className="mx-auto mt-6 h-px w-20 bg-gold" />
        </AnimatedSection>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {galleryItems.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.1}>
              {item.src ? (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden group cursor-pointer break-inside-avoid"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`w-full object-cover ${item.tall ? "aspect-[3/4]" : "aspect-square"}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <p className="font-display text-xl text-ivory">{item.title}</p>
                      <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mt-1">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className={`relative overflow-hidden break-inside-avoid ${item.tall ? "aspect-[3/4]" : "aspect-square"} animate-shimmer flex items-center justify-center`}>
                  <div className="text-center">
                    <p className="font-display text-2xl text-ivory/30">{item.title}</p>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-gold/40 mt-2">
                      {item.category}
                    </p>
                    <p className="font-serif text-sm italic text-ivory/20 mt-3">
                      Watch This Space
                    </p>
                  </div>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  );
}
