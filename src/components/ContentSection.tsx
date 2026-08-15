import React from 'react';
import { motion } from 'framer-motion';
import { PackageOpen, CheckCircle2 } from 'lucide-react';

const temas = [
  { emoji: '📋', label: 'Marco Normativo 2026' },
  { emoji: '🖥️', label: 'ARCA y Ventanilla SRT' },
  { emoji: '⚖️', label: '10 Trámites ante CM' },
  { emoji: '🎥', label: 'Audiencias Virtuales Teams' },
  { emoji: '🔢', label: 'Cálculo de Indemnización Pro' },
  { emoji: '🗺️', label: 'Instancia Judicial CABA & PBA' },
  { emoji: '📊', label: 'Nuevo Baremo Dto. 549/2025' },
  { emoji: '🔁', label: 'Recursos ante Comisiones Médicas' },
];

const respaldo = [
  { emoji: '⚙️', label: 'Protocolos paso a paso' },
  { emoji: '📚', label: 'Normativa actualizada' },
];

export function ContentSection() {
  return (
    <section className="py-10 md:py-14 bg-brand-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal font-bold tracking-[0.18em] uppercase text-xs">
            <PackageOpen className="w-4 h-4" />
            Esto es lo que recibís por dentro
          </span>
          <h2 className="font-heading font-black text-white text-3xl md:text-5xl leading-tight mb-4">
            ART MASTER 2026:{' '}
            <span className="text-brand-teal">LA BIBLIA OPERATIVA</span>
          </h2>
          <p className="text-lg md:text-xl font-bold text-brand-gray max-w-2xl mx-auto">
            Todo el sistema operativo en un solo producto para trabajar con método, precisión y confianza en cada expediente.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-6 md:p-8 bg-gradient-to-br from-[#0d1b2a] to-[#0a1628] border border-brand-teal/20 shadow-[0_20px_60px_rgba(0,212,170,0.1)] mb-8 max-w-lg mx-auto"
        >
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${import.meta.env.BASE_URL}art-master-2026-mockup.png`}
            />
            <img
              src={`${import.meta.env.BASE_URL}art-master-2026-mockup.png`}
              alt="Vista previa de ART MASTER 2026"
              width={1254}
              height={1254}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-xl"
            />
          </picture>
        </motion.div>

        <div className="mb-8">
          <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-4 text-center">
            Incluye los bloques más importantes del sistema
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {temas.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-2 sm:gap-2.5 bg-brand-card border border-brand-border rounded-lg sm:rounded-xl px-2.5 py-2 sm:px-4 sm:py-3"
              >
                <span className="text-lg sm:text-xl flex-shrink-0" aria-hidden="true">
                  {t.emoji}
                </span>
                <span className="font-semibold text-brand-text text-xs sm:text-sm md:text-[15px] leading-tight">
                  {t.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-card border border-brand-teal/20 rounded-3xl p-5 md:p-7 text-center"
        >
          <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-5">
            Listo para usar desde el primer día
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {respaldo.map((r, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/30 text-brand-teal rounded-full px-4 py-2 text-sm font-semibold"
              >
                <span aria-hidden="true">{r.emoji}</span>
                {r.label}
              </span>
            ))}
          </div>
          <p className="text-brand-gray text-sm md:text-base leading-relaxed max-w-2xl mx-auto flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
            Contenido estructurado y organizado para que no dependas de información dispersa o contradictoria.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
