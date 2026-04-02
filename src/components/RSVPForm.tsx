import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [notes, setNotes] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const formData = { name, attendance, notes, phone };

  try {
    await fetch("https://martinalmadamago.com/invitacion/save_rsvp.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    console.error("Error guardando en DB", error);
  }
};

  if (submitted) {
    return (
      <section className="py-16 md:py-24 px-6 bg-secondary">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center"
        >
          <p className="font-heading text-3xl text-purple-brand mb-2">¡Gracias!</p>
          <p className="text-foreground/60 font-body">Tu confirmación fue enviada por WhatsApp.</p>
        </motion.div>
      </section>
    );
  }

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
          <Sparkles className="w-14 h-14 text-purple-brand mx-auto animate-float-gentle" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl font-bold text-purple-brand mb-8"
        >
          ¡Confirmá tu asistencia!
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4 text-left"
        >
          <div>
            <label className="block text-sm font-body font-medium text-foreground/60 mb-1.5">
              Nombre y Apellido
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-purple-brand transition-shadow"
            />
          </div>

          <div>
            <label className="block text-sm font-body font-medium text-foreground/60 mb-1.5">
              Asistencia
            </label>
            <select
              required
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-purple-brand transition-shadow appearance-none"
            >
              <option value="" disabled></option>
              <option value="asistire">Asistiré</option>
              <option value="no_asistire">No podré asistir</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-body font-medium text-foreground/60 mb-1.5">
              Aclaraciones
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ejemplo: cantidad de acompañantes, consultas."
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-brand transition-shadow"
            />
          </div>

          <div>
            <label className="block text-sm font-body font-medium text-foreground/60 mb-1.5">
              Teléfono de contacto
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-purple-brand transition-shadow"
            />
          </div>

          <div className="pt-2 text-center">
            <button type="submit" className="btn-purple w-full md:w-auto md:px-12 text-sm">
              Enviar
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVPForm;
