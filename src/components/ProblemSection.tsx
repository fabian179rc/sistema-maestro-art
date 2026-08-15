import React from 'react';
import { motion } from 'framer-motion';
const situations = [
  {
    emoji: '🗂️',
    title: 'Modelos dispersos',
    desc: 'Escritos sueltos y desactualizados. Cada caso nuevo, rehacés todo desde cero sin saber si el modelo sigue vigente.',
  },
  {
    emoji: '⏱️',
    title: 'Trámites que llevan horas',
    desc: 'La carga en ARCA, e-Servicios SRT y la Ventanilla Electrónica te come tiempo que podrías dedicar a gestionar tus casos.',
  },
  {
    emoji: '📌',
    title: 'Cálculos inciertos',
    desc: 'No tenés claro cómo aplicar el IBM, el RIPTE con corrimiento o el nuevo Baremo sin cometer errores.',
  },
  {
    emoji: '🎯',
    title: 'Plazos perentorios',
    desc: 'Una notificación, un alta o una decisión administrativa puede activar plazos críticos. Sin un sistema claro, una demora puede complicar la estrategia del expediente.',
  },
];

export function ProblemSection() {
  return (
    <section className="py-10 md:py-14 bg-brand-dark">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-5xl font-black mb-4 text-white">
            ¿Te falta estructura para gestionar casos de ART{' '}
            <span className="text-brand-teal">sin trabarte?</span>
          </h2>
          <p className="text-lg text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Sabés redactar escritos, pero cada expediente nuevo te hace perder horas buscando modelos, trámites y plazos.
          </p>
          <p className="text-brand-teal font-bold mt-4">⚡ Ese no es un problema de capacidad. Es un problema de sistema.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-1.5 sm:gap-6">
          {situations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-card border border-brand-border rounded-lg sm:rounded-2xl p-2 sm:p-6 transition-all duration-300 hover:border-brand-teal/40"
            >
              <div className="flex items-center gap-2 mb-1 sm:block sm:mb-3">
                <span className="text-xl sm:text-3xl">{item.emoji}</span>
                <h3 className="text-[15px] sm:text-lg font-bold text-white sm:mb-2">{item.title}</h3>
              </div>
              <p className="text-brand-gray leading-relaxed text-[13px] sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
