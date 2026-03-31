import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const Location = () => {
  const mapsUrl = "https://maps.google.com/?q=Teatro+Gran+Rex+Buenos+Aires";

  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto"
      >
        <div className="bg-card rounded-2xl border border-border p-8 text-center">
          <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-6 h-6 text-gold" />
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gradient-gold mb-2">
            El Escenario
          </h2>
          <p className="text-muted-foreground font-body text-sm mb-1">
            Av. Corrientes 857
          </p>
          <p className="text-muted-foreground font-body text-sm mb-8">
            CABA, Buenos Aires
          </p>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted border border-border text-foreground font-body text-sm tracking-wider uppercase transition-all hover:glow-gold hover:border-gold/40"
          >
            <span>Cómo llegar</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Location;
