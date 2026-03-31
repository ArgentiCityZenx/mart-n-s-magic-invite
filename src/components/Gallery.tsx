import { motion } from "framer-motion";
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

const Gallery = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
          La Magia en Imágenes
        </h2>
        <p className="text-muted-foreground font-body text-sm mb-10 tracking-widest uppercase">
          Momentos de shows anteriores
        </p>

        <div className="grid grid-cols-2 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-xl aspect-square group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
