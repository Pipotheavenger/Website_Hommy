import"./main-Dbfd22MI.js";function r(){const e=document.getElementById("app");e&&(e.innerHTML=`
    <!-- Hero Section -->
    <section class="relative pt-24 pb-20 lg:pt-48 lg:pb-32 2xl:pt-64 2xl:pb-48 overflow-hidden">
      <div class="container relative z-10">
        <div class="max-w-3xl 2xl:max-w-5xl">
          <h1 class="text-5xl lg:text-7xl 2xl:text-9xl font-bold text-secondary leading-tight mb-6">
            Todo lo que tu hogar necesita, <span class="text-primary">en un solo lugar.</span>
          </h1>
          <p class="text-xl 2xl:text-3xl text-secondary-light mb-10 leading-relaxed">
            Conecta con profesionales verificados para reparaciones, limpieza, mudanzas y más. Rápido, seguro y con garantía Hommy.
          </p>

          <!-- Imagen para Móvil/Tablet (< 1024px) -->
          <div class="lg:hidden mb-12">
          <div class="relative mx-auto w-full max-w-[320px] md:max-w-[500px] aspect-[4/5] bg-primary/5 rounded-[40px] flex items-center justify-center p-6 md:p-10 transition-all duration-300">
               <div class="w-full h-full bg-gray-100 rounded-3xl overflow-hidden shadow-xl rotate-3">
                  <picture>
                    <source media="(min-width: 1430px)" srcset="assets/images/01_header.png">
                    <img src="assets/images/01_header_movil_v2.png" alt="Home maintenance" class="w-full h-full object-cover">
                  </picture>
               </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center md:justify-center lg:justify-start sm:items-start">
            <a href="https://www.hommy.app/login" class="btn btn-primary w-full sm:w-auto md:text-2xl md:px-12 md:py-5 text-lg 2xl:text-2xl 2xl:px-12 2xl:py-6 text-center shadow-lg hover:shadow-primary/30 transition-all">Publicar Proyecto</a>
            <a href="como-funciona.html" class="btn btn-outline w-full sm:w-auto md:text-2xl md:px-12 md:py-5 text-lg 2xl:text-2xl 2xl:px-12 2xl:py-6 text-center hover:bg-primary/5 transition-all">Cómo funciona</a>
          </div>
        </div>
      </div>
      <!-- Hero Background Element -->
      <div class="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <div class="w-full h-full bg-primary/5 rounded-l-[100px] 2xl:rounded-l-[200px] flex items-center justify-center">
           <div class="w-4/5 h-4/5 bg-gray-200 rounded-3xl 2xl:rounded-[60px] overflow-hidden shadow-2xl rotate-3">
              <picture>
                <source media="(min-width: 1430px)" srcset="assets/images/01_header.png">
                <img src="assets/images/01_header_movil_v2.png" alt="Home maintenance" class="w-full h-full object-cover">
              </picture>
           </div>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="bg-primary py-12 2xl:py-20">
      <div class="container">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl 2xl:text-6xl font-bold text-white mb-2">+100</div>
            <div class="text-white/60 text-sm 2xl:text-lg">Usuarios Felices</div>
          </div>
          <div class="text-center">
            <div class="text-4xl 2xl:text-6xl font-bold text-white mb-2">100%</div>
            <div class="text-white/60 text-sm 2xl:text-lg">Satisfacción</div>
          </div>
          <div class="text-center">
            <div class="text-4xl 2xl:text-6xl font-bold text-white mb-2">4.8</div>
            <div class="text-white/60 text-sm 2xl:text-lg">Rating Promedio</div>
          </div>
          <div class="text-center">
            <div class="text-4xl 2xl:text-6xl font-bold text-white mb-2">24/7</div>
            <div class="text-white/60 text-sm 2xl:text-lg">Soporte Humano</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-24 2xl:py-32 bg-white">
      <div class="container text-center mb-16 2xl:mb-24">
        <h2 class="section-title">Nuestros Servicios</h2>
        <p class="section-subtitle max-w-2xl mx-auto">
          Encuentra al experto ideal para cada rincón de tu casa.
        </p>
      </div>
      <div class="container">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 2xl:gap-10">
          ${t("Fontanería","🚿","bg-blue-50 text-blue-600")}
          ${t("Electricidad","⚡","bg-yellow-50 text-yellow-600")}
          ${t("Pintura","🎨","bg-primary/10 text-primary")}
          ${t("Jardinería","🌿","bg-green-50 text-green-600")}
          ${t("Limpieza","🧹","bg-pink-50 text-pink-600")}
          ${t("Mudanzas","📦","bg-orange-50 text-orange-600")}
        </div>
      </div>
    </section>

    <!-- How it Works (3 steps) -->
    <section class="py-24 2xl:py-32 bg-background">
      <div class="container text-center mb-16 2xl:mb-24">
        <h2 class="section-title">Contratar es muy fácil</h2>
        <p class="section-subtitle">Tu tranquilidad a solo unos clics de distancia.</p>
      </div>
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 2xl:gap-20">
          ${i(1,"Publica tu necesidad","Describe lo que necesitas y recibe presupuestos en minutos.")}
          ${i(2,"Compara y elige","Revisa perfiles, fotos y calificaciones de profesionales interesados.")}
          ${i(3,"Paga con seguridad","El pago se libera solo cuando confirmas que el trabajo terminó.")}
        </div>
      </div>
    </section>

    <!-- Why Hommy -->
    <section class="py-24 2xl:py-32 bg-white overflow-hidden">
      <div class="container">
        <div class="flex flex-col lg:flex-row items-center gap-16 2xl:gap-24">
          <div class="lg:w-1/2">
            <div class="relative">
              <div class="w-full h-[500px] 2xl:h-[700px] bg-gray-200 rounded-3xl 2xl:rounded-[60px] overflow-hidden">
                <img src="assets/images/02_mainMid.png" alt="Happy family" class="w-full h-full object-cover">
              </div>
              <div class="absolute -bottom-6 -right-6 bg-primary p-8 2xl:p-12 rounded-2xl 2xl:rounded-[40px] shadow-xl text-white max-w-xs 2xl:max-w-md">
                <p class="text-lg 2xl:text-2xl font-medium italic">"Hommy cambió la forma en que cuido mi hogar. Ahora todo es más simple."</p>
                <p class="mt-4 2xl:mt-6 font-bold 2xl:text-xl">- Laura Méndez</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 space-y-8 2xl:space-y-12">
            <h2 class="section-title">¿Por qué elegir Hommy?</h2>
            <div class="space-y-6 2xl:space-y-10">
              ${s("Profesionales 100% Verificados","Validamos antecedentes y experiencia de cada experto.")}
              ${s("Garantía Hommy","Si algo no queda bien, te ayudamos a resolverlo.")}
              ${s("Pagos Protegidos","Usamos sistema Escrow para proteger tu dinero.")}
              ${s("Sin Costos Ocultos","Presupuestos transparentes antes de empezar.")}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 2xl:py-32">
      <div class="container">
        <div class="bg-primary rounded-[40px] 2xl:rounded-[80px] p-12 lg:p-20 2xl:p-32 text-center text-white relative overflow-hidden">
          <div class="relative z-10 max-w-3xl mx-auto 2xl:max-w-5xl">
            <h2 class="text-4xl lg:text-6xl 2xl:text-8xl font-bold mb-8">¿Listo para mejorar tu hogar?</h2>
            <p class="text-xl 2xl:text-3xl mb-12 opacity-90">Únete a miles de personas que ya confían en los expertos de Hommy.</p>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="https://www.hommy.app/login" class="bg-white text-primary btn text-lg 2xl:text-2xl 2xl:px-12 2xl:py-6 hover:bg-gray-100">Publicar Proyecto Ahora</a>
              <a href="clientes.html" class="bg-transparent border-2 border-white btn text-lg 2xl:text-2xl 2xl:px-12 2xl:py-6 hover:bg-white/10">Soy Cliente</a>
              <a href="profesionales.html" class="bg-transparent border-2 border-white btn text-lg 2xl:text-2xl 2xl:px-12 2xl:py-6 hover:bg-white/10">Soy Profesional</a>
            </div>
          </div>
          <!-- Decorative Background -->
          <div class="absolute top-0 left-0 w-full h-full bg-white/5 rotate-12 scale-150 pointer-events-none"></div>
        </div>
      </div>
    </section>
  `)}function t(e,l,a){return`
    <div class="group p-8 2xl:p-12 rounded-3xl 2xl:rounded-[48px] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
      <div class="w-16 h-16 2xl:w-24 2xl:h-24 ${a} rounded-2xl 2xl:rounded-3xl flex items-center justify-center text-3xl 2xl:text-5xl mx-auto mb-6 group-hover:scale-110 transition-transform">
        ${l}
      </div>
      <h3 class="font-bold text-secondary 2xl:text-2xl">${e}</h3>
    </div>
  `}function i(e,l,a){return`
    <div class="relative p-8 2xl:p-12 rounded-3xl 2xl:rounded-[48px] bg-white border border-gray-100 shadow-sm">
      <div class="absolute -top-6 left-8 2xl:-top-10 2xl:left-12 w-12 h-12 2xl:w-20 2xl:h-20 bg-primary text-white rounded-xl 2xl:rounded-3xl flex items-center justify-center font-bold text-xl 2xl:text-3xl shadow-lg">
        ${e}
      </div>
      <h3 class="text-xl 2xl:text-3xl font-bold text-secondary mb-4 mt-4 2xl:mt-8">${l}</h3>
      <p class="text-secondary-light 2xl:text-xl leading-relaxed">${a}</p>
    </div>
  `}function s(e,l){return`
    <div class="flex items-start space-x-4 2xl:space-x-8">
      <div class="flex-shrink-0 w-6 h-6 2xl:w-10 2xl:h-10 rounded-full bg-green-100 flex items-center justify-center mt-1">
        <svg class="w-4 h-4 2xl:w-6 2xl:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <div>
        <h4 class="font-bold text-secondary 2xl:text-2xl">${e}</h4>
        <p class="text-secondary-light text-sm 2xl:text-lg leading-relaxed">${l}</p>
      </div>
    </div>
  `}r();
