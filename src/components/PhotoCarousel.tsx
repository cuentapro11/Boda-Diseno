import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";
import coupleHero from "@/assets/couple-hero.jpg";
import prueba from "@/assets/prueba.jpg";

const images = [
  { src: couple1, alt: "Pareja en la ciudad" },
  { src: couple2, alt: "Pareja abrazándose" },
  { src: couple3, alt: "Pareja romántica" },
  { src: coupleHero, alt: "Boda" },
  { src: prueba, alt: "Prueba" },
];

const variants = {
  enter: (direction: number) => ({ rotateY: direction > 0 ? 90 : -90, opacity: 0 }),
  center: { rotateY: 0, opacity: 1 },
  exit: (direction: number) => ({ rotateY: direction > 0 ? -90 : 90, opacity: 0 }),
};

const PhotoCarousel = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const total = images.length;

  const next = useCallback(() => setCurrent(([prev]) => [(prev + 1) % total, 1]), [total]);
  const prev = () => setCurrent(([prev]) => [(prev - 1 + total) % total, -1]);
  const goTo = (i: number) => setCurrent(([prev]) => [i, i > prev ? 1 : -1]);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  const left   = images[(current - 1 + total) % total];
  const center = images[current];
  const right  = images[(current + 1) % total];

  return (
    <section className="bg-white">
      <motion.div
        className="text-center px-4 pt-12 pb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-display text-3xl md:text-4xl mb-2"
          style={{ color: "#b8821a", fontStyle: "italic", fontWeight: 400 }}>
          Retratos de Nuestro Amor
        </h3>
        <p className="font-body text-sm mb-4" style={{ color: "#aaa" }}>
          Un minuto, un segundo, un instante que queda en la eternidad
        </p>
        <div className="flex justify-center">
          <lord-icon src="https://cdn.lordicon.com/wsaaegar.json" trigger="loop" stroke="bold"
            colors="primary:#b8821a,secondary:#c4a96a" style={{ width: "52px", height: "52px" }} />
        </div>
      </motion.div>

      {/* Desktop */}
      <div className="hidden md:block relative w-full" style={{ perspective: "1200px" }}>
        <div className="flex w-full">
          <div className="flex-1" style={{ background: "#fff", padding: "10px 10px 40px 10px", boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}>
            <div style={{ width: "100%", paddingTop: "70%", position: "relative", overflow: "hidden" }}>
              <img src={left.src} alt={left.alt} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div className="flex-1" style={{ background: "#fff", padding: "10px 10px 40px 10px", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", margin: "0 2px", perspective: "1200px" }}>
            <div style={{ width: "100%", paddingTop: "70%", position: "relative", overflow: "hidden" }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img key={current} src={center.src} alt={center.alt}
                  custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              </AnimatePresence>
            </div>
          </div>
          <div className="flex-1" style={{ background: "#fff", padding: "10px 10px 40px 10px", boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}>
            <div style={{ width: "100%", paddingTop: "70%", position: "relative", overflow: "hidden" }}>
              <img src={right.src} alt={right.alt} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 z-10 hover:opacity-70 transition-opacity" style={{ color: "#b8821a" }}>
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 z-10 hover:opacity-70 transition-opacity" style={{ color: "#b8821a" }}>
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile */}
      <div className="block md:hidden relative w-full px-4" style={{ perspective: "1200px" }}>
        <div style={{ background: "#fff", padding: "8px 8px 36px 8px", boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}>
          <div style={{ width: "100%", paddingTop: "75%", position: "relative", overflow: "hidden" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img key={current} src={center.src} alt={center.alt}
                custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </AnimatePresence>
          </div>
        </div>
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 z-10" style={{ color: "#b8821a" }}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 z-10" style={{ color: "#b8821a" }}>
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center gap-2 py-6">
        {images.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className="w-2.5 h-2.5 rounded-full transition-colors"
            style={{ background: i === current ? "#b8821a" : "rgba(196,169,106,0.35)" }} />
        ))}
      </div>
    </section>
  );
};

export default PhotoCarousel;
