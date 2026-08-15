import React from "react";
import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";
const testimonials = [
  {
    initial: "M",
    color: "bg-brand-teal/15 text-brand-teal",
    name: "María L.",
    location: "Buenos Aires · Abogada Laboralista",
    text: "Antes cada trámite de divergencia me llevaba medio día buscando el procedimiento. Ahora tengo el paso a paso en el PDF y lo resuelvo en una hora.",
  },
  {
    initial: "F",
    color: "bg-brand-blue/15 text-brand-blue",
    name: "Federico G.",
    location: "Córdoba · Abogado Litigante",
    text: "El módulo del nuevo Baremo me dio el criterio técnico para refutar la valoración del médico de la ART. Clarísimo y actualizado.",
  },
  {
    initial: "V",
    color: "bg-emerald-500/15 text-emerald-400",
    name: "Valentina R.",
    location: "Rosario · Técnica en HyS",
    text: "Lo usé para mis primeros expedientes reales. La guía de Ventanilla Electrónica me ahorró horas de soporte técnico. Clarísimo y actualizado a 2026.",
  },
];

export function TestimonialsBottom() {
  return (
    <section className="py-10 md:py-14 bg-brand-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 flex flex-col items-center">
          <MessageCircle className="w-10 h-10 text-brand-teal mb-3" />
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal font-bold tracking-[0.18em] uppercase text-xs">
            Lo que dicen otros profesionales
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-3">
            Lo que dicen quienes ya tienen ART MASTER 2026
          </h2>
          <p className="text-brand-gray text-sm md:text-base">
            ⭐ 4.9/5 — Valoración de usuarios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-card border border-brand-border rounded-2xl p-5 flex flex-col h-full"
            >
              <div className="flex text-brand-teal mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              <p className="text-brand-text text-[15px] leading-relaxed mb-4 italic flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-center border-t border-brand-border pt-3 mt-auto">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${t.color} mr-3 flex-shrink-0`}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-brand-gray">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
