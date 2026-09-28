import React, { useState } from 'react';

// Importaciones de imágenes desde la carpeta de assets/images
import doctorHero from '../images/doctor-hero.jpg';
import doctorProfile from '../images/doctor-profile.jpg';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'diseno',
    comments: '',
    privacy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    alert('¡Gracias! En breve nos pondremos en contacto contigo.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      treatment: 'diseno',
      comments: '',
      privacy: false,
    });
  };

  return (
    <>
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="relative pt-12 pb-16 md:pb-24 md:py-20 overflow-hidden bg-gradient-to-b from-surface to-surface-container-low/40" id="inicio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <h1 className="text-display-hero font-display-hero text-on-surface tracking-tight text-4xl sm:text-5xl md:text-6xl">
                Tu sonrisa ideal en manos de un especialista.
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                Diseño de sonrisa digital, odontología mínimamente invasiva y protocolos sin dolor diseñados para devolverte la armonía estética y la salud funcional definitiva.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-primary text-on-primary text-label-md font-label-md hover:bg-tertiary shadow-md hover:shadow-lg transition-all active:scale-95" href="#cotizador">
                  Cotizar Tratamiento
                  <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
                </a>
                <a className="inline-flex justify-center items-center px-6 py-4 rounded-full border border-primary text-primary hover:bg-primary/5 transition-all text-label-md font-label-md group" href="https://wa.me/523781181889" rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined mr-2 text-[20px] text-primary">chat</span>
                  <span>WhatsApp 378 118 1889</span>
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary-fixed/40 to-secondary-fixed/30 rounded-3xl filter blur-2xl opacity-60"></div>
                <div className="relative rounded-2xl overflow-hidden custom-shadow-ambient border border-outline-variant/40 bg-surface-container-lowest">
                  {/* Altura responsiva: 350px en móvil, 460px en desktop */}
                  <img className="w-full h-[350px] md:h-[460px] object-cover object-top md:object-center" alt="Dr. Gabriel Ruiz" src={doctorHero} />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-on-primary">
                    <p className="text-title-md font-title-md font-bold">C. D. Oliver Camarena</p>
                    <p className="text-body-sm font-body-sm text-surface-container-high">Odontología Integral Estética</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. SERVICIOS ==================== */}
      <section className="py-16 md:py-24 bg-surface-container-lowest border-y border-outline-variant/30" id="servicios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-4">
            <h2 className="text-headline-lg font-headline-lg text-on-surface">Excelencia en cada detalle clínico</h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Protocolos mínimamente invasivos con tecnología de escaneo 3D y materiales cerámicos bio-compatibles de vanguardia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Las tarjetas se mantienen igual pero el grid-gap se redujo ligeramente en móvil */}
            <div className="group bg-surface rounded-xl p-6 border border-outline-variant/40 custom-shadow-ambient hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-title-md font-title-md text-on-surface font-bold">Diseño de Sonrisa & Carillas</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Carillas de porcelana ultrafinas diseñadas digitalmente según tus proporciones faciales. Corrección de tono, alineación y desgaste sin tallado agresivo.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-primary font-bold">Duración: 2 a 3 citas</span>
                <a className="text-label-md font-label-md text-primary hover:text-tertiary inline-flex items-center font-bold" href="#cotizador">
                  Cotizar <span className="material-symbols-outlined ml-1 text-[16px]">chevron_right</span>
                </a>
              </div>
            </div>

            <div className="group bg-surface rounded-xl p-6 border border-outline-variant/40 custom-shadow-ambient hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-title-md font-title-md text-on-surface font-bold">Ortodoncia Invisible</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Alineadores transparentes cómodos y removibles. Corrige apiñamiento y mordidas sin brackets metálicos y visualiza tus resultados finales antes de iniciar.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-primary font-bold">100% Removible</span>
                <a className="text-label-md font-label-md text-primary hover:text-tertiary inline-flex items-center font-bold" href="#cotizador">
                  Cotizar <span className="material-symbols-outlined ml-1 text-[16px]">chevron_right</span>
                </a>
              </div>
            </div>

            <div className="group bg-surface rounded-xl p-6 border border-outline-variant/40 custom-shadow-ambient hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-title-md font-title-md text-on-surface font-bold">Blanqueamiento Láser Clínico</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Aclara hasta 6 tonos en una sola sesión de 60 minutos. Fórmula controlada de pH neutro que previene la hipersensibilidad post-tratamiento.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-primary font-bold">Sesión Única de 60 min</span>
                <a className="text-label-md font-label-md text-primary hover:text-tertiary inline-flex items-center font-bold" href="#cotizador">
                  Cotizar <span className="material-symbols-outlined ml-1 text-[16px]">chevron_right</span>
                </a>
              </div>
            </div>

            <div className="group bg-surface rounded-xl p-6 border border-outline-variant/40 custom-shadow-ambient hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-title-md font-title-md text-on-surface font-bold">Implantes & Rehabilitación</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Restauración completa de piezas dentales perdidas mediante implantes de titanio y coronas de zirconio computarizadas para masticación natural.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-primary font-bold">Garantía Estructural</span>
                <a className="text-label-md font-label-md text-primary hover:text-tertiary inline-flex items-center font-bold" href="#cotizador">
                  Cotizar <span className="material-symbols-outlined ml-1 text-[16px]">chevron_right</span>
                </a>
              </div>
            </div>

            <div className="group bg-surface rounded-xl p-6 border border-outline-variant/40 custom-shadow-ambient hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-title-md font-title-md text-on-surface font-bold">Profilaxis & Limpieza Profunda</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Protocolo guiado por ultrasonido y aeropulido con partículas de glicina. Eliminación integral de manchas y sarro subgingival protegiendo el esmalte.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-primary font-bold">Cuidado Preventivo</span>
                <a className="text-label-md font-label-md text-primary hover:text-tertiary inline-flex items-center font-bold" href="#cotizador">
                  Cotizar <span className="material-symbols-outlined ml-1 text-[16px]">chevron_right</span>
                </a>
              </div>
            </div>

            {/* Card 6: Interactive Callout */}
            <div className="bg-gradient-to-br from-primary to-tertiary rounded-xl p-6 text-on-primary flex flex-col justify-between custom-shadow-ambient">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-on-primary/10 text-on-primary-container text-label-sm font-label-sm font-bold">Plan Personalizado</span>
                <h3 className="text-headline-sm font-headline-sm font-bold">¿No estás seguro de cuál necesitas?</h3>
                <p className="text-body-sm font-body-sm text-surface-container-high opacity-90">
                  Agenda tu cita de valoración inicial con escáner 3D y recibe un diagnóstico completo sin compromiso.
                </p>
              </div>
              <div className="pt-6">
                <a className="inline-flex w-full justify-center items-center py-3 rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container transition-colors font-bold shadow-sm" href="#cotizador">
                  Agendar Valoración 3D
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. CONOCE AL DOCTOR ==================== */}
      <section className="py-16 md:py-24 bg-surface" id="doctor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1 mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden border border-outline-variant/40 custom-shadow-ambient">
                {/* Altura ajustada para móvil */}
                <img className="w-full h-[400px] md:h-[520px] object-cover object-top md:object-center" alt="Doctor Gabriel Ruiz" src={doctorProfile} />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <h2 className="text-headline-lg font-headline-lg text-on-surface">C. D. Oliver Camarena: Odontología Integral Estética y Cuidado Humanizado</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Especialista enfocado en odontología integral y estética dental, el C. D. Oliver Camarena combina precisión clínica y tecnología avanzada con un trato personalizado, cálido y libre de estrés.
              </p>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Especialmente capacitado para atender a pacientes con aprehensión o fobia al dentista, su consulta está diseñada para transformar una cita odontológica en una experiencia de bienestar relajante.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">school</span>
                  <div>
                    <p className="text-label-md font-label-md text-on-surface font-bold">Lic. Cirujano Dentista</p>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">Universidad Nacional Autónoma de México</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a className="inline-flex justify-center items-center space-x-3 px-5 py-3 rounded-full bg-surface-container-lowest border border-outline-variant/60 hover:border-primary text-on-surface hover:text-primary transition-all duration-200 custom-shadow-ambient" href="https://instagram.com/dentista.oliver" rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-[20px] text-primary">photo_camera</span>
                  <span className="text-label-md font-label-md font-bold">@dentista.oliver</span>
                  <span className="text-body-sm font-body-sm text-on-surface-variant hidden sm:inline">| Ver Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. FORMULARIO ==================== */}
      <section className="py-16 md:py-24 bg-surface-container-low/60 border-t border-outline-variant/30" id="cotizador">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16 space-y-3">
            <h2 className="text-headline-lg font-headline-lg text-on-surface">Solicita tu cotización o agenda tu valoración</h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Recibe un estimado personalizado y reserva tu espacio preferido en menos de un minuto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-surface-container-lowest p-6 md:p-10 rounded-2xl border border-outline-variant/40 custom-shadow-ambient">
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-label-md font-label-md text-on-surface font-semibold" htmlFor="name">Nombre Completo *</label>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-lg bg-surface border border-outline-variant/80 text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md" 
                      id="name" 
                      placeholder="Ej. Mariana Morales" 
                      required 
                      type="text" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-label-md font-label-md text-on-surface font-semibold" htmlFor="phone">Teléfono / WhatsApp *</label>
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-lg bg-surface border border-outline-variant/80 text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md" 
                      id="phone" 
                      placeholder="Ej. +52 55 1234 5678" 
                      required 
                      type="tel" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-label-md font-label-md text-on-surface font-semibold" htmlFor="email">Correo Electrónico</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-lg bg-surface border border-outline-variant/80 text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md" 
                    id="email" 
                    placeholder="mariana@ejemplo.com" 
                    type="email" 
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-label-md font-label-md text-on-surface font-semibold">Tratamiento de Interés *</label>
                  {/* Grid ajustado a 1 columna en móviles muy pequeños, 2 en normales, 3 en grandes */}
                  <div className="grid grid-cols-1 flex-col sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {[
                      { value: 'diseno', label: 'Diseño de Sonrisa' },
                      { value: 'ortodoncia', label: 'Ortodoncia Invisible' },
                      { value: 'blanqueamiento', label: 'Blanqueamiento' },
                      { value: 'implantes', label: 'Implantes Dentales' },
                      { value: 'limpieza', label: 'Limpieza Dental' },
                      { value: 'otro', label: 'Valoración General' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center justify-center p-3 rounded-lg border border-outline-variant/80 text-on-surface hover:border-primary cursor-pointer has-[:checked]:bg-primary-container has-[:checked]:text-on-primary has-[:checked]:border-primary transition-all text-label-sm font-label-sm text-center">
                        <input 
                          className="hidden" 
                          name="treatment" 
                          type="radio" 
                          value={option.value}
                          checked={formData.treatment === option.value}
                          onChange={handleChange}
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-label-md font-label-md text-on-surface font-semibold" htmlFor="comments">Comentarios o Dudas Adicionales</label>
                  <textarea 
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg bg-surface border border-outline-variant/80 text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md" 
                    id="comments" 
                    placeholder="Cuéntanos sobre tus objetivos o si experimentas alguna molestia..." 
                    rows={3}
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input 
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 min-w-[1rem] rounded text-primary focus:ring-primary border-outline-variant" 
                    id="privacy" 
                    required 
                    type="checkbox" 
                  />
                  <label className="text-body-sm font-body-sm text-on-surface-variant leading-snug" htmlFor="privacy">
                    Acepto el tratamiento de mis datos de acuerdo con el aviso de privacidad de la clínica.
                  </label>
                </div>

                <button className="w-full py-4 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-tertiary transition-all duration-200 shadow-md font-bold tracking-wide active:scale-98" type="submit">
                  Enviar y Recibir Presupuesto
                </button>
              </form>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-br from-primary-container to-primary p-6 md:p-8 rounded-2xl text-on-primary custom-shadow-ambient space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-on-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[26px]">chat</span>
                  </div>
                  <div>
                    <h3 className="text-title-md font-title-md font-bold">¿Prefieres atención inmediata?</h3>
                    <p className="text-body-sm font-body-sm text-surface-container-high opacity-90">Respuesta en menos de 15 min</p>
                  </div>
                </div>
                <p className="text-body-sm font-body-sm text-surface-container-high leading-relaxed">
                  Envía tus preguntas o imágenes de referencia directamente a nuestro coordinador clínico para agendar con prioridad.
                </p>
                <a className="inline-flex w-full justify-center items-center py-4 rounded-full bg-surface-container-lowest text-primary text-label-md font-label-md font-bold hover:bg-surface-container transition-all active:scale-95 shadow-md" href="https://wa.me/523781181889" rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined mr-2 text-[20px]">chat</span>
                  WhatsApp: 378 118 1889
                </a>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px]">call</span>
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant uppercase font-bold">Teléfono Consultorio</p>
                    <p className="text-title-md font-title-md text-on-surface font-bold break-all">+52 33 2902 2995</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 border-t border-outline-variant/20 pt-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px]">chat</span>
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant uppercase font-bold">WhatsApp Directo</p>
                    <p className="text-title-md font-title-md text-on-surface font-bold break-all">+52 378 118 1889</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 border-t border-outline-variant/20 pt-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px]">schedule</span>
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant uppercase font-bold">Horarios</p>
                    <p className="text-body-sm font-body-sm text-on-surface">Lun-Vie: 09:00-20:00 | Sáb: 09:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. UBICACIÓN ==================== */}
      <section className="py-16 md:py-24 bg-surface" id="ubicacion">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-headline-lg font-headline-lg text-on-surface">Instalaciones de Primer Nivel en Guadalajara</h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Ubicados en una zona accesible de Guadalajara, Jalisco, equipados con la tecnología más avanzada y espacios diseñados para tu máximo confort y tranquilidad durante tu atención odontológica.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <span className="material-symbols-outlined text-primary text-[24px] mt-0.5">location_on</span>
                  <div>
                    <p className="text-label-md font-label-md text-on-surface font-bold">Dirección</p>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">Joaquín Angulo 1855, Guadalajara, Jalisco.</p>
                  </div>
                </div>
              </div>
              <div className="pt-2 md:pt-4">
                <a className="inline-flex items-center space-x-2 text-label-md font-label-md text-primary font-bold hover:text-tertiary p-3 md:p-0 bg-primary/10 md:bg-transparent rounded-lg md:rounded-none w-full md:w-auto justify-center md:justify-start" href="https://maps.app.goo.gl/TU_ENLACE_AQUI" rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-[18px]">map</span>
                  <span>Abrir en Google Maps</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              {/* Altura de mapa optimizada para móvil */}
              <div className="relative rounded-2xl overflow-hidden border border-outline-variant/40 custom-shadow-ambient h-[300px] md:h-[440px] bg-surface-container mt-6 lg:mt-0">
                <iframe
                  src="https://maps.google.com/maps?q=Joaqu%C3%ADn%20Angulo%201855,%20Guadalajara,%20Jalisco&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación C.D. Oliver Camarena"
                  className="w-full h-full absolute inset-0"
                ></iframe>
                
                {/* Cuadro de información flotante mejorado en móvil para no tapar todo el mapa */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:w-80 bg-surface-container-lowest/95 backdrop-blur-md p-4 md:p-5 rounded-xl border border-outline-variant/40 custom-shadow-glow pointer-events-none">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">dentistry</span>
                    </div>
                    <div>
                      <p className="text-label-md font-label-md font-bold text-on-surface">C. D. Oliver Camarena</p>
                      <p className="text-body-sm font-body-sm text-primary">Joaquín Angulo 1855</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. FLOATING WHATSAPP BUTTON ==================== */}
      {/* Botón movido ligeramente hacia el centro en móvil para evitar chocar con barras de navegación del SO */}
      <div className="fixed bottom-6 right-4 md:right-6 z-50 flex items-center group">
        <div className="hidden md:flex mr-3 bg-surface-container-lowest px-4 py-2 rounded-full border border-outline-variant/40 shadow-lg text-label-sm font-label-sm text-on-surface items-center space-x-2 pointer-events-none group-hover:scale-105 transition-all">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span>¿Dudas rápidas? Escríbenos</span>
        </div>
        <a aria-label="Escribir por WhatsApp" className="w-14 h-14 rounded-full bg-primary hover:bg-tertiary text-on-primary flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95" href="https://wa.me/523781181889" rel="noopener noreferrer" target="_blank">
          <span className="material-symbols-outlined text-[28px]">chat</span>
        </a>
      </div>

      {/* ==================== 7. FOOTER ==================== */}
      <footer className="full-width bg-surface-container-low border-t border-outline-variant/40 text-on-surface transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <a className="text-headline-sm font-headline-sm text-primary tracking-tight font-bold" href="#inicio">
              C. D. Oliver Camarena
            </a>
            <p className="text-body-sm font-body-sm text-on-surface-variant max-w-md mx-auto md:mx-0">
              © 2026 C. D. Oliver Camarena - Odontología Integral Estética. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-3 text-label-sm font-label-sm px-4 md:px-0">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#servicios">Blanqueamiento</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#servicios">Ortodoncia</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#servicios">Implantes</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#servicios">Diseño Sonrisa</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a aria-label="Instagram" className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-surface-container-lowest border border-outline-variant/50 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="https://instagram.com/dentista.oliver" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-[20px] md:text-[18px]">photo_camera</span>
            </a>

            <a aria-label="LinkedIn" className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-surface-container-lowest border border-outline-variant/50 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="https://linkedin.com/in/oliver-camarena-007995191" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-[20px] md:text-[18px]">work</span>
            </a>
            <a aria-label="WhatsApp" className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-surface-container-lowest border border-outline-variant/50 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="https://wa.me/523781181889" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-[20px] md:text-[18px]">chat</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;

