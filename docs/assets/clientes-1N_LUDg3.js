import"./main-BiKZ0cGa.js";function p(){const t=document.getElementById("app");if(!t)return;t.innerHTML=`
    <!-- Hero Section -->
    <section class="pt-32 pb-24 lg:pt-48 lg:pb-32 2xl:pt-64 2xl:pb-48 bg-white relative overflow-hidden">
      <div class="container relative z-10">
        <div class="max-w-3xl 2xl:max-w-5xl">
          <div class="inline-block px-4 py-2 2xl:px-6 2xl:py-3 rounded-full bg-primary/10 text-primary font-bold text-sm 2xl:text-lg mb-8 uppercase tracking-widest">
            Para dueños de hogar
          </div>
          <h1 class="text-5xl lg:text-7xl 2xl:text-9xl font-bold text-secondary mb-8 leading-tight">
            Encuentra el profesional perfecto <span class="text-primary text-opacity-80">para tu proyecto.</span>
          </h1>
          <p class="text-xl 2xl:text-3xl text-secondary-light mb-12 leading-relaxed">
            Publica lo que necesitas, compara presupuestos de expertos verificados y elige al mejor. Todo con el respaldo y seguridad de Hommy.
          </p>
          <a href="https://www.hommy.app/login" class="btn btn-primary text-xl 2xl:text-3xl px-12 py-5 2xl:px-20 2xl:py-8 shadow-2xl hover:scale-105 transition-transform">Publicar Proyecto Ahora</a>
        </div>
      </div>
      <!-- Hero Image Placeholder -->
      <div class="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <div class="w-full h-full bg-primary/5 rounded-l-[120px] 2xl:rounded-l-[200px] p-24 2xl:p-32">
           <div class="w-full h-full bg-white rounded-[60px] 2xl:rounded-[100px] shadow-2xl overflow-hidden relative border border-gray-100">
              <img src="/assets/images/03_headerClientes.png" alt="Maintenance worker" class="w-full h-full object-cover">
           </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Hommy (3 benefits) -->
    <section class="py-24 2xl:py-32 bg-background text-center">
      <div class="container mb-20 2xl:mb-32">
        <h2 class="section-title">¿Por qué usar Hommy?</h2>
        <p class="section-subtitle">Hacemos que el mantenimiento de tu hogar sea simple y libre de estrés.</p>
      </div>
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 2xl:gap-20">
          ${r("Profesionales Verificados","🛡️","Validamos identidad y antecedentes de cada experto para tu tranquilidad.")}
          ${r("Compara Presupuestos","⚖️","Recibe múltiples ofertas para un mismo trabajo y elige la que mejor se adapte a ti.")}
          ${r("Garantía de Satisfacción","✨","Solo liberamos el pago cuando confirmas que el trabajo quedó perfecto.")}
        </div>
      </div>
    </section>

    <!-- How it Works (6 steps) -->
    <section class="py-24 2xl:py-32 bg-white overflow-hidden text-center">
      <div class="container">
        <h2 class="section-title mb-20 2xl:mb-32">Cómo funciona para ti</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 2xl:gap-24 relative">
          <!-- Step Connector Line (Desktop) -->
          <div class="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-primary/5 -translate-y-1/2"></div>
          
          ${l(1,"Publica tu proyecto","Describe lo que necesitas reparar o mejorar.")}
          ${l(2,"Recibe presupuestos","Expertos interesados te enviarán sus ofertas.")}
          ${l(3,"Revisa perfiles","Mira fotos de trabajos anteriores y calificaciones.")}
          ${l(4,"Selecciona al mejor","Elige al profesional que más te dé confianza.")}
          ${l(5,"Coordina detalles","Habla por el chat seguro y define fecha y hora.")}
          ${l(6,"Paga con seguridad","El dinero se libera solo cuando el trabajo termina.")}
        </div>
      </div>
    </section>

    <!-- App Interface Mockup -->
    <section class="py-24 2xl:py-32 bg-secondary">
      <div class="container flex flex-col lg:flex-row items-center gap-20 2xl:gap-32">
        <div class="lg:w-1/2 text-white text-center md:text-left">
           <h2 class="text-4xl 2xl:text-6xl font-bold mb-8">Todo el control en tu mano.</h2>
           <p class="text-xl 2xl:text-3xl text-gray-400 mb-12">Nuestra aplicación está diseñada para que gestiones tus proyectos con facilidad, desde la publicación hasta la calificación final.</p>
           <div class="space-y-6 2xl:space-y-10">
              ${n("Chat seguro con los profesionales")}
              ${n("Seguimiento del estado de tu proyecto")}
              ${n("Historial de pagos y facturas")}
           </div>
        </div>
        <div class="lg:w-1/2 flex justify-center">
           <div class="relative w-full max-w-2xl 2xl:max-w-4xl">
              <img src="/assets/images/04_midsecond.png" 
                   alt="App Hommy" 
                   class="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(79,71,182,0.3)]">
           </div>
        </div>
      </div>
    </section>

    <!-- FAQs for Clients -->
    <section class="py-24 2xl:py-32 bg-background">
      <div class="container max-w-4xl 2xl:max-w-6xl">
        <h2 class="section-title text-center mb-16 2xl:mb-24">Preguntas Frecuentes</h2>
        <div class="space-y-4 2xl:space-y-8">
          ${c("¿Cómo sé que el profesional es de confianza?","Cada profesional en Hommy pasa por un proceso de verificación de identidad, antecedentes y referencias. Además, puedes ver sus calificaciones reales de otros clientes.")}
          ${c("¿Tengo que pagar antes de que vengan?","Sí, el pago se realiza a través de la plataforma para activar el sistema Escrow. El dinero se mantiene seguro en Hommy y solo se le entrega al profesional cuando tú confirmas que el trabajo terminó.")}
          ${c("¿Qué incluye la garantía Hommy?","Nuestra garantía cubre problemas de calidad en la ejecución del servicio y mediación en caso de disputas entre el cliente y el profesional.")}
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 2xl:py-32 bg-white text-center">
      <div class="container">
        <div class="bg-primary p-16 lg:p-32 rounded-[80px] 2xl:rounded-[120px] text-white relative overflow-hidden">
          <div class="relative z-10">
            <h2 class="text-4xl lg:text-6xl 2xl:text-8xl font-bold mb-10">¿Empezamos tu próximo proyecto?</h2>
            <a href="https://www.hommy.app/login" class="btn bg-white text-primary text-xl 2xl:text-3xl px-12 py-5 2xl:px-20 2xl:py-8 shadow-xl hover:bg-gray-100 transition-colors">Publicar Proyecto</a>
          </div>
          <!-- Decorative circle -->
          <div class="absolute top-0 right-0 w-96 h-96 2xl:w-[600px] 2xl:h-[600px] bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  `;const a=document.querySelectorAll(".faq-item");a.forEach(e=>{const o=e.querySelector(".faq-header");o==null||o.addEventListener("click",()=>{const i=e.querySelector(".faq-content"),d=e.querySelector(".faq-icon"),x=e.classList.contains("active");a.forEach(s=>{s!==e&&(s.classList.remove("active"),s.querySelector(".faq-content").style.maxHeight="0",s.querySelector(".faq-icon").style.transform="rotate(0deg)")}),x?(e.classList.remove("active"),i.style.maxHeight="0",d.style.transform="rotate(0deg)"):(e.classList.add("active"),i.style.maxHeight=i.scrollHeight+"px",d.style.transform="rotate(180deg)")})})}function r(t,a,e){return`
    <div class="p-10 2xl:p-16 rounded-[40px] 2xl:rounded-[60px] bg-white border border-gray-100 shadow-sm text-center">
      <div class="text-5xl 2xl:text-7xl mb-8">${a}</div>
      <h3 class="text-xl 2xl:text-3xl font-bold text-secondary mb-4">${t}</h3>
      <p class="text-secondary-light 2xl:text-xl leading-relaxed">${e}</p>
    </div>
  `}function l(t,a,e){return`
    <div class="relative z-10 flex flex-col items-center text-center">
      <div class="w-16 h-16 2xl:w-24 2xl:h-24 bg-white border-4 border-primary text-primary rounded-full flex items-center justify-center font-bold text-2xl 2xl:text-4xl mb-8 shadow-xl">
        ${t}
      </div>
      <h4 class="text-xl 2xl:text-3xl font-bold text-secondary mb-4 px-4">${a}</h4>
      <p class="text-secondary-light text-sm 2xl:text-xl px-4 leading-relaxed">${e}</p>
    </div>
  `}function n(t,a){return`
    <div class="flex items-center space-x-4 2xl:space-x-8">
      <div class="w-6 h-6 2xl:w-10 2xl:h-10 rounded-full bg-primary/20 flex items-center justify-center">
        <svg class="w-4 h-4 2xl:w-6 2xl:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <span class="text-lg 2xl:text-2xl text-white">${t}</span>
    </div>
  `}function c(t,a){return`
    <div class="faq-item bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-300">
      <button class="faq-header w-full p-8 2xl:p-12 text-left flex items-center justify-between focus:outline-none">
        <span class="text-lg 2xl:text-3xl font-bold text-secondary">${t}</span>
        <svg class="faq-icon w-6 h-6 2xl:w-10 2xl:h-10 text-primary transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
        <div class="p-8 2xl:p-12 pt-0 text-secondary-light 2xl:text-xl leading-relaxed">
          ${a}
        </div>
      </div>
    </div>
  `}p();
