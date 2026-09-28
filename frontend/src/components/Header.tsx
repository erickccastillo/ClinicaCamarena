import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="docked full-width top-0 sticky z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-200">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        
        {/* Brand Anchor */}
        <a className="flex flex-col group" href="#inicio">
          <span className="text-headline-sm font-headline-sm text-primary tracking-tight font-bold">C. D. Oliver Camarena</span>
          <span className="text-label-sm font-label-sm text-on-surface-variant tracking-wider uppercase">ODONTOLOGÍA INTEGRAL ESTÉTICA</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a className="text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#servicios">Servicios</a>
          <a className="text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#doctor">Sobre el Doctor</a>
          <a className="text-label-md font-label-md text-primary font-bold border-b-2 border-primary pb-1" href="#cotizador">Formulario</a>
          <a className="text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#ubicacion">Ubicación</a>
        </nav>

        {/* Trailing Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* WhatsApp Action */}
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
          <a className="inline-flex items-center space-x-2 bg-primary-container hover:bg-primary text-on-primary px-5 py-2.5 rounded-full transition-all duration-200 text-label-md font-label-md shadow-sm active:scale-95" href="#cotizador">
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            <span>Reservar Cita</span>
          </a>
        </div>

      </div>
    </header>
  );
};