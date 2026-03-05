import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

const GiftsSection = () => (
  <section className="bg-white">
    <motion.div className="text-center px-4 py-20"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <h3 className="font-display text-3xl md:text-4xl mb-2"
        style={{ color: "#7a6a55", fontStyle: "italic", fontWeight: 400 }}>
        Regalos
      </h3>
      <p className="font-body text-sm mb-6" style={{ color: "#aaa" }}>
        Si deseas regalarnos algo más que tu hermosa presencia...
      </p>
      <div className="flex justify-center mb-6">
        <lord-icon src="https://cdn.lordicon.com/kezeezyg.json" trigger="loop" stroke="bold"
          colors="primary:#b8821a,secondary:#c4a96a" style={{ width: "56px", height: "56px" }} />
      </div>
      <a href="https://cuentapro11.github.io/dos-botones-regalo/" target="_blank" rel="noopener noreferrer"
        className="inline-block font-body text-sm text-white rounded-full transition-opacity hover:opacity-90"
        style={{ background: "#b8821a", padding: "12px 40px" }}>
        Ver más
      </a>
    </motion.div>
    <SectionDivider />
  </section>
);

export default GiftsSection;
