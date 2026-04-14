import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-fabric.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Sanchita Derekar — Fashion Designer" },
      { name: "description", content: "Where Vision Meets Fabric. Emerging fashion designer blending art, culture, and contemporary style." },
      { property: "og:title", content: "Sanchita Derekar — Fashion Designer" },
      { property: "og:description", content: "Where Vision Meets Fabric." },
    ],
  }),
});

function HomePage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury fabric texture"
            width={1920}
            height={1080}
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6"
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-gold">
              Fashion Designer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight text-ivory"
          >
            Sanchita
            <br />
            <span className="italic font-normal">Derekar</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto my-8 h-px w-32 bg-gold origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="font-serif text-xl md:text-2xl text-ivory/70 italic tracking-wide"
          >
            Where Vision Meets Fabric
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-12"
          >
            <Link
              to="/portfolio"
              className="inline-block font-body text-xs tracking-[0.3em] uppercase text-gold border border-gold/40 px-8 py-4 hover:bg-gold/10 transition-all duration-500"
            >
              View Collection
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
        </motion.div>
      </section>
    </main>
  );
}
