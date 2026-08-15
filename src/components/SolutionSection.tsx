import React from "react";
import { motion } from "framer-motion";
import { Scale, HardHat, Calculator } from "lucide-react";

const profiles = [
  {
    icon: Scale,
    title: "Abogado/a laboralista",
    desc: "Gestioná expedientes de ART con modelos, checklists y protocolos que te permiten trabajar con método desde el primer día.",
  },
  {
    icon: HardHat,
    title: "Estudio jurídico laboral",
    desc: "Estandarizá expedientes, modelos y plazos para que todo el equipo trabaje con el mismo sistema.",
  },
  {
    icon: Calculator,
    title: "Liquidador/a de siniestros",
    desc: "Calculá indemnizaciones, auditá ofertas y entendé la normativa que impacta en cada liquidación.",
  },
];

export function SolutionSection() {
  return (
    <section className="py-10 md:py-14 bg-brand-muted">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-brand-teal mb-3">
            La solución — sistema operativo completo
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-4 max-w-3xl mx-auto">
            Todo lo que necesitás para trabajar ART con{" "}
            <span className="text-brand-teal">método y precisión.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-1.5 sm:gap-5">
          {profiles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-card border border-brand-border rounded-lg sm:rounded-2xl p-2 sm:p-6 text-left"
            >
              <div className="flex items-center gap-2 mb-1 sm:block sm:mb-4">
                <p.icon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-teal" />
                <h3 className="text-white font-bold text-[15px] sm:text-lg sm:mb-2">{p.title}</h3>
              </div>
              <p className="text-brand-gray leading-relaxed text-xs sm:text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
