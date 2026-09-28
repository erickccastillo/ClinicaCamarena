import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20">

        {/* Brand */}
        <a href="#inicio" className="flex flext-sm md:text-headline-sm font-bold text-primary truncate">
            C. D. Oliver Camarena
          </span>
          <span className="hidden sm:block text-[10px] md:text-label-sm uppercase tracking-wider text-on-surface-variant">
            Odontología Integral Estética
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            className="text-on-surface-variant hover:text-primary transition-colorsext-on-surface-variant hover:text-primary transition-colors"
        mary font-bold border-b-2 border-        className="text-on-surface-variant hover:text-primary transition-colors"
  s */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="https://wa.me/523781181889"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-4 py-2 rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">
              chat
            </span>
            <span>WhatsApp</span>
          </a>

          <a
            href="#cotizador"
            className="inline-flex items-center space-x-2 bg-primary-container hover:bg-primary hover:text-white >Reservar Cita</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-primary"
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-outline-variant/30 bg-surface-container-lowest">
          <nav className="flex flex-col px-4 py-4">

            <a
              href="#servicios"
              className="py-3 text-on-surface"
              on    <a
              href="#doctor"
              className="py-3 text-on-surface"
              onClick={() => setMenuOpen(false)}
  otizador"
              className="py-3 font-semibold text-primary"
              onClick={() => setMenuOpen(false)}
            >
             ext-on-surface"
              onClick={() => setMenuOpen(false)}
            >
              Ubicación
            </a>

            <div className="flex         target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-primary text-primary rounded-full py-3"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp
              </a>

              <a
                href="#cotizador"
                className="flex items-center justify-center gap-2 bg-primary text-white rounded-full py-3"
                onClick={() => setMenuOpen(false)}
              >
                  </div>
          </nav>
        </div>
      )}
    </header>
  );
};
