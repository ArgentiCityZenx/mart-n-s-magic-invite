import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const images = [
  { src: g1, alt: "Show corporativo" },
  { src: g2, alt: "Bola de cristal" },
  { src: g3, alt: "Audiencia asombrada" },
  { src: g4, alt: "Sombrero y cartas" },
];

const Location = () => {
  const mapsUrl = "https://maps.google.com/?q=Teatro+Gran+Rex+Buenos+Aires";
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), []);

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <MapPin className="w-14 h-14 text-purple-vivid mx-auto animate-float-gentle" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl font-bold text-purple-vivid mb-4"
        >
          ¿Dónde?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-base md:text-lg text-foreground/80 mb-8"
        >
          Te espero en{" "}
          <strong className="text-foreground">Av. Corrientes 857,</strong>
          <br />
          CABA · 21:00 hs
        </motion.p>

        {/* Image carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mb-8 overflow-hidden rounded-xl"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={800}
                className="w-full flex-shrink-0 aspect-[4/3] object-cover"
              />
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/60 flex items-center justify-center text-foreground hover:bg-purple-brand transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/60 flex items-center justify-center text-foreground hover:bg-purple-brand transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-purple-vivid w-5" : "bg-foreground/30"
                }`}
                aria-label={`Imagen ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-purple inline-block text-sm"
        >
          Ver mapa
        </motion.a>
      </div>
    </section>
  );
};

export default Location;
