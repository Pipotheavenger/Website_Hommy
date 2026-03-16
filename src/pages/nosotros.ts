export function initNosotros() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Hero Section with Stats -->
    <section class="pt-32 pb-24 lg:pt-48 lg:pb-32 2xl:pt-64 2xl:pb-48 bg-primary text-white overflow-hidden">
      <div class="container">
        <div class="flex flex-col lg:flex-row items-center gap-16 2xl:gap-24">
          <div class="lg:w-1/2">
            <h1 class="text-5xl lg:text-7xl 2xl:text-9xl font-bold leading-tight mb-8">
              Cambiando la forma de <span class="text-white/90">cuidar tu hogar.</span>
            </h1>
            <p class="text-xl 2xl:text-3xl text-white/70 leading-relaxed mb-10">
              Hommy nació de una necesidad simple: encontrar a alguien de confianza para arreglar algo en casa no debería ser un dolor de cabeza. Hoy somos la plataforma líder que conecta miles de hogares con los mejores profesionales.
            </p>
            <div class="grid grid-cols-2 gap-8 2xl:gap-12">
              <div>
                <div class="text-4xl 2xl:text-6xl font-bold text-white mb-2">2023</div>
                <div class="text-sm 2xl:text-lg font-medium text-white/60 uppercase tracking-wider">Año de Fundación</div>
              </div>
              <div>
                <div class="text-4xl 2xl:text-6xl font-bold text-white mb-2">150+</div>
                <div class="text-sm 2xl:text-lg font-medium text-white/60 uppercase tracking-wider">Empleados Directos</div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 relative">
            <div class="w-full h-[600px] 2xl:h-[800px] bg-white/10 rounded-[60px] 2xl:rounded-[100px] overflow-hidden shadow-2xl relative z-10">
              <img src="/assets/images/nosotros.png" alt="Team working" class="w-full h-full object-cover">
            </div>
            <!-- Decorative blobs -->
            <div class="absolute -top-12 -right-12 w-64 h-64 2xl:w-96 2xl:h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-12 -left-12 w-64 h-64 2xl:w-96 2xl:h-96 bg-white/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-24 2xl:py-32 bg-background">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:gap-20">
          <div class="bg-white p-16 2xl:p-24 rounded-[48px] 2xl:rounded-[80px] border border-gray-100 shadow-sm text-center md:text-left">
            <div class="w-16 h-16 2xl:w-24 2xl:h-24 bg-primary/10 rounded-2xl 2xl:rounded-[32px] flex items-center justify-center text-3xl 2xl:text-5xl mb-8 mx-auto md:mx-0">🎯</div>
            <h2 class="text-3xl 2xl:text-5xl font-bold text-secondary mb-6">Nuestra Misión</h2>
            <p class="text-lg 2xl:text-2xl text-secondary-light leading-relaxed">
              Empoderar a los hogares y profesionales mediante una plataforma tecnológica transparente, segura y eficiente que transforme la industria de servicios domésticos en Latinoamérica.
            </p>
          </div>
          <div class="bg-secondary p-16 2xl:p-24 rounded-[48px] 2xl:rounded-[80px] text-white text-center md:text-left">
            <div class="w-16 h-16 2xl:w-24 2xl:h-24 bg-white/10 rounded-2xl 2xl:rounded-[32px] flex items-center justify-center text-3xl 2xl:text-5xl mb-8 mx-auto md:mx-0">✨</div>
            <h2 class="text-3xl 2xl:text-5xl font-bold mb-6">Nuestra Visión</h2>
            <p class="text-lg 2xl:text-2xl text-gray-400 leading-relaxed">
              Ser el estándar de oro en confianza para servicios del hogar, convirtiéndonos en la aplicación indispensable para el mantenimiento y mejora de cada vivienda en la región para el 2030.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-24 2xl:py-32 bg-white text-center">
      <div class="container">
        <h2 class="section-title text-center mb-20 2xl:mb-32">Nuestra Trayectoria</h2>
        <div class="max-w-4xl mx-auto 2xl:max-w-6xl space-y-12 2xl:space-y-20 relative">
          <!-- Central Line -->
          <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2"></div>
          
          ${renderTimelineItem('Enero 2023', 'El Comienzo', 'Idea original y primera ronda de inversión en Bogotá.', 'left')}
          ${renderTimelineItem('Junio 2023', 'Lanzamiento Beta', 'Primeros 100 profesionales verificados se unen a la plataforma.', 'right')}
          ${renderTimelineItem('Diciembre 2023', '10,000 Servicios', 'Alcanzamos nuestro primer gran hito de servicios completados con éxito.', 'left')}
          ${renderTimelineItem('Hoy', 'Expansión Nacional', 'Presencia en las principales ciudades y más de 50,000 usuarios.', 'right')}
        </div>
      </div>
    </section>

    <!-- Presence Map Placeholder -->
    <section class="py-24 2xl:py-32 bg-secondary overflow-hidden">
      <div class="container flex flex-col lg:flex-row items-center gap-16 2xl:gap-24">
        <div class="lg:w-1/2 text-white">
          <h2 class="text-4xl lg:text-5xl 2xl:text-7xl font-bold mb-8">Nacidos en <span class="text-primary">Bogotá</span> para el mundo.</h2>
          <p class="text-xl 2xl:text-3xl text-gray-400 leading-relaxed mb-8">
            Empezamos en el corazón de Colombia y hoy estamos expandiendo nuestras fronteras para llevar seguridad y confianza a cada hogar de la región.
          </p>
          <div class="space-y-4 2xl:space-y-8">
            <div class="flex items-center space-x-3 2xl:space-x-6">
              <span class="w-3 h-3 2xl:w-5 2xl:h-5 bg-primary rounded-full"></span>
              <span class="text-lg 2xl:text-2xl">Bogotá (Sede Central)</span>
            </div>
            <div class="flex items-center space-x-3 2xl:space-x-6">
              <span class="w-3 h-3 2xl:w-5 2xl:h-5 bg-gray-600 rounded-full"></span>
              <span class="text-lg 2xl:text-2xl text-gray-500">Medellín (Próximamente)</span>
            </div>
            <div class="flex items-center space-x-3 2xl:space-x-6">
              <span class="w-3 h-3 2xl:w-5 2xl:h-5 bg-gray-600 rounded-full"></span>
              <span class="text-lg 2xl:text-2xl text-gray-500">Cali (Próximamente)</span>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
           <div class="w-full h-[400px] 2xl:h-[600px] bg-white/5 rounded-[40px] 2xl:rounded-[80px] flex items-center justify-center relative border border-white/10">
              <!-- Simple SVG Map Placeholder -->
              <svg class="w-3/4 h-3/4 text-primary opacity-20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div class="w-6 h-6 2xl:w-10 2xl:h-10 bg-primary rounded-full animate-ping opacity-75"></div>
                <div class="absolute top-0 left-0 w-6 h-6 2xl:w-10 2xl:h-10 bg-primary rounded-full"></div>
              </div>
           </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 2xl:py-32">
      <div class="container">
        <div class="bg-primary rounded-[48px] 2xl:rounded-[100px] p-12 lg:p-24 2xl:p-32 text-center text-white relative overflow-hidden">
          <h2 class="text-4xl 2xl:text-6xl font-bold mb-8">¿Quieres ser parte de nuestra historia?</h2>
          <p class="text-xl 2xl:text-3xl mb-12 max-w-2xl 2xl:max-w-4xl mx-auto opacity-90">Tenemos a los mejores talentos y profesionales para revolucionar tu hogar.</p>
          <div class="flex flex-col sm:flex-row justify-center gap-6 2xl:gap-10">
            <a href="https://www.hommy.app/login" class="bg-white text-primary btn 2xl:text-2xl 2xl:px-12 2xl:py-6 hover:bg-gray-100">Inicia tu primer servicio</a>
            <a href="https://www.hommy.app/login" class="bg-transparent border-2 border-white btn 2xl:text-2xl 2xl:px-12 2xl:py-6 hover:bg-white/10">Unirme como profesional</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderTimelineItem(date: string, title: string, desc: string, side: 'left' | 'right') {
  const isLeft = side === 'left';
  return `
    <div class="relative flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row-reverse' : ''}">
      <!-- Marker -->
      <div class="absolute left-8 md:left-1/2 w-4 h-4 2xl:w-6 2xl:h-6 bg-primary rounded-full -translate-x-1/2 z-10 border-4 border-white"></div>
      
      <!-- Content -->
      <div class="w-full md:w-1/2 pl-16 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}">
        <div class="text-sm 2xl:text-xl font-bold text-primary mb-2 uppercase tracking-widest">${date}</div>
        <h4 class="text-2xl 2xl:text-4xl font-bold text-secondary mb-3">${title}</h4>
        <p class="text-secondary-light 2xl:text-2xl leading-relaxed">${desc}</p>
      </div>
    </div>
  `;
}

initNosotros();
