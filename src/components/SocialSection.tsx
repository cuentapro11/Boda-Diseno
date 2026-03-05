import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

const PhotosIcon = () => (
  <svg className="w-12 h-12 animate-spin [animation-duration:8s]" viewBox="0 0 100 100">
    <path d="M50 50 C38 50 30 41 30 29 C30 17 38 8 50 8Z" fill="#e8c97a"/>
    <path d="M50 50 C50 38 59 30 71 30 C83 30 92 38 92 50Z" fill="#c49a4a"/>
    <path d="M50 50 C62 50 70 59 70 71 C70 83 62 92 50 92Z" fill="#b8832a"/>
    <path d="M50 50 C50 62 41 70 29 70 C17 70 8 62 8 50Z" fill="#f2d898"/>
    <circle cx="50" cy="50" r="11" fill="#fdf6e8"/>
  </svg>
);

const SocialSection = () => (
  <section className="bg-white">
    <motion.div className="text-center px-4 py-20"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <h3 className="font-display text-3xl md:text-4xl mb-2"
        style={{ color: "#b8821a", fontStyle: "italic", fontWeight: 400 }}>
        Compartimos este día junto a ti
      </h3>
      <p className="font-body text-sm mb-6" style={{ color: "#aaa" }}>
        Comparte tus fotos y videos de este hermoso día
      </p>
      <div className="flex justify-center mb-6"><PhotosIcon /></div>
      <div className="inline-block rounded-lg px-8 py-3 mb-6" style={{ background: "#f5f0e8" }}>
        <span className="font-heading text-2xl text-gray-700">#rafaelyjuana</span>
      </div>
      <div>
        <a href="https://photos.app.goo.gl/oUanUmwPDCBF5yjw7" target="_blank" rel="noopener noreferrer"
          className="inline-block font-body text-sm text-white rounded-full transition-opacity hover:opacity-90"
          style={{ background: "#b8821a", padding: "12px 40px" }}>
          Sube tu foto
        </a>
      </div>
    </motion.div>
    <SectionDivider />
  </section>
);

export default SocialSection;
