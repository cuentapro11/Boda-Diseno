import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CoverScreenProps {
  onEnter: (withMusic: boolean) => void;
}

const CoverScreen = ({ onEnter }: CoverScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = (withMusic: boolean) => {
    setIsExiting(true);
    setTimeout(() => onEnter(withMusic), 600);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(6px)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="text-center px-8 max-w-lg mx-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-3xl md:text-4xl mb-3 leading-snug"
              style={{ color: "#b8821a", fontWeight: 600 }}>
              Bienvenidos a la invitación de Rafael y Juana
            </h1>

            <p className="font-body text-sm mb-8" style={{ color: "#7a6a55" }}>
              La música de fondo es parte de la experiencia
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleEnter(true)}
                className="font-body text-sm text-white rounded-full transition-opacity hover:opacity-90"
                style={{ background: "#b8821a", padding: "14px 32px", minWidth: "200px" }}
              >
                Ingresar con música
              </button>
              <button
                onClick={() => handleEnter(false)}
                className="font-body text-sm text-white rounded-full transition-opacity hover:opacity-90"
                style={{ background: "#b8821a", padding: "14px 32px", minWidth: "200px" }}
              >
                Ingresar sin música
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoverScreen;
