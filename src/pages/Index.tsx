import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import CoverScreen from "@/components/CoverScreen";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import EventsSection from "@/components/EventsSection";
import PhotoCarousel from "@/components/PhotoCarousel";
import GiftsSection from "@/components/GiftsSection";
import GuestsSection from "@/components/GuestsSection";
import SocialSection from "@/components/SocialSection";
import FooterSection from "@/components/FooterSection";
import { Music, VolumeX } from "lucide-react";

const Index = () => {
  const [entered, setEntered] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = (withMusic: boolean) => {
    setEntered(true);
    setMusicOn(withMusic);
  };

  useEffect(() => {
    if (!audioRef.current) return;
    if (musicOn) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  useEffect(() => {
    if (!entered) return;
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;
      if (document.hidden) {
        audioRef.current.pause();
      } else if (musicOn) {
        audioRef.current.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [entered, musicOn]);

  return (
    <div className="min-h-screen bg-white">
      <audio ref={audioRef} src="/audio/background-music.mp3" loop preload="auto" />

      {/* Page content always rendered — visible behind CoverScreen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <CountdownSection />
        <GuestsSection />
        <EventsSection />
        <PhotoCarousel />
        <GiftsSection />
        <SocialSection />
        <FooterSection />
      </motion.div>

      {/* Music button — only after entering */}
      {entered && (
        <button
          onClick={() => setMusicOn(!musicOn)}
          className="fixed top-4 right-4 z-40 w-11 h-11 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
          style={{ background: "rgba(196,169,106,0.15)", border: "1.5px solid #c4a96a" }}
          aria-label="Toggle music"
        >
          {musicOn
            ? <Music className="w-4 h-4" style={{ color: "#b8821a" }} />
            : <VolumeX className="w-4 h-4" style={{ color: "#b8821a" }} />
          }
        </button>
      )}

      {/* Cover overlay */}
      {!entered && <CoverScreen onEnter={handleEnter} />}
    </div>
  );
};

export default Index;
