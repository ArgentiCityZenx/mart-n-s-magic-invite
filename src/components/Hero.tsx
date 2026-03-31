import { motion } from "framer-motion";
import { Mail, BellRing } from "lucide-react";
import heroImg from "@/assets/hero-magic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with purple-tinted overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Show de Magia"
          className="w-full h-full object-cover"
          width={1080}
          height={1920}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsla(280, 65%, 15%, 0.8) 0%, hsla(270, 15%, 6%, 0.85) 100%)",
          }}
        />
      </div>

      {/* Floating squares decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 rounded-md border border-purple-light/15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 45, 0],
              opacity: [0.08, 0.2, 0.08],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-md mx-auto">
        {/* Animated envelope icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-lg border-2 border-purple-vivid/50 animate-float-gentle">
            <div className="relative">
              <Mail className="w-10 h-10 text-purple-vivid" />
              <BellRing className="w-4 h-4 text-purple-soft absolute -top-2 -right-2" />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl font-bold text-purple-vivid mb-3 drop-shadow-lg"
        >
          Martín Almada
        </motion.h1>

        {/* Subtitle — Mago Ilusionista */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-body text-xs tracking-[0.25em] uppercase text-purple-soft mb-5"
        >
          Mago Ilusionista
        </motion.p>

        {/* Invitation line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-lg md:text-xl text-foreground/90"
        >
          ¡Te invita a una{" "}
          <strong className="text-purple-light font-semibold">
            noche de magia
          </strong>
          !
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
