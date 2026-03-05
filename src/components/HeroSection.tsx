import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import coupleHero from "@/assets/couple-hero.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden" style={{ height: "100vh" }}>
      {/* Parallax photo */}
      <motion.img
        src={coupleHero}
        alt="Rafael y Juana"
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={{ y: imageY, scale: 1 }}
      />

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Centered text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="w-12 h-px bg-white/70" />
          <p className="font-body text-sm text-white tracking-widest font-light">15.05.2021</p>
          <div className="w-12 h-px bg-white/70" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-6xl md:text-9xl text-white drop-shadow-lg tracking-wide mb-5"
          style={{ fontStyle: "italic" }}
        >
          Rafael <span style={{ color: "#c49a4a" }}>&amp;</span> Juana
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="max-w-lg"
        >
          <div className="text-white/50 text-4xl leading-none font-serif mb-1">"</div>
          <p className="font-heading text-base md:text-lg text-white/90 italic leading-relaxed">
            Todos somos mortales,<br />
            hasta el primer beso y la segunda copa de vino
          </p>
          <div className="text-white/50 text-4xl leading-none font-serif mt-1">"</div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
