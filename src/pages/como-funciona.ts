export function initComoFunciona() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Hero Header -->
    <section class="pt-32 pb-16 lg:pt-48 lg:pb-24 2xl:pt-64 2xl:pb-32 bg-primary text-center">
      <div class="container">
        <h1 class="text-5xl lg:text-7xl 2xl:text-9xl font-bold text-white mb-12 leading-tight">
          Todo el poder para <br><span class="text-white/90">transformar tu hogar.</span>
        </h1>
        
        <!-- Toggle Selector -->
        <div class="flex justify-center mb-16 2xl:mb-24">
          <div class="bg-white/20 p-2 2xl:p-4 rounded-2xl 2xl:rounded-[32px] flex items-center shadow-inner">
            <button id="toggle-cliente" class="px-8 py-3 2xl:px-12 2xl:py-5 rounded-xl 2xl:rounded-2xl font-bold transition-all duration-300 bg-white text-primary shadow-sm 2xl:text-2xl">Soy Cliente</button>
            <button id="toggle-profesional" class="px-8 py-3 2xl:px-12 2xl:py-5 rounded-xl 2xl:rounded-2xl font-bold transition-all duration-300 text-white/60 hover:text-white 2xl:text-2xl">Soy Profesional</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content Container -->
    <div id="content-container">
      ${renderClienteContent()}
    </div>

    <!-- Escrow System Section -->
    <section class="py-24 2xl:py-32 bg-white overflow-hidden">
      <div class="container">
        <div class="flex flex-col lg:flex-row items-center gap-20 2xl:gap-32">
          <div class="lg:w-1/2 text-center md:text-left">
             <div class="inline-block p-4 2xl:p-8 bg-primary/10 rounded-2xl 2xl:rounded-[40px] mb-8">
                <svg class="w-12 h-12 2xl:w-20 2xl:h-20 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04zM12 21a11.955 11.955 0 01-8.618-3.04A11.952 11.952 0 0012 21.235c3.356 0 6.36-1.379 8.618-3.606A11.955 11.955 0 0112 21z"></path></svg>
             </div>
             <h2 class="text-4xl 2xl:text-6xl font-bold text-secondary mb-8">Sistema de Pago Seguro (Escrow)</h2>
             <p class="text-xl 2xl:text-3xl text-secondary-light leading-relaxed mb-8">
                Hommy actúa como un intermediario de confianza. Cuando contratas, tu dinero se guarda de forma segura en una cuenta de garantía. Solo lo liberamos al profesional cuando tú confirmas que el trabajo se ha realizado correctamente.
             </p>
             <div class="space-y-6 2xl:space-y-10">
                <div class="flex items-center space-x-4 2xl:space-x-8 p-6 2xl:p-10 bg-green-50 rounded-3xl 2xl:rounded-[48px] border border-green-100">
                   <div class="w-10 h-10 2xl:w-16 2xl:h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold 2xl:text-2xl">✓</div>
                   <div>
                      <h4 class="font-bold text-green-900 2xl:text-2xl">Protección total para tu dinero</h4>
                      <p class="text-green-700 text-sm 2xl:text-lg">Cero riesgo de trabajos inconclusos.</p>
                   </div>
                </div>
             </div>
          </div>
          <div class="lg:w-1/2 flex justify-center">
             <!-- Mockup Recibo -->
             <div class="w-full max-w-md 2xl:max-w-xl bg-white rounded-[40px] 2xl:rounded-[60px] shadow-2xl border border-gray-100 p-10 2xl:p-16">
                <div class="flex justify-between items-center mb-10 2xl:mb-16 border-b border-gray-100 pb-6 2xl:pb-10">
                   <img src="/assets/images/logo.png" alt="Hommy" class="h-12 2xl:h-16">
                   <span class="text-xs 2xl:text-lg text-secondary-light font-medium uppercase tracking-widest">Resumen de Pago</span>
                </div>
                <div class="space-y-6 2xl:space-y-10 mb-10 2xl:mb-16">
                   <div class="flex justify-between text-sm 2xl:text-xl">
                      <span class="text-secondary-light">Servicio: Pintura Fachada</span>
                      <span class="font-bold">$400.000</span>
                   </div>
                   <div class="flex justify-between text-sm 2xl:text-xl">
                      <span class="text-secondary-light">IVA (19%)</span>
                      <span class="font-bold">$76.000</span>
                   </div>
                   <div class="flex justify-between text-sm 2xl:text-xl">
                      <span class="text-secondary-light">Tasa de Protección Hommy</span>
                      <span class="font-bold">$12.800</span>
                   </div>
                   <div class="flex justify-between text-xl 2xl:text-3xl font-bold pt-6 2xl:pt-10 border-t border-gray-100">
                      <span class="text-secondary">TOTAL EN GARANTÍA</span>
                      <span class="text-primary">$488.800</span>
                   </div>
                </div>
                <div class="bg-background rounded-2xl 2xl:rounded-[32px] p-6 2xl:p-10 text-center">
                   <div class="text-[10px] 2xl:text-sm text-gray-400 uppercase tracking-widest mb-2 2xl:mb-4 font-bold">Estado del depósito</div>
                   <div class="text-green-600 font-bold flex items-center justify-center space-x-2 2xl:space-x-4 2xl:text-2xl">
                      <span class="w-2 h-2 2xl:w-4 2xl:h-4 bg-green-600 rounded-full animate-pulse"></span>
                      <span>RESGUARDADO SEGURO</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final Adaptativo -->
    <section class="py-24 2xl:py-32 bg-background">
      <div class="container text-center">
         <div id="cta-dynamic" class="max-w-3xl mx-auto 2xl:max-w-5xl">
            <h2 class="text-4xl 2xl:text-7xl font-bold text-secondary mb-8">¿Listo para transformar tu hogar?</h2>
            <p class="text-xl 2xl:text-3xl text-secondary-light mb-12">Únete a la plataforma más segura y eficiente del país.</p>
            <a href="https://www.hommy.app/login" class="btn btn-primary text-xl 2xl:text-3xl px-12 py-5 2xl:px-20 2xl:py-8 shadow-xl">Publicar mi Proyecto</a>
         </div>
      </div>
    </section>
  `;

  // Toggle Logic
  const btnCliente = document.getElementById('toggle-cliente');
  const btnPro = document.getElementById('toggle-profesional');
  const container = document.getElementById('content-container');
  const ctaDynamic = document.getElementById('cta-dynamic');

  btnCliente?.addEventListener('click', () => {
    setActive(btnCliente, btnPro);
    if (container) container.innerHTML = renderClienteContent();
    if (ctaDynamic) ctaDynamic.innerHTML = `
      <h2 class="text-4xl font-bold text-secondary mb-8">¿Listo para transformar tu hogar?</h2>
      <p class="text-xl text-secondary-light mb-12">Únete a la plataforma más segura y eficiente del país.</p>
      <a href="https://www.hommy.app/login" class="btn btn-primary text-xl px-12 py-5">Publicar mi Proyecto</a>
    `;
  });

  btnPro?.addEventListener('click', () => {
    setActive(btnPro, btnCliente);
    if (container) container.innerHTML = renderProContent();
    if (ctaDynamic) ctaDynamic.innerHTML = `
      <h2 class="text-4xl font-bold text-secondary mb-8">¿Listo para ganar más dinero?</h2>
      <p class="text-xl text-secondary-light mb-12">Accede a cientos de clientes verificados en tu ciudad.</p>
      <a href="https://www.hommy.app/login" class="btn btn-primary text-xl px-12 py-5">Unirme como Profesional</a>
    `;
  });

  function setActive(active: HTMLElement | null, inactive: HTMLElement | null) {
    active?.classList.add('bg-white', 'text-primary', 'shadow-sm');
    active?.classList.remove('text-white/60', 'hover:text-white');
    inactive?.classList.remove('bg-white', 'text-primary', 'shadow-sm');
    inactive?.classList.add('text-white/60', 'hover:text-white');
  }
}

function renderClienteContent() {
  return `
    <section class="py-24 bg-background">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
           ${renderStepCard(1, 'Publica tu proyecto', 'Describe lo que necesitas, añade fotos y define tu ubicación.', '🎨')}
           ${renderStepCard(2, 'Recibe y compara', 'Obtén presupuestos de expertos verificados en minutos.', '⚖️')}
           ${renderStepCard(3, 'Contrata con Escrow', 'El dinero se reserva de forma segura antes de empezar.', '🛡️')}
           ${renderStepCard(4, 'Libera y califica', 'Envía el pago solo al terminar y califica al profesional.', '✨')}
        </div>
      </div>
    </section>
  `;
}

function renderProContent() {
  return `
    <section class="py-24 bg-background">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
           ${renderStepCard(1, 'Crea tu perfil Pro', 'Registra tus servicios, zona y fotos de trabajos.', '🛠️')}
           ${renderStepCard(2, 'Postúlate a proyectos', 'Envía presupuestos a clientes que te interesen.', '📨')}
           ${renderStepCard(3, 'Asegura tu pago', 'Hommy garantiza el dinero antes de que te desplaces.', '💰')}
           ${renderStepCard(4, 'Cobra y crece', 'Recibe tu dinero en 24h y gana sellos de calidad.', '📈')}
        </div>
      </div>
    </section>
  `;
}

function renderStepCard(num: number, title: string, desc: string, icon: string) {
  return `
    <div class="bg-white p-10 2xl:p-16 rounded-[40px] 2xl:rounded-[60px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group text-center md:text-left">
       <div class="text-4xl 2xl:text-6xl mb-6 grayscale group-hover:grayscale-0 transition-all">${icon}</div>
       <div class="text-xs 2xl:text-lg font-bold text-primary mb-2 uppercase tracking-widest">Paso ${num}</div>
       <h3 class="text-xl 2xl:text-3xl font-bold text-secondary mb-4">${title}</h3>
       <p class="text-sm 2xl:text-xl text-secondary-light leading-relaxed">${desc}</p>
    </div>
  `;
}

initComoFunciona();
