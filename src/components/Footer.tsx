import React from "react";
export function Footer() {
  return (
    <footer className="bg-[#070b12] text-brand-gray py-10 border-t border-brand-border">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="text-white font-bold text-xl mb-6">
          ART MASTER 2026
        </div>

        <p className="text-xs max-w-2xl mx-auto mb-8 leading-relaxed">
          ART MASTER 2026 es una herramienta digital de orientación y organización práctica para profesionales del Derecho y la Seguridad Laboral. Los modelos y guías incluidos deben adaptarse a la normativa, jurisprudencia y usos y costumbres procesales vigentes en cada jurisdicción. No constituye asesoramiento legal, patrocinio ni consultoría jurídica particular, ni reemplaza al profesional habilitado responsable de cada caso concreto.
        </p>

        <div className="text-xs text-brand-gray/70">
          <p>© 2026 ART MASTER 2026 — Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
