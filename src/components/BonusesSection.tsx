import React from "react";
import { motion } from "framer-motion";
const bonuses = [
  {
    num: 1,
    title: 'Diccionario de Escritos ART "Copy-Paste"',
    desc: "Modelos de inicio, alegatos y recursos de apelación listos para copiar del PDF y adaptar al expediente.",
    value: "ARS 18.990",
    image: "bono1.webp",
  },
  {
    num: 2,
    title: "Manual de Liquidación Pro 2026",
    desc: "Hoja de trabajo para calcular IBM, RIPTE con corrimiento y piso mínimo. Auditá las ofertas de la ART.",
    value: "ARS 16.990",
    image: "bono2.webp",
  },
  {
    num: 3,
    title: "Protocolo de Audiencias Virtuales & Firma Digital",
    desc: "Guía visual para configurar Teams, cumplir requisitos técnicos, gestionar contingencias y firmar correctamente el acta.",
    value: "ARS 14.990",
    image: "bono3.webp",
  },
  {
    num: 4,
    title: "Atlas Crítico del Nuevo Baremo (Dto. 549/2025)",
    desc: "Tabla comparativa de secuelas, factores de ponderación y argumentación técnica para fundamentar la incapacidad.",
    value: "ARS 19.990",
    image: "bono4.webp",
  },
  {
    num: 5,
    title: 'Checklist "Blindaje de Primera Consulta"',
    desc: "Preguntas exactas para los primeros 15 minutos, matriz de plazos de denuncia y protocolo de acción inmediata.",
    value: "ARS 12.990",
    image: "bono5.webp",
  },
];

export function BonusesSection() {
  return (
    <section className="py-10 md:py-14 bg-brand-dark" id="bonos">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-brand-teal mb-3">
            5 Bonos incluidos — sin costo adicional
          </span>
          <h2 className="font-heading font-black text-white text-3xl md:text-5xl leading-tight">
            Herramientas de acción inmediata para multiplicar el valor del sistema.
          </h2>
        </div>

        <div className="space-y-5">
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-brand-card border border-brand-border rounded-2xl p-4 md:p-5 flex flex-col md:flex-row gap-4 md:gap-6 items-center transition-all duration-300 hover:border-brand-teal/40"
            >
              <div className="flex-shrink-0 relative">
                <img
                  src={`${import.meta.env.BASE_URL}${b.image}`}
                  alt={`Bono ${b.num}: ${b.title}`}
                  width={192}
                  height={192}
                  loading="lazy"
                  decoding="async"
                  className="w-44 h-44 md:w-48 md:h-48 object-cover rounded-xl border border-brand-border"
                />
                <span className="absolute -top-2 -left-2 inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-teal/30 bg-brand-dark text-brand-teal shadow-lg">
                  Bono #{b.num}
                </span>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-white font-bold text-sm mb-1">{b.title}</h3>
                <p className="text-brand-gray text-xs leading-relaxed">
                  {b.desc}
                </p>
              </div>

              <div className="flex-shrink-0 text-center md:text-right">
                <p className="text-brand-gray line-through text-sm">
                  {b.value}
                </p>
                <p className="text-brand-teal font-black text-lg">GRATIS</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
