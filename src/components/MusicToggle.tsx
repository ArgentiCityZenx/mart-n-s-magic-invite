import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const MUSIC_URL =
  "https://cdn.pixabay.com/audio/2022/10/25/audio_052b6tried.mp3";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(MUSIC_URL);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      onClick={toggle}
      aria-label={playing ? "Pausar música" : "Reproducir música"}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center transition-all hover:glow-gold hover:border-gold/40"
    >
      {playing ? (
        <Volume2 className="w-5 h-5 text-gold" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
    </motion.button>
  );
};

export default MusicToggle;
