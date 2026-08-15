import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const sinSistema = [
  "Modelos sueltos y normativa dispersa sin un mapa de acción",
  "Horas perdidas buscando cómo iniciar o cargar cada trámite",
  "Cálculos inciertos y riesgo de aplicar una fórmula desactualizada",
  "Plazos perentorios que pueden vencerse por falta de seguimiento",
];

const conSistema = [
  "Sistema operativo completo para empezar a trabajar con método desde hoy.",
  "Checklists y mapas de etapas para ordenar cada expediente.",
  "Modelos de escritos, fórmulas de cálculo y protocolos digitales listos para adaptar.",
  "Criterio técnico actualizado para defender mejor el valor de tu trabajo.",
];

export function Comparison() {
  return (
    <section className="py-10 md:py-14 bg-brand-dark">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-3">
            Más orden, menos improvisación{" "}
            <span className="text-brand-teal">en cada expediente</span>
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto">
            Un sistema claro te ayuda a reducir búsquedas, errores y demoras operativas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-card border border-brand-border rounded-2xl p-6"
          >
            <h3 className="text-brand-gray font-bold uppercase tracking-widest text-xs mb-4">
              Sin el sistema
            </h3>
            <ul className="space-y-3">
              {sinSistema.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-gray text-sm leading-relaxed">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-card border border-brand-teal/40 rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,212,170,0.08)]"
          >
            <h3 className="text-brand-teal font-bold uppercase tracking-widest text-xs mb-4">
              Con ART MASTER 2026
            </h3>
            <ul className="space-y-3">
              {conSistema.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-text text-sm leading-relaxed">
                  <Check className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
