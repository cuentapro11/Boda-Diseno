import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

const WEDDING_DATE = new Date("2026-12-31T12:00:00");

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = WEDDING_DATE.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: "DÍAS" },
    { value: timeLeft.hours, label: "HS" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEG" },
  ];

  return (
    <section className="bg-white">
      <motion.div
        className="text-center py-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-display text-3xl mb-5" style={{ color: "#b8944f", fontStyle: "italic", fontWeight: 400 }}>
          Falta
        </h3>
        <div className="inline-flex items-center">
          {units.map((unit, i) => (
            <div key={unit.label} className="flex items-center">
              <div className="text-center px-5 md:px-8">
                <span className="font-heading leading-none block" style={{ color: "#7a6a55", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  {String(unit.value).padStart(2, "0")}
                </span>
                <p className="font-body text-xs mt-1 tracking-widest" style={{ color: "#b8944f" }}>
                  {unit.label}
                </p>
              </div>
              {i < units.length - 1 && (
                <div className="flex-shrink-0" style={{ width: "1px", height: "36px", background: "#c4a96a" }} />
              )}
            </div>
          ))}
        </div>
      </motion.div>
      <SectionDivider />
    </section>
  );
};

export default CountdownSection;
