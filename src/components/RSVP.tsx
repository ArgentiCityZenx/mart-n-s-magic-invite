import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const RSVP = () => {
  const whatsappUrl =
    "https://wa.me/5491123456789?text=¡Hola%20Martín!%20Quiero%20confirmar%20mi%20asistencia%20al%20show%20🎩✨";

  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
          ¿Venís?
        </h2>
        <p className="text-muted-foreground font-body text-base mb-10 max-w-xs mx-auto">
          Confirmá tu lugar en esta noche exclusiva de magia e ilusionismo.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-body font-bold text-base tracking-wider uppercase shimmer animate-pulse-glow transition-transform hover:scale-105"
          style={{
            background: "linear-gradient(135deg, hsl(43, 54%, 42%), hsl(43, 70%, 60%), hsl(43, 54%, 42%))",
            color: "hsl(0, 0%, 4.3%)",
          }}
        >
          <MessageCircle className="w-5 h-5" />
          <span>Confirmar Asistencia</span>
        </a>

        <p className="mt-6 text-muted-foreground font-body text-xs italic">
          Te respondo en menos de 24 hs 🎩
        </p>
      </motion.div>
    </section>
  );
};

export default RSVP;
