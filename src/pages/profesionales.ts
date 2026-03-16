export function initProfesionales() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 2xl:pt-64 2xl:pb-48 bg-primary text-white overflow-hidden">
      <div class="container relative z-10">
        <div class="max-w-3xl 2xl:max-w-5xl">
          <div class="inline-block px-4 py-2 2xl:px-6 2xl:py-3 rounded-full bg-primary/20 text-primary-light font-bold text-sm 2xl:text-lg mb-6 uppercase tracking-widest border border-primary/30">
            Únete a la red #1 de expertos
          </div>
          <h1 class="text-5xl lg:text-7xl 2xl:text-9xl font-bold leading-tight mb-8">
            Multiplica tus ingresos trabajando <span class="text-white opacity-90">a tu ritmo.</span>
          </h1>
          <p class="text-xl 2xl:text-3xl text-white/70 mb-10 leading-relaxed">
            Hommy te conecta con cientos de clientes en tu zona. Sin jefes, sin horarios fijos y con pagos 100% garantizados por nuestra plataforma.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="https://www.hommy.app/login" class="btn btn-outline !border-white !text-white hover:!bg-white hover:!text-secondary text-lg 2xl:text-2xl 2xl:px-12 2xl:py-6">Regístrate como Profesional</a>
            <a href="#beneficios" class="btn btn-outline !border-white !text-white hover:!bg-white hover:!text-secondary text-lg 2xl:text-2xl 2xl:px-12 2xl:py-6">Ver beneficios</a>
          </div>
        </div>
      </div>
      <!-- Hero Image Overlay -->
      <div class="absolute top-0 right-0 w-1/2 h-full hidden lg:block opacity-80">
        <img src="/assets/images/refactor_trabajadores.png" alt="Professional working" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
      </div>
    </section>

    <!-- Key Benefits -->
    <section id="beneficios" class="py-24 2xl:py-32 bg-white text-center">
      <div class="container mb-20 2xl:mb-32">
        <h2 class="section-title">¿Por qué ser un Experto Hommy?</h2>
        <p class="section-subtitle">Diseñamos la plataforma pensando en tu crecimiento y seguridad.</p>
      </div>
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 2xl:gap-20">
          ${renderBenefitCard('Clientes Verificados', '👤', 'Accede a una base constante de clientes que ya han sido validados por nuestro sistema.')}
          ${renderBenefitCard('Pagos Garantizados', '💰', 'Olvídate de cobrar. El cliente deposita antes de empezar y tú recibes tu dinero al terminar.')}
          ${renderBenefitCard('Libertad Total', '📅', 'Tú decides qué trabajos aceptar, en qué zonas trabajar y en qué horarios estar disponible.')}
        </div>
      </div>
    </section>

    <!-- Registration Steps -->
    <section class="py-24 2xl:py-32 bg-background">
      <div class="container">
        <div class="bg-white rounded-[60px] 2xl:rounded-[100px] p-12 lg:p-24 2xl:p-32 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-20 2xl:gap-32">
          <div class="lg:w-1/2">
            <h2 class="text-4xl 2xl:text-6xl font-bold text-secondary mb-12 2xl:mb-20">Tres pasos para empezar a ganar</h2>
            <div class="space-y-12 2xl:space-y-20">
              ${renderStepItem(1, 'Crea tu perfil profesional', 'Sube tus fotos, describe tu experiencia y selecciona tus categorías de trabajo.')}
              ${renderStepItem(2, 'Verifica tu identidad', 'Sube tus documentos para nuestro proceso de seguridad y obtén tu sello de verificado.')}
              ${renderStepItem(3, 'Recibe ofertas y trabaja', 'Te avisaremos cuando haya proyectos cerca de ti. Envía tu presupuesto y ¡listo!')}
            </div>
          </div>
          <div class="lg:w-1/2">
            <div class="relative">
               <div class="w-full h-[500px] 2xl:h-[700px] bg-secondary rounded-[40px] 2xl:rounded-[80px] overflow-hidden p-8 flex items-end">
                  <div class="w-full bg-white/10 backdrop-blur-md rounded-2xl 2xl:rounded-[40px] p-6 2xl:p-10 border border-white/20">
                    <div class="flex items-center space-x-4 2xl:space-x-8 mb-4 2xl:mb-8">
                      <div class="w-12 h-12 2xl:w-20 2xl:h-20 bg-primary rounded-full flex items-center justify-center font-bold 2xl:text-3xl">JD</div>
                      <div>
                        <div class="font-bold text-white 2xl:text-2xl">Juan Delgado</div>
                        <div class="text-xs 2xl:text-lg text-primary-light uppercase">Electricista Verificado</div>
                      </div>
                    </div>
                    <div class="text-sm 2xl:text-xl text-gray-300 italic">"Desde que uso Hommy mis ingresos subieron un 40%. La app es muy fácil de usar."</div>
                  </div>
               </div>
               <!-- Badge -->
               <div class="absolute -top-6 -right-6 2xl:-top-12 2xl:-right-12 bg-white p-6 2xl:p-10 rounded-2xl 2xl:rounded-[40px] shadow-xl flex items-center space-x-4 2xl:space-x-8">
                  <div class="w-12 h-12 2xl:w-20 2xl:h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl 2xl:text-4xl">✓</div>
                  <div>
                    <div class="text-xs 2xl:text-lg text-gray-500 uppercase font-bold tracking-wider">Status</div>
                    <div class="font-bold text-secondary 2xl:text-2xl">Perfil Verificado</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Verification Requirements -->
    <section class="py-24 2xl:py-32 bg-white text-center">
      <div class="container mb-16 2xl:mb-24">
        <h2 class="section-title">Requisitos de Verificación</h2>
        <p class="section-subtitle max-w-2xl mx-auto">Mantenemos la calidad de la red solicitando estos documentos a cada nuevo experto.</p>
      </div>
      <div class="container max-w-4xl 2xl:max-w-6xl text-left">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-10">
          ${renderReqItem('🆔', 'Cédula de Ciudadanía')}
          ${renderReqItem('📜', 'Antecedentes Judiciales')}
          ${renderReqItem('📸', 'Fotos de trabajos previos')}
          ${renderReqItem('☎️', '2 Referencias personales')}
        </div>
      </div>
    </section>

    <!-- Earnings Comparison -->
    <section class="py-24 2xl:py-32 bg-secondary">
      <div class="container">
        <div class="text-center mb-20 2xl:mb-32 text-white">
          <h2 class="text-4xl 2xl:text-6xl font-bold mb-4">Gana lo que te mereces</h2>
          <p class="text-gray-400 2xl:text-2xl">Comparativa de ingresos promedio semanales.</p>
        </div>
        <div class="max-w-4xl 2xl:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 2xl:gap-20">
          <div class="bg-white/5 p-12 2xl:p-20 rounded-[40px] 2xl:rounded-[80px] border border-white/10 relative overflow-hidden">
            <div class="relative z-10">
              <h3 class="text-xl 2xl:text-3xl font-bold text-white mb-2">Directorios Tradicionales</h3>
              <div class="text-4xl 2xl:text-6xl font-bold text-gray-500 mb-6">$300.000 <span class="text-sm 2xl:text-xl font-normal">/ sem</span></div>
              <ul class="space-y-4 2xl:space-y-8 text-sm 2xl:text-xl text-gray-400">
                <li class="flex items-center">❌ Clientes no filtrados</li>
                <li class="flex items-center">❌ Tienes que perseguir el pago</li>
                <li class="flex items-center">❌ Pagar por publicidad sin garantía</li>
              </ul>
            </div>
          </div>
          <div class="bg-primary p-12 2xl:p-20 rounded-[40px] 2xl:rounded-[80px] relative overflow-hidden shadow-2xl scale-110">
            <div class="relative z-10">
              <h3 class="text-xl 2xl:text-3xl font-bold text-white mb-2">Con Hommy</h3>
              <div class="text-4xl 2xl:text-6xl font-bold text-white mb-6">$850.000+ <span class="text-sm 2xl:text-xl font-normal">/ sem</span></div>
              <ul class="space-y-4 2xl:space-y-8 text-sm 2xl:text-xl text-white/80">
                <li class="flex items-center">✅ Clientes listos para contratar</li>
                <li class="flex items-center">✅ Pago asegurado antes de ir</li>
                <li class="flex items-center">✅ Soporte y respaldo 24/7</li>
              </ul>
            </div>
            <!-- Badge -->
            <div class="absolute top-4 right-4 2xl:top-8 2xl:right-8 bg-white text-primary text-[10px] 2xl:text-sm font-bold px-3 py-1 2xl:px-6 2xl:py-2 rounded-full uppercase tracking-widest">Recomendado</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile App -->
    <section class="py-24 2xl:py-32 bg-white">
      <div class="container">
        <div class="flex flex-col lg:flex-row items-center gap-20 2xl:gap-32">
          <div class="lg:w-1/2 space-y-8 2xl:space-y-12">
            <h2 class="section-title">Tu oficina en tu bolsillo</h2>
            <p class="text-xl 2xl:text-3xl text-secondary-light leading-relaxed">
              Registrate en nuestra plataforma y gestiona tus presupuestos, chatea con clientes y revisa tus ganancias en tiempo real.
            </p>
            <div class="flex flex-col sm:flex-row gap-6">
              <a href="https://www.hommy.app/login" class="btn btn-primary 2xl:text-2xl 2xl:px-12 2xl:py-6 shadow-xl">Registrate Ya</a>
            </div>
          </div>
          <div class="lg:w-1/2 flex justify-center">
            <div class="w-72 h-[600px] 2xl:w-96 2xl:h-[800px] bg-secondary rounded-[3rem] 2xl:rounded-[5rem] border-8 2xl:border-[16px] border-gray-800 shadow-2xl relative overflow-hidden">
               <!-- Mockup App Content -->
               <div class="absolute inset-0 bg-white p-6 2xl:p-10 pt-12 2xl:pt-20">
                  <div class="flex justify-between items-center mb-8 2xl:mb-12">
                    <div class="font-bold text-secondary 2xl:text-2xl">Nuevos Proyectos</div>
                    <div class="w-8 h-8 2xl:w-12 2xl:h-12 bg-gray-100 rounded-full"></div>
                  </div>
                  <div class="space-y-4 2xl:space-y-8">
                    <div class="p-4 2xl:p-8 bg-background rounded-xl 2xl:rounded-3xl border border-gray-100">
                      <div class="text-xs 2xl:text-lg text-primary font-bold mb-1">ELECTRICIDAD</div>
                      <div class="font-bold text-sm 2xl:text-2xl mb-2">Cortocircuito en cocina</div>
                      <div class="text-xs 2xl:text-lg text-gray-500">📍 Chapinero • hace 5 min</div>
                    </div>
                    <div class="p-4 2xl:p-8 bg-background rounded-xl 2xl:rounded-3xl border border-gray-100 opacity-60">
                      <div class="text-xs 2xl:text-lg text-primary font-bold mb-1">FONTANERÍA</div>
                      <div class="font-bold text-sm 2xl:text-2xl mb-2">Gotera en lavamanos</div>
                      <div class="text-xs 2xl:text-lg text-gray-500">📍 Cedritos • hace 20 min</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBenefitCard(title: string, icon: string, desc: string) {
  return `
    <div class="p-10 2xl:p-16 rounded-[32px] 2xl:rounded-[60px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 text-center group">
      <div class="text-5xl 2xl:text-7xl mb-8 group-hover:scale-110 transition-transform">${icon}</div>
      <h3 class="text-xl 2xl:text-3xl font-bold text-secondary mb-4">${title}</h3>
      <p class="text-secondary-light 2xl:text-xl leading-relaxed">${desc}</p>
    </div>
  `;
}

function renderStepItem(num: number, title: string, desc: string) {
  return `
    <div class="flex items-start space-x-6 2xl:space-x-10">
      <div class="flex-shrink-0 w-12 h-12 2xl:w-20 2xl:h-20 bg-primary/10 text-primary rounded-2xl 2xl:rounded-[32px] flex items-center justify-center font-bold text-xl 2xl:text-3xl">
        ${num}
      </div>
      <div>
        <h4 class="text-xl 2xl:text-3xl font-bold text-secondary mb-2">${title}</h4>
        <p class="text-secondary-light 2xl:text-xl leading-relaxed">${desc}</p>
      </div>
    </div>
  `;
}

function renderReqItem(icon: string, text: string) {
  return `
    <div class="flex items-center p-6 2xl:p-10 bg-background rounded-2xl 2xl:rounded-[40px] border border-gray-100">
      <div class="w-12 h-12 2xl:w-20 2xl:h-20 bg-white rounded-xl 2xl:rounded-3xl flex items-center justify-center text-2xl 2xl:text-4xl mr-4 2xl:mr-8 shadow-sm">
        ${icon}
      </div>
      <span class="font-bold text-secondary 2xl:text-2xl">${text}</span>
    </div>
  `;
}

initProfesionales();
