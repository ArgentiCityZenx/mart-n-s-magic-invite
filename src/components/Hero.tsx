import { motion } from "framer-motion";
import heroImg from "@/assets/hero-magic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Martín Almada - Mago & Showman"
          className="w-full h-full object-cover"
          width={1080}
          height={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Sparkle overlay */}
      <div className="absolute inset-0 sparkle-bg pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          Estás invitado/a
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-gradient-gold">Martín Almada</span>
          <br />
          <span className="text-foreground text-3xl md:text-4xl font-light italic">presenta</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-y-2"
        >
          <p className="font-heading text-2xl md:text-3xl text-foreground italic">
            "Una Noche de Asombro"
          </p>
          <p className="text-muted-foreground font-body text-base">
            Magia, ilusionismo y momentos inolvidables
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent mx-auto animate-float" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
