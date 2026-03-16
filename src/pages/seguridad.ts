export function initSeguridad() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Banner Hero -->
    <section class="pt-32 pb-24 lg:pt-48 lg:pb-32 2xl:pt-64 2xl:pb-48 bg-primary text-white text-center relative overflow-hidden">
      <div class="container relative z-10">
        <div class="inline-block p-4 2xl:p-8 bg-white/10 rounded-2xl 2xl:rounded-[40px] mb-8 backdrop-blur-md">
          <svg class="w-12 h-12 2xl:w-20 2xl:h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04zM12 21a11.955 11.955 0 01-8.618-3.04A11.952 11.952 0 0012 21.235c3.356 0 6.36-1.379 8.618-3.606A11.955 11.955 0 0112 21z"></path>
          </svg>
        </div>
        <h1 class="text-4xl lg:text-6xl 2xl:text-9xl font-bold mb-8 max-w-4xl 2xl:max-w-6xl mx-auto leading-tight">
          Tu seguridad es nuestra mayor <span class="underline decoration-white/30">prioridad.</span>
        </h1>
        <p class="text-xl 2xl:text-3xl text-white/80 max-w-2xl 2xl:max-w-4xl mx-auto leading-relaxed">
          Hemos diseñado Hommy para que contratar servicios para tu hogar sea la experiencia más segura y confiable posible.
        </p>
      </div>
      <!-- Background Shapes -->
      <div class="absolute top-0 right-0 w-96 h-96 2xl:w-[600px] 2xl:h-[600px] bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 2xl:w-[600px] 2xl:h-[600px] bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </section>

    <!-- Rigorous Verification -->
    <section class="py-24 2xl:py-32 bg-white">
      <div class="container">
        <div class="text-center mb-20 2xl:mb-32">
          <h2 class="section-title">Filtros de Verificación Rigurosa</h2>
          <p class="section-subtitle">Solo el 15% de los profesionales que aplican logran unirse a nuestra red.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 2xl:gap-20">
          ${renderSecurityCard('Validación de Identidad', '🆔', 'Verificamos documentos de identidad oficiales mediante reconocimiento facial y tecnología biométrica.')}
          ${renderSecurityCard('Antecedentes Judiciales', '📜', 'Revisamos registros nacionales para asegurar que cada experto tenga un historial limpio y confiable.')}
          ${renderSecurityCard('Verificación de Experiencia', '⭐', 'Contactamos referencias personales y revisamos fotos de trabajos reales antes de otorgar el sello Hommy.')}
        </div>
      </div>
    </section>

    <!-- Escrow System -->
    <section class="py-24 2xl:py-32 bg-background overflow-hidden">
      <div class="container">
        <div class="flex flex-col lg:flex-row items-center gap-20 2xl:gap-32">
          <div class="lg:w-1/2 relative">
             <div class="bg-white p-12 2xl:p-20 rounded-[60px] 2xl:rounded-[100px] shadow-xl border border-gray-100 relative z-10">
                <div class="w-20 h-20 2xl:w-32 2xl:h-32 bg-green-50 text-green-600 rounded-3xl 2xl:rounded-[48px] flex items-center justify-center text-4xl 2xl:text-6xl mb-8">🛡️</div>
                <h3 class="text-3xl 2xl:text-5xl font-bold text-secondary mb-6">Sistema de Pago Seguro (Escrow)</h3>
                <p class="text-lg 2xl:text-2xl text-secondary-light leading-relaxed mb-8">
                  Tu dinero nunca va directamente al profesional antes de empezar. Hommy retiene el pago en una cuenta de garantía segura y solo lo libera cuando confirmas que el trabajo se completó a tu entera satisfacción.
                </p>
                <div class="flex items-center space-x-4 p-4 2xl:p-8 bg-green-50 rounded-2xl 2xl:rounded-[40px]">
                  <div class="w-10 h-10 2xl:w-16 2xl:h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold 2xl:text-2xl">✓</div>
                  <span class="font-bold text-green-800 2xl:text-2xl">Cero riesgo de estafas</span>
                </div>
             </div>
             <!-- Decorative elements -->
             <div class="absolute -top-12 -left-12 w-64 h-64 2xl:w-96 2xl:h-96 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
          <div class="lg:w-1/2 space-y-12 2xl:space-y-20">
            <h2 class="text-4xl 2xl:text-6xl font-bold text-secondary">¿Cómo protegemos tu dinero?</h2>
            <div class="space-y-8 2xl:space-y-12">
               ${renderSimpleStep(1, 'Contratas y depositas', 'El dinero se reserva de forma segura.')}
               ${renderSimpleStep(2, 'El profesional trabaja', 'Tú tienes la tranquilidad de que el pago está listo.')}
               ${renderSimpleStep(3, 'Confirmas y liberamos', 'Solo con tu aprobación final enviamos el pago.')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Satisfaction Guarantee -->
    <section class="py-24 2xl:py-32 bg-white">
      <div class="container">
        <div class="bg-secondary rounded-[60px] 2xl:rounded-[100px] p-12 lg:p-24 2xl:p-32 text-white">
           <div class="max-w-4xl 2xl:max-w-6xl mx-auto text-center mb-20 2xl:mb-32">
              <h2 class="text-4xl lg:text-5xl 2xl:text-8xl font-bold mb-8">Garantía de Satisfacción Hommy</h2>
              <p class="text-xl 2xl:text-3xl text-gray-400">Si el trabajo no quedó bien, no estás solo. Nuestro equipo de mediación interviene para resolver cualquier inconveniente.</p>
           </div>
           <div class="grid grid-cols-1 md:grid-cols-3 gap-12 2xl:gap-20 text-center">
              <div>
                <div class="text-3xl 2xl:text-5xl mb-6">📢</div>
                <h4 class="text-xl 2xl:text-3xl font-bold mb-4">Reporte</h4>
                <p class="text-gray-400 text-sm 2xl:text-xl">Inicia una disputa desde la app en segundos.</p>
              </div>
              <div>
                <div class="text-3xl 2xl:text-5xl mb-6">🤝</div>
                <h4 class="text-xl 2xl:text-3xl font-bold mb-4">Mediación</h4>
                <p class="text-gray-400 text-sm 2xl:text-xl">Analizamos evidencias y fotos del servicio.</p>
              </div>
              <div>
                <div class="text-3xl 2xl:text-5xl mb-6">✨</div>
                <h4 class="text-xl 2xl:text-3xl font-bold mb-4">Resolución</h4>
                <p class="text-gray-400 text-sm 2xl:text-xl">Aseguramos que el trabajo se complete o te devolvemos el dinero.</p>
              </div>
           </div>
        </div>
      </div>
    </section>

    <!-- Data Protection -->
    <section class="py-24 2xl:py-32 bg-background">
      <div class="container text-center max-w-3xl 2xl:max-w-5xl">
        <h2 class="text-3xl 2xl:text-5xl font-bold text-secondary mb-12 2xl:mb-20">Seguridad Técnica de Clase Mundial</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-12">
          <div class="p-8 2xl:p-16 bg-white rounded-3xl 2xl:rounded-[60px] border border-gray-100 flex flex-col items-center">
             <div class="w-16 h-16 2xl:w-24 2xl:h-24 bg-blue-50 text-blue-600 rounded-2xl 2xl:rounded-[32px] flex items-center justify-center text-3xl 2xl:text-5xl mb-6">🔒</div>
             <h4 class="font-bold text-secondary 2xl:text-2xl mb-4">Cifrado SSL</h4>
             <p class="text-sm 2xl:text-xl text-secondary-light">Toda tu información viaja cifrada con estándares bancarios de 256 bits.</p>
          </div>
          <div class="p-8 2xl:p-16 bg-white rounded-3xl 2xl:rounded-[60px] border border-gray-100 flex flex-col items-center">
             <div class="w-16 h-16 2xl:w-24 2xl:h-24 bg-primary/10 text-primary rounded-2xl 2xl:rounded-[32px] flex items-center justify-center text-3xl 2xl:text-5xl mb-6">💳</div>
             <h4 class="font-bold text-secondary 2xl:text-2xl mb-4">Certificación PCI</h4>
             <p class="text-sm 2xl:text-xl text-secondary-light">No guardamos tus datos de tarjeta; usamos pasarelas de pago certificadas globalmente.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 2xl:py-32 bg-white">
      <div class="container">
        <div class="bg-primary rounded-[40px] 2xl:rounded-[80px] p-12 lg:p-20 2xl:p-32 text-center text-white relative overflow-hidden">
          <div class="relative z-10 max-w-2xl 2xl:max-w-4xl mx-auto">
            <h2 class="text-4xl 2xl:text-7xl font-bold mb-8">Tu hogar está en las mejores manos.</h2>
            <p class="text-xl 2xl:text-3xl mb-12 opacity-90">Únete a la comunidad más segura de servicios del hogar.</p>
            <a href="https://www.hommy.app/login" class="bg-white text-primary btn text-lg 2xl:text-2xl 2xl:px-12 2xl:py-6">Publicar Proyecto Seguro</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderSecurityCard(title: string, icon: string, desc: string) {
  return `
    <div class="p-10 2xl:p-16 rounded-[40px] 2xl:rounded-[80px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group text-center md:text-left">
      <div class="text-5xl 2xl:text-7xl mb-8 group-hover:scale-110 transition-transform origin-left">${icon}</div>
      <h3 class="text-xl 2xl:text-3xl font-bold text-secondary mb-4">${title}</h3>
      <p class="text-secondary-light 2xl:text-xl leading-relaxed">${desc}</p>
    </div>
  `;
}

function renderSimpleStep(num: number, title: string, desc: string) {
  return `
    <div class="flex items-start space-x-6 2xl:space-x-10">
      <div class="flex-shrink-0 w-10 h-10 2xl:w-16 2xl:h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold 2xl:text-2xl">
        ${num}
      </div>
      <div>
        <h4 class="text-xl 2xl:text-3xl font-bold text-secondary mb-2">${title}</h4>
        <p class="text-secondary-light 2xl:text-xl leading-relaxed">${desc}</p>
      </div>
    </div>
  `;
}

initSeguridad();
