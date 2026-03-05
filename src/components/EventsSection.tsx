import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

const CONFIRM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfihMMzM0r0wmtJ-7TTirHk179zc3e_VRC--UXJwN-v_59SOw/viewform?usp=publish-editor";

interface EventCardProps {
  icon: React.ReactNode;
  title: string;
  day: string;
  time: string;
  place: string;
  address: string;
}

const PillButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
    className="inline-block font-body text-sm text-white rounded-full transition-opacity hover:opacity-90"
    style={{ background: "#b8821a", padding: "10px 32px", minWidth: "200px", textAlign: "center", display: "block" }}>
    {children}
  </a>
);

const EventCard = ({ icon, title, day, time, place, address }: EventCardProps) => (
  <motion.div className="w-full text-center flex flex-col items-center" style={{ maxWidth: "340px" }}
    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.6 }}>
    <div className="flex justify-center mb-3">{icon}</div>
    <div className="h-px mb-4" style={{ background: "#c4a96a", width: "160px" }} />
    <h3 className="font-display text-3xl mb-1" style={{ color: "#b8821a", fontStyle: "italic", fontWeight: 400 }}>{title}</h3>
    <div className="h-px mt-3 mb-6" style={{ background: "#c4a96a", width: "160px" }} />
    <h4 className="font-body text-sm font-bold text-gray-700 mb-1">Día</h4>
    <p className="font-body text-sm text-gray-400 mb-5">{day} – {time}</p>
    <h4 className="font-body text-sm font-bold text-gray-700 mb-1">Lugar</h4>
    <p className="font-body text-sm text-gray-400 mb-5">{place}</p>
    <div className="flex justify-center mb-5">
      <PillButton href={CONFIRM_URL}>Confirmar asistencia</PillButton>
    </div>
    <h4 className="font-body text-sm font-bold text-gray-700 mb-1">Dirección</h4>
    <p className="font-body text-sm text-gray-400 mb-5">{address}</p>
    <div className="flex justify-center">
      <PillButton href="https://maps.google.com">¿Cómo llegar?</PillButton>
    </div>
  </motion.div>
);

const CeremonyIcon = () => (
  <lord-icon src="https://cdn.lordicon.com/fshosubk.json" trigger="loop" stroke="bold"
    colors="primary:#b8821a,secondary:#c4a96a" style={{ width: "64px", height: "64px" }} />
);
const CelebrationIcon = () => (
  <lord-icon src="https://cdn.lordicon.com/yvgmrqny.json" trigger="loop" stroke="bold"
    colors="primary:#b8821a,secondary:#c4a96a" style={{ width: "64px", height: "64px" }} />
);

const EventsSection = () => (
  <section className="bg-white">
    <div className="mx-auto flex flex-col items-center gap-20 px-6 py-12 md:flex-row md:items-start md:justify-center" style={{ maxWidth: "780px" }}>
      <EventCard icon={<CeremonyIcon />} title="Ceremonia"
        day="Sábado 15 de Mayo" time="17hs"
        place="Parroquia Nuestra Señora de Lujan"
        address="Av. Pergamino 203 - Santo Domingo" />
      <div className="hidden md:block flex-shrink-0 self-stretch"
        style={{ width: "1px", background: "linear-gradient(to bottom, transparent, #c4a96a 20%, #c4a96a 80%, transparent)" }} />
      <EventCard icon={<CelebrationIcon />} title="Celebración"
        day="Sábado 15 de Mayo" time="20hs"
        place="Salon de fiestas Avril"
        address="Av. Los Reartes 12 - Santo Domingo" />
    </div>
    <SectionDivider />
  </section>
);

export default EventsSection;
