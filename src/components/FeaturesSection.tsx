import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "12", label: "Capítulos" },
  { value: "10", label: "Trámites" },
  { value: "5", label: "Bonos" },
  { value: "2026", label: "Actualizado" },
];

const modules = [
  "Marco Normativo 2026 — leyes, decretos y resoluciones clave",
  "Alta en ARCA y Ventanilla Electrónica SRT, paso a paso",
  "Los 10 trámites ante Comisiones Médicas",
  "Audiencias virtuales por Teams y firma digital del acta",
  "Cálculo de indemnización con IBM, RIPTE y pisos mínimos",
  "Instancia judicial diferenciada para CABA y Provincia de Buenos Aires",
  "Nuevo Baremo del Dto. 549/2025 y Res. SRT 5/2026",
  "Recursos ante Comisiones Médicas y vías judiciales",
];

export function FeaturesSection() {
  return (
    <section className="py-10 md:py-14 bg-brand-dark">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-brand-teal mb-3">
            Una guía completa, organizada y aplicable
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-white">
            Qué incluye ART MASTER 2026
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-10 max-w-lg mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center bg-brand-card border border-brand-border rounded-xl py-4"
            >
              <div className="text-brand-teal font-black text-2xl md:text-3xl">
                {s.value}
              </div>
              <div className="text-brand-gray text-[10px] md:text-xs uppercase tracking-wide mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <ul className="space-y-2 sm:space-y-3 max-w-xl mx-auto">
          {modules.map((m, i) => (
            <motion.li
              key={m}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-2.5 sm:gap-3 bg-brand-card border border-brand-border rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3"
            >
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 text-brand-teal" />
              <span className="text-brand-text text-sm sm:text-base leading-relaxed">{m}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
