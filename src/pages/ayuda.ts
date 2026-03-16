export function initAyuda() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Search Banner -->
    <section class="bg-primary pt-32 pb-20 lg:pt-48 lg:pb-32 2xl:pt-64 2xl:pb-48 text-center text-white relative overflow-hidden">
      <div class="container relative z-10">
        <h1 class="text-4xl lg:text-6xl 2xl:text-8xl font-bold mb-8">¿Cómo podemos ayudarte?</h1>
        <div class="max-w-2xl mx-auto 2xl:max-w-4xl relative">
          <input type="text" placeholder="Busca un tema, pregunta o artículo..." 
            class="w-full py-5 px-8 pr-16 2xl:py-8 2xl:px-12 2xl:pr-24 rounded-2xl 2xl:rounded-[32px] text-secondary shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/20 text-lg 2xl:text-2xl">
          <button class="absolute right-4 top-1/2 -translate-y-1/2 2xl:right-6 bg-primary p-3 2xl:p-5 rounded-xl 2xl:rounded-2xl text-white hover:bg-primary-dark transition-colors">
            <svg class="w-6 h-6 2xl:w-8 2xl:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </div>
      </div>
      <!-- Decorative circles -->
      <div class="absolute top-0 left-0 w-64 h-64 2xl:w-96 2xl:h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 2xl:w-[500px] 2xl:h-[500px] bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
    </section>

    <!-- Categories Grid -->
    <section class="py-24 2xl:py-32 bg-white">
      <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-12">
          ${renderCategoryCard('Primeros pasos', '🚀', 'Aprende a crear tu cuenta y publicar tu primer proyecto.')}
          ${renderCategoryCard('Pagos y Facturación', '💳', 'Información sobre métodos de pago, facturas y el sistema Escrow.')}
          ${renderCategoryCard('Seguridad y Privacidad', '🛡️', 'Cómo protegemos tus datos y verificamos a los profesionales.')}
          ${renderCategoryCard('Para Clientes', '👤', 'Todo lo que necesitas saber como dueño de un hogar.')}
          ${renderCategoryCard('Para Profesionales', '🛠️', 'Consejos y reglas para destacar como experto Hommy.')}
          ${renderCategoryCard('App Móvil', '📱', 'Guías sobre el uso de nuestra aplicación iOS y Android.')}
        </div>
      </div>
    </section>

    <!-- FAQs Accordion -->
    <section class="py-24 2xl:py-32 bg-background">
      <div class="container max-w-4xl 2xl:max-w-6xl">
        <h2 class="section-title text-center mb-16 2xl:mb-24">Preguntas Frecuentes</h2>
        <div class="space-y-4 2xl:space-y-8">
          ${renderFaqItem('¿Es gratis publicar un proyecto?', 'Sí, publicar un proyecto es totalmente gratuito. Solo pagas cuando contratas a un profesional y el pago se mantiene en garantía.')}
          ${renderFaqItem('¿Cómo verifican a los profesionales?', 'Realizamos una validación exhaustiva que incluye identidad, antecedentes judiciales y referencias de trabajos anteriores.')}
          ${renderFaqItem('¿Qué pasa si no estoy conforme con el trabajo?', 'Nuestro sistema de garantía interviene para mediar y asegurar que recibas el servicio por el que pagaste.')}
          ${renderFaqItem('¿Cómo funciona el pago en garantía?', 'Tu dinero se reserva en nuestra plataforma segura y solo se libera al profesional cuando confirmas la finalización exitosa.')}
        </div>
      </div>
    </section>

    <!-- Contact Support -->
    <section class="py-24 2xl:py-32 bg-white">
      <div class="container">
        <div class="bg-secondary rounded-[40px] 2xl:rounded-[80px] p-12 lg:p-20 2xl:p-32 text-white flex flex-col lg:flex-row items-center gap-16 2xl:gap-24">
          <div class="lg:w-1/2">
            <h2 class="text-4xl 2xl:text-6xl font-bold mb-6">¿Aún tienes dudas?</h2>
            <p class="text-xl 2xl:text-3xl text-gray-400 mb-8 leading-relaxed">Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier problema o pregunta.</p>
            <div class="flex flex-col sm:flex-row gap-4 2xl:gap-8">
              <a href="#" class="btn btn-primary 2xl:text-2xl 2xl:px-12 2xl:py-6">Chatear con soporte</a>
              <a href="#" class="btn btn-outline 2xl:text-2xl 2xl:px-12 2xl:py-6 !border-white !text-white hover:!bg-white hover:!text-secondary">Enviar Email</a>
            </div>
          </div>
          <div class="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:gap-10 w-full">
            <div class="p-8 2xl:p-12 bg-white/5 rounded-3xl 2xl:rounded-[48px] border border-white/10">
              <div class="text-primary text-3xl 2xl:text-5xl mb-4 2xl:mb-8">💬</div>
              <h4 class="font-bold 2xl:text-2xl mb-2 2xl:mb-4">Chat en vivo</h4>
              <p class="text-sm 2xl:text-xl text-gray-400">Tiempo de respuesta: &lt; 5 min</p>
            </div>
            <div class="p-8 2xl:p-12 bg-white/5 rounded-3xl 2xl:rounded-[48px] border border-white/10">
              <div class="text-primary text-3xl 2xl:text-5xl mb-4 2xl:mb-8">📞</div>
              <h4 class="font-bold 2xl:text-2xl mb-2 2xl:mb-4">Llamada</h4>
              <p class="text-sm 2xl:text-xl text-gray-400">Lunes a Viernes, 8am - 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // FAQ Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    header?.addEventListener('click', () => {
      const content = item.querySelector('.faq-content') as HTMLElement;
      const icon = item.querySelector('.faq-icon') as HTMLElement;
      const isOpen = item.classList.contains('active');

      // Close all others
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          (other.querySelector('.faq-content') as HTMLElement).style.maxHeight = '0';
          (other.querySelector('.faq-icon') as HTMLElement).style.transform = 'rotate(0deg)';
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        content.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

function renderCategoryCard(title: string, icon: string, desc: string) {
  return `
    <div class="p-10 2xl:p-16 rounded-[32px] 2xl:rounded-[60px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group cursor-pointer text-center md:text-left">
      <div class="text-5xl 2xl:text-7xl mb-8 group-hover:scale-110 transition-transform origin-left">${icon}</div>
      <h3 class="text-xl 2xl:text-3xl font-bold text-secondary mb-4">${title}</h3>
      <p class="text-secondary-light 2xl:text-xl leading-relaxed">${desc}</p>
      <div class="mt-6 flex items-center justify-center md:justify-start text-primary font-bold 2xl:text-2xl">
        Leer artículos <span class="ml-2 group-hover:ml-4 transition-all">→</span>
      </div>
    </div>
  `;
}

function renderFaqItem(question: string, answer: string) {
  return `
    <div class="faq-item bg-white rounded-2xl 2xl:rounded-[32px] border border-gray-100 overflow-hidden transition-all duration-300">
      <button class="faq-header w-full p-6 2xl:p-10 text-left flex items-center justify-between focus:outline-none">
        <span class="text-lg 2xl:text-2xl font-bold text-secondary">${question}</span>
        <svg class="faq-icon w-6 h-6 2xl:w-10 2xl:h-10 text-primary transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
        <div class="p-6 pt-0 2xl:p-10 2xl:pt-0 text-secondary-light 2xl:text-xl leading-relaxed">
          ${answer}
        </div>
      </div>
    </div>
  `;
}

initAyuda();
