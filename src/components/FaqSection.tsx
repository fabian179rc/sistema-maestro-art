import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { getCheckoutUrl } from "../utils/checkoutUrl";
const faqs = [
  {
    q: "¿Sirve si ya trabajo hace años con casos de ART?",
    a: "Sí. ART MASTER 2026 funciona como sistema de consulta y actualización para ordenar tu práctica, reducir búsquedas y trabajar con normativa, modelos y protocolos reunidos en un solo lugar.",
  },
  {
    q: "¿Sirve para cualquier provincia de Argentina?",
    a: "Cubre el procedimiento federal ante Comisiones Médicas, aplicable en todo el país, con capítulos específicos para CABA y Provincia de Buenos Aires en la instancia judicial.",
  },
  {
    q: "¿Necesito experiencia previa en ART para usarlo?",
    a: "No. El material está estructurado desde el encuadre normativo básico hasta los trámites más complejos. Es útil tanto para quien empieza como para quien necesita actualizarse.",
  },
  {
    q: "¿Cuándo recibo el acceso?",
    a: "El acceso es inmediato. Dentro de los minutos posteriores a la compra recibís el enlace de descarga en tu correo electrónico.",
  },
  {
    q: "¿Reemplaza el asesoramiento de un abogado senior?",
    a: "No. ART MASTER 2026 es una herramienta de organización y orientación práctica. Los modelos y guías deben adaptarse a la normativa, jurisprudencia y usos procesales vigentes en cada jurisdicción.",
  },
  {
    q: "¿Puedo pedir reembolso?",
    a: "Sí. Tenés 7 días para revisar el material y solicitar la devolución según las condiciones de compra si no se corresponde con lo ofrecido en esta página.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-10 md:py-14 bg-brand-dark">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal font-bold tracking-[0.18em] uppercase text-xs">
            Preguntas Frecuentes
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white leading-tight">
            Respondemos <span className="text-brand-teal">tus preguntas</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-brand-card border border-brand-border rounded-2xl"
              >
                <button
                  className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-white text-lg md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal flex items-center justify-center transition-colors"
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-7 -mt-1 text-brand-gray leading-relaxed text-[15px] md:text-base max-w-[58ch]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href={getCheckoutUrl()}
            className="inline-block bg-brand-teal hover:bg-[#00ffcc] text-brand-dark font-black uppercase tracking-widest px-8 py-4 rounded-lg shadow-[0_0_30px_#00d4aa33] transition-all"
          >
            Acceder ahora por ARS 19.990
          </a>
        </div>
      </div>
    </section>
  );
}
