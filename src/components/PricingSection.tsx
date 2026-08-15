import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, CreditCard, ShieldCheck, Lock } from "lucide-react";
import { getCheckoutUrl } from "../utils/checkoutUrl";

const incluye = [
  "ART MASTER 2026 — La Biblia Operativa",
  "12 capítulos sobre normativa, trámites, cálculo y litigio",
  "5 bonos incluidos sin costo adicional",
  "Protocolos diferenciados para CABA y Provincia de Buenos Aires",
  "Acceso digital inmediato en formato PDF",
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-brand-dark pt-5 md:pt-14 pb-0"
    >
      <div className="container mx-auto px-4 max-w-2xl text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-2 md:px-6 md:py-2.5 md:mb-6 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal font-bold tracking-[0.1em] md:tracking-[0.18em] uppercase text-[9px] md:text-xs animate-pulse">
          🔥 75% OFF — LANZAMIENTO
        </span>
        <h2 className="font-heading text-lg md:text-5xl font-black text-white leading-snug md:leading-tight mb-2 md:mb-6">
          Accedé a ART MASTER 2026 y empezá{" "}
          <span className="text-brand-teal">a trabajar con método</span>
        </h2>

        <div className="relative inline-block mb-2 w-full max-w-[280px] md:max-w-sm mx-auto">
          <div className="relative rounded-xl md:rounded-2xl p-1.5 md:p-4 bg-gradient-to-br from-[#0d1b2a] to-[#0a1628] border border-brand-teal/20 shadow-[0_20px_60px_rgba(0,212,170,0.15)]">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={`${import.meta.env.BASE_URL}art-master-2026-mockup.png`}
              />
              <img
                src={`${import.meta.env.BASE_URL}art-master-2026-mockup.png`}
                alt="ART MASTER 2026 — La Biblia Operativa"
                width={1254}
                height={1254}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-lg md:rounded-xl"
              />
            </picture>
          </div>
        </div>
      </div>

      <div
        id="comprar"
        className="container mx-auto px-4 max-w-md relative z-10 pb-6 md:pb-16 mt-2 md:mt-6 scroll-mt-6"
      >
        <div className="bg-brand-card border border-brand-border rounded-2xl md:rounded-3xl shadow-2xl shadow-black/30 p-3.5 md:p-8 text-center">
          <p className="text-brand-gray text-xs md:text-lg mb-0.5 md:mb-2">
            Precio normal: <span className="line-through">ARS 79.990</span>
          </p>

          <div className="price-glow font-heading font-black text-brand-teal leading-none mb-0.5 md:mb-2 text-3xl md:text-7xl">
            ARS 19.990
          </div>
          <p className="text-brand-gray text-[10px] md:text-sm mb-2 md:mb-8">
            Pago único · Acceso instantáneo desde hoy
          </p>

          <div className="grid grid-cols-1 gap-1 md:gap-2.5 text-left mb-3 md:mb-8">
            {incluye.map((item) => (
              <p key={item} className="flex items-start gap-1.5 md:gap-2.5 text-brand-text text-[11px] md:text-sm">
                <span className="text-brand-teal font-black flex-shrink-0">✓</span>
                {item}
              </p>
            ))}
          </div>

          <motion.a
            id="comprar-cta"
            href={getCheckoutUrl()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 md:gap-3 w-full bg-brand-teal hover:bg-[#00ffcc] text-brand-dark font-black uppercase tracking-tight md:tracking-widest text-sm md:text-lg px-4 py-2.5 md:px-6 md:py-5 rounded-lg md:rounded-xl shadow-[0_0_30px_#00d4aa33] transition-all mb-2 md:mb-6 whitespace-nowrap"
          >
            <span className="flex items-center gap-2 text-center">
              Sí, Quiero Acceder Ahora
            </span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
          </motion.a>

          <div className="grid grid-cols-2 gap-y-1 md:gap-y-3 text-[9px] md:text-sm text-brand-gray font-semibold">
            <div className="flex items-center justify-center gap-1 md:gap-2 pr-2 border-r border-brand-border">
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-brand-teal" />
              Acceso inmediato
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-2 pl-2">
              <CreditCard className="w-3 h-3 md:w-4 md:h-4 text-brand-blue" />
              Pago único
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-2 pr-2 border-r border-brand-border">
              <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-brand-blue" />
              Garantía de 7 días
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-2 pl-2">
              <Lock className="w-3 h-3 md:w-4 md:h-4 text-brand-teal" />
              Pago seguro
            </div>
          </div>

          <p className="hidden md:block text-brand-gray/60 text-xs mt-6 italic">
            Precio especial de lanzamiento por tiempo limitado mientras dure la campaña.
          </p>
        </div>
      </div>
    </section>
  );
}
