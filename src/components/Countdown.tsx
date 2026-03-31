import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PartyPopper } from "lucide-react";

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
  minutes: "Minutos",
  seconds: "Segundos",
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-16 md:py-24 px-6 bg-secondary">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <PartyPopper className="w-14 h-14 text-purple-brand mx-auto animate-float-gentle" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-lg md:text-xl text-foreground/70 mb-1"
        >
          Viernes <strong className="text-foreground">15 de Mayo</strong> de 2026
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-2xl text-purple-brand mb-8"
        >
          Faltan
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 md:gap-5"
        >
          {(Object.keys(timeLeft) as (keyof TimeLeft)[]).map((key, i) => (
            <div key={key} className="flex items-center gap-3 md:gap-5">
              <div className="flex flex-col items-center">
                <span className="font-body text-3xl md:text-5xl font-bold text-foreground">
                  {String(timeLeft[key]).padStart(2, "0")}
                </span>
                <span className="mt-1 text-xs text-muted-foreground font-body uppercase tracking-wider">
                  {labels[key]}
                </span>
              </div>
              {i < 3 && (
                <span className="text-2xl md:text-4xl text-purple-brand font-light -mt-4">:</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
