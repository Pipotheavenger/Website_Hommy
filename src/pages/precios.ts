export function initPrecios() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Hero Header -->
    <section class="pt-32 pb-16 lg:pt-48 lg:pb-24 2xl:pt-64 2xl:pb-32 bg-white text-center">
      <div class="container">
        <h1 class="text-5xl lg:text-7xl 2xl:text-9xl font-bold text-secondary mb-8 leading-tight">
          Precios claros, <span class="text-primary">sin sorpresas.</span>
        </h1>
        <p class="text-xl 2xl:text-3xl text-secondary-light max-w-2xl 2xl:max-w-4xl mx-auto leading-relaxed">
          En Hommy creemos en la transparencia total. Publicar proyectos es gratis y los profesionales solo pagan por el valor que reciben.
        </p>
      </div>
    </section>

    <!-- Client vs Pro Cards -->
    <section class="pb-24 2xl:pb-32 bg-white text-center md:text-left">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:gap-20">
          <!-- Card Para Clientes -->
          <div class="bg-background rounded-[60px] 2xl:rounded-[100px] p-12 lg:p-20 2xl:p-32 border border-gray-100 shadow-sm relative overflow-hidden group">
            <div class="relative z-10">
              <div class="inline-block px-4 py-2 2xl:px-6 2xl:py-3 rounded-full bg-blue-100 text-blue-600 font-bold text-xs 2xl:text-sm uppercase tracking-widest mb-8">Para Dueños de Hogar</div>
              <h2 class="text-4xl 2xl:text-6xl font-bold text-secondary mb-6">Gratis para siempre.</h2>
              <p class="text-lg 2xl:text-2xl text-secondary-light mb-12">Como cliente, nunca pagarás por usar nuestra plataforma para buscar expertos.</p>
              <ul class="space-y-6 2xl:space-y-10 mb-12">
                ${renderPriceFeature('Publicación de proyectos ilimitada', true)}
                ${renderPriceFeature('Recibe múltiples presupuestos', true)}
                ${renderPriceFeature('Acceso a profesionales verificados', true)}
                ${renderPriceFeature('Soporte y garantía Hommy', true)}
              </ul>
              <a href="https://www.hommy.app/login" class="btn btn-primary w-full text-lg 2xl:text-2xl 2xl:py-6 shadow-xl">Publicar mi primer proyecto</a>
            </div>
            <!-- Decorative icon -->
            <div class="absolute -bottom-10 -right-10 text-[200px] 2xl:text-[300px] opacity-[0.03] group-hover:scale-110 transition-transform duration-700 pointer-events-none">🏠</div>
          </div>

          <!-- Card Para Profesionales -->
          <div class="bg-secondary rounded-[60px] 2xl:rounded-[100px] p-12 lg:p-20 2xl:p-32 text-white relative overflow-hidden group">
            <div class="relative z-10">
              <div class="inline-block px-4 py-2 2xl:px-6 2xl:py-3 rounded-full bg-primary/20 text-primary-light font-bold text-xs 2xl:text-sm uppercase tracking-widest mb-8">Para Profesionales</div>
              <h2 class="text-4xl 2xl:text-6xl font-bold mb-6">Paga solo por ganar.</h2>
              <p class="text-lg 2xl:text-2xl text-gray-400 mb-12">Unirte a la red es gratis. Solo aplicamos una pequeña comisión cuando el trabajo se completa con éxito.</p>
              <ul class="space-y-6 2xl:space-y-10 mb-12">
                ${renderPriceFeature('Sin cuotas fijas mensuales', false)}
                ${renderPriceFeature('Perfiles de alto impacto visual', false)}
                ${renderPriceFeature('Herramientas de gestión Hommy Pro', false)}
                ${renderPriceFeature('Comisión justa por trabajo finalizado', false)}
              </ul>
              <a href="/profesionales.html" class="btn btn-primary w-full text-lg 2xl:text-2xl 2xl:py-6 shadow-xl">Unirme como Profesional</a>
            </div>
            <!-- Decorative icon -->
            <div class="absolute -bottom-10 -right-10 text-[200px] 2xl:text-[300px] opacity-[0.05] group-hover:scale-110 transition-transform duration-700 pointer-events-none">🛠️</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="py-24 2xl:py-32 bg-background text-center">
      <div class="container">
        <div class="mb-16 2xl:mb-24">
          <h2 class="section-title">¿Por qué Hommy?</h2>
          <p class="section-subtitle">Ventajas frente al mercado tradicional</p>
        </div>

        <!-- Mobile View (< 560px) -->
        <div class="block min-[560px]:hidden space-y-4 max-w-sm mx-auto">
          <div class="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
            <div class="space-y-6">
              ${renderMobileComparisonItem('🛡️', 'Seguridad:', '100% Verificados', 'Tradicional: Riesgo / Manual')}
              ${renderMobileComparisonItem('🔒', 'Pagos:', 'Protección Escrow', 'Tradicional: Depósito directo')}
              ${renderMobileComparisonItem('⚖️', 'Legal:', 'Mediación Incluida', 'Tradicional: Sin respaldo')}
              ${renderMobileComparisonItem('💵', 'Publicar:', 'Sin Costo Fijo', 'Tradicional: Pago por aviso')}
              ${renderMobileComparisonItem('🎧', 'Soporte:', '24/7 Humano', 'Tradicional: Solo email/bots')}
            </div>
          </div>
          <a href="https://www.hommy.app/login" class="btn btn-primary w-full py-5 rounded-3xl text-lg font-bold shadow-lg shadow-primary/30 mt-8">
            Empezar Ahora
          </a>
        </div>

        <!-- Desktop View (>= 560px) -->
        <div class="hidden min-[560px]:block max-w-4xl 2xl:max-w-6xl mx-auto bg-white rounded-3xl 2xl:rounded-[60px] shadow-xl overflow-hidden border border-gray-100">
          <div class="overflow-x-auto scrollbar-hide">
            <table class="w-full text-left min-w-[500px]">
              <thead class="bg-background border-b border-gray-100 text-center">
                <tr>
                  <th class="p-4 md:p-8 2xl:p-12 text-xs md:text-sm 2xl:text-lg font-bold text-secondary uppercase tracking-widest text-left">Característica</th>
                  <th class="p-4 md:p-8 2xl:p-12 text-xs md:text-sm 2xl:text-lg font-bold text-primary uppercase tracking-widest">Hommy</th>
                  <th class="p-4 md:p-8 2xl:p-12 text-xs md:text-sm 2xl:text-lg font-bold text-gray-400 uppercase tracking-widest">Tradicional</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 text-secondary">
                ${renderTableRow('Verificación de antecedentes', '100% Verificados', 'No verificados')}
                ${renderTableRow('Sistema de Pago Seguro', 'Protección Escrow', 'Pago directo riesgoso')}
                ${renderTableRow('Garantía de Satisfacción', 'Mediación incluida', 'Sin respaldo')}
                ${renderTableRow('Costo por publicar', 'Gratis', 'A veces pago')}
                ${renderTableRow('Atención al cliente', '24/7 Humano', 'Solo correo/Automático')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section for Prices -->
    <section class="py-24 2xl:py-32 bg-white">
      <div class="container max-w-3xl 2xl:max-w-5xl text-center">
        <h2 class="text-3xl 2xl:text-5xl font-bold mb-12 2xl:mb-20 text-secondary">Preguntas frecuentes sobre pagos</h2>
        <div class="space-y-8 2xl:space-y-12 text-left">
          <div>
            <h4 class="font-bold 2xl:text-2xl text-secondary mb-2">¿Cómo se calcula la comisión para profesionales?</h4>
            <p class="text-secondary-light 2xl:text-xl">Dependiendo de la categoría y el monto total del proyecto, la comisión varía entre el 10% y el 15%. Se descuenta automáticamente al liberar el pago.</p>
          </div>
          <div>
            <h4 class="font-bold 2xl:text-2xl text-secondary mb-2">¿Hay costos por retirar mi dinero como profesional?</h4>
            <p class="text-secondary-light 2xl:text-xl">No, transferir tus ganancias a tu cuenta bancaria es totalmente gratuito y se procesa en máximo 24 horas hábiles.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 2xl:py-32 text-center">
      <div class="container">
        <div class="bg-primary rounded-[40px] 2xl:rounded-[80px] p-12 lg:p-20 2xl:p-32 text-white relative overflow-hidden">
          <h2 class="text-4xl 2xl:text-7xl font-bold mb-8">Empieza a usar Hommy hoy.</h2>
          <p class="text-xl 2xl:text-3xl mb-12 opacity-90">Únete a la revolución de los servicios para el hogar.</p>
          <div class="flex flex-col sm:flex-row justify-center gap-4 2xl:gap-8">
             <a href="https://www.hommy.app/login" class="bg-white text-primary btn 2xl:text-2xl 2xl:px-12 2xl:py-6">Soy Cliente</a>
             <a href="https://www.hommy.app/login" class="bg-transparent border-2 border-white btn 2xl:text-2xl 2xl:px-12 2xl:py-6 hover:bg-white/10">Soy Profesional</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderPriceFeature(text: string, isLight: boolean) {
  return `
    <li class="flex items-center space-x-4 2xl:space-x-6">
      <div class="flex-shrink-0 w-6 h-6 2xl:w-10 2xl:h-10 rounded-full ${isLight ? 'bg-primary/10 text-primary' : 'bg-white/10 text-white'} flex items-center justify-center">
        <svg class="w-4 h-4 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <span class="font-medium 2xl:text-xl ${isLight ? 'text-secondary' : 'text-white/80'}">${text}</span>
    </li>
  `;
}

function renderTableRow(label: string, hommyValue: string, tradValue: string) {
  return `
    <tr>
      <td class="p-4 md:p-8 2xl:p-12 font-bold text-xs md:text-sm 2xl:text-xl">${label}</td>
      <td class="p-4 md:p-8 2xl:p-12 text-center">
        <span class="bg-primary/10 text-primary font-bold px-3 py-1.5 md:px-4 md:py-2 2xl:px-8 2xl:py-4 rounded-full text-[10px] md:text-xs 2xl:text-lg inline-block">
          ${hommyValue}
        </span>
      </td>
      <td class="p-4 md:p-8 2xl:p-12 text-center text-gray-400 text-[10px] md:text-sm 2xl:text-lg">${tradValue}</td>
    </tr>
  `;
}

function renderMobileComparisonItem(icon: string, label: string, hommyValue: string, tradValue: string) {
  return `
    <div class="flex items-start gap-4">
      <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
        ${icon}
      </div>
      <div class="flex-grow text-left">
        <div class="flex items-center justify-between">
          <span class="font-bold text-secondary text-lg">${label}</span>
          <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
          </div>
        </div>
        <div class="text-primary font-bold text-lg">${hommyValue}</div>
        <div class="text-gray-400 text-sm mt-0.5">${tradValue}</div>
      </div>
    </div>
  `;
}

initPrecios();
