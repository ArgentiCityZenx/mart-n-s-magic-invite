import { motion } from "framer-motion";

const Closing = () => (
  <section className="py-16 md:py-24 px-6 bg-background">
    <div className="max-w-md mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading text-3xl md:text-4xl font-bold text-purple-vivid mb-3"
      >
        ¡Nos vemos ahí!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-body text-lg text-foreground/70 mb-4"
      >
        Me encantaría compartir esta noche mágica con vos
      </motion.p>

      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl"
      >
        🎩✨
      </motion.p>
    </div>
  </section>
);

export default Closing;
