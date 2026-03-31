import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-05-15T21:00:00-03:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calcTimeLeft = (): TimeLeft => {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const labels: Record<string, string> = {
  days: "Días",
  hours: "Horas",
  minutes: "Min",
  seconds: "Seg",
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 px-6 bg-card">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
          Show Time
        </h2>
        <p className="text-muted-foreground font-body text-sm mb-10 tracking-widest uppercase">
          15 de Mayo, 2026 · 21:00 hs
        </p>

        <div className="grid grid-cols-4 gap-4">
          {(Object.keys(timeLeft) as (keyof TimeLeft)[]).map((key) => (
            <div key={key} className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-lg bg-muted border border-border flex items-center justify-center glow-mystic">
                <span className="font-heading text-3xl md:text-4xl font-bold text-gold">
                  {String(timeLeft[key]).padStart(2, "0")}
                </span>
              </div>
              <span className="mt-2 text-xs text-muted-foreground tracking-wider uppercase font-body">
                {labels[key]}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 font-heading text-lg text-foreground italic">
          ¡No te lo podés perder!
        </p>
      </motion.div>
    </section>
  );
};

export default Countdown;
