import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

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
      aria-pressed={playing}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-purple-brand flex items-center justify-center transition-all hover:scale-110 glow-purple"
    >
      {playing ? (
        <Pause className="w-5 h-5 text-foreground" fill="currentColor" />
      ) : (
        <Play className="w-5 h-5 text-foreground" fill="currentColor" />
      )}
    </motion.button>
  );
};

export default MusicToggle;
