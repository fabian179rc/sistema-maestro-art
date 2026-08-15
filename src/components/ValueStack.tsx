import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ClipboardCheck, Calculator, Scale, Clock3, FileText } from "lucide-react";

const changes = [
  {
    icon: BadgeCheck,
    title: "Gestionar expedientes sin perder plazos",
    desc: "Checklists procesales y mapas de etapas para saber exactamente qué acción tomar.",
  },
  {
    icon: ClipboardCheck,
    title: "Cargar trámites sin errores",
    desc: "Protocolos para ARCA, Ventanilla Electrónica y Comisiones Médicas sin rechazos técnicos.",
  },
  {
    icon: Calculator,
    title: "Calcular indemnizaciones con precisión",
    desc: "Aplicá IBM, RIPTE con corrimiento y pisos mínimos sin depender de nadie.",
  },
  {
    icon: Scale,
    title: "Dominar el nuevo Baremo",
    desc: "Entendé secuelas, factores de ponderación y capacidad restante para argumentar técnicamente.",
  },
  {
    icon: Clock3,
    title: "Ahorrar horas de búsqueda",
    desc: "Encontrá el procedimiento y el modelo adecuado en un sistema ordenado y actualizado.",
  },
  {
    icon: FileText,
    title: "Presentarte con autoridad",
    desc: "Entregá documentación sólida y actualizada que genere confianza desde la primera consulta.",
  },
];

export function ValueStack() {
  return (
    <section className="py-10 md:py-14 bg-brand-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white">
            Con este sistema vas a poder trabajar con{" "}
            <span className="text-brand-teal">método y confianza</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {changes.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-brand-card border border-brand-border rounded-2xl p-5 text-center"
            >
              <c.icon className="w-7 h-7 text-brand-teal mx-auto mb-3" />
              <h3 className="text-white font-bold text-sm md:text-base mb-1.5">
                {c.title}
              </h3>
              <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
