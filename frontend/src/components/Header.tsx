import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="docked full-width top-0 sticky z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-200">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 h-20">
        
        {/* Brand Anchor */}
        <a className="flex flex-col group truncate mr-2" href="#inicio" onClick={closeMenu}>
          <span className="text-headline-sm font-headline-sm text-primary tracking-tight font-bold truncate">C. D. Oliver Camarena</span>
          <span className="text-[10px] sm:text-label-sm font-label-sm text-on-surface-variant tracking-wider uppercase truncate">ODONTOLOGÍA INTEGRAL ESTÉTICA</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a className="text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#servicios">Servicios</a>
          <a className="text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#doctor">Sobre el Doctor</a>
          <a className="text-label-md font-label-md text-primary font-bold border-b-2 border-primary pb-1" href="#cotizador">Formulario</a>
          <a className="text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#ubicacion">Ubicación</a>
        </nav>

        {/* Trailing Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* WhatsApp Action (Solo Desktop/Tablet) */}
          <a 
            className="hidden sm:flex items-center space-x-1.5 px-4 py-2 rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-all duration-200 text-label-md font-label-md" 
            href="https://wa.me/523781181889" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp</span>
          </a>
          
          {/* Primary Booking Action */}
          <a 
            className="inline-flex items-center space-x-1 sm:space-x-2 bg-primary-container hover:bg-primary text-on-primary px-3 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-200 text-label-md font-label-md shadow-sm active:scale-95" 
            href="#cotizador"
            onClick={closeMenu}
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">calendar_month</span>
            <span className="hidden min-[400px]:inline">Reservar</span>
          </a>

          {/* Menú Hamburguesa (Solo Móvil) */}
          <button 
            className="md:hidden flex items-center justify-center p-2 rounded-full text-on-surface-variant hover:bg-on-surface-variant/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Alternar menú"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Dropdown de Navegación Móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface-container-lowest border-b border-outline-variant/30 shadow-lg px-6 py-4 flex flex-col space-y-4">
          <a className="text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-outline-variant/10" href="#servicios" onClick={closeMenu}>Servicios</a>
          <a className="text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-outline-variant/10" href="#doctor" onClick={closeMenu}>Sobre el Doctor</a>
          <a className="text-label-md font-label-md text-primary font-bold transition-colors py-2 border-b border-outline-variant/10" href="#cotizador" onClick={closeMenu}>Formulario</a>
          <a className="text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors py-2" href="#ubicacion" onClick={closeMenu}>Ubicación</a>
          
          {/* Botón de WhatsApp incluido en el menú móvil para que no se pierda el acceso */}
          <a 
            className="flex items-center space-x-2 px-4 py-3 mt-4 rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-all w-fit" 
            href="https://wa.me/523781181889" 
            rel="noopener noreferrer" 
            target="_blank"
            onClick={closeMenu}
          >
            <span className="material-symbols-outlined">chat</span>
            <span>Contactar por WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
};
