(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function l(){const s=document.getElementById("header");if(!s)return;s.innerHTML=`
    <header class="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div class="container py-4 flex items-center justify-between">
        <!-- Logo -->
        <a href="./" class="flex items-center space-x-2">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
               class="h-14 lg:h-20 2xl:h-28 w-auto" 
               viewBox="0 0 1200.000000 1381.000000"
               preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1381.000000) scale(0.100000,-0.100000)"
               fill="#4F47B6" stroke="none">
              <path d="M3830 12846 c-407 -86 -716 -403 -786 -808 -14 -84 -16 -405 -17
              -3408 -1 -3070 1 -3321 16 -3401 52 -266 182 -476 387 -628 134 -100 280 -161
              450 -186 119 -19 171 -19 290 0 372 56 677 309 796 659 54 157 53 146 55 1248
              1 1119 1 1115 60 1293 92 276 293 505 545 621 130 61 210 77 374 78 161 0 229
              -12 356 -65 320 -133 564 -462 618 -834 11 -69 14 -327 15 -1116 2 -949 4
              -1034 20 -1116 63 -308 292 -587 580 -708 218 -92 449 -105 674 -40 340 98
              597 368 689 720 20 78 21 111 30 1380 5 756 5 2175 0 3390 l-9 2090 -21 80
              c-80 297 -265 526 -527 655 -122 59 -224 88 -350 99 -489 41 -918 -257 -1057
              -734 l-23 -80 -3 -1357 -2 -1358 -985 0 -985 0 0 1319 c0 1447 2 1402 -60
              1573 -86 237 -264 434 -495 548 -149 73 -229 92 -415 96 -105 2 -176 -1 -220
              -10z"/>
              <path d="M6410 6713 c-69 -25 -145 -107 -166 -178 -41 -142 17 -280 144 -342
              144 -70 319 -9 386 136 29 64 28 179 -2 237 -54 105 -132 155 -247 160 -47 3
              -85 -2 -115 -13z"/>
              <path d="M838 3207 c-62 -18 -93 -40 -126 -89 l-27 -42 0 -887 0 -887 30 -44
              c17 -23 51 -54 75 -68 40 -22 57 -25 155 -25 125 0 167 11 215 58 64 62 65 69
              68 425 l3 322 255 0 254 0 0 -314 c0 -207 4 -324 11 -347 19 -54 58 -100 107
              -121 56 -25 179 -34 254 -19 78 17 118 46 151 110 l27 55 0 856 0 856 -27 55
              c-33 64 -73 93 -151 110 -75 15 -198 6 -254 -19 -49 -21 -88 -67 -107 -121 -7
              -23 -11 -143 -11 -362 l0 -329 -254 0 -255 0 -3 338 c-3 368 -4 376 -64 436
              -16 16 -45 36 -64 44 -48 20 -203 25 -262 9z"/>
              <path d="M3190 2859 c-286 -74 -511 -313 -597 -635 -23 -87 -26 -118 -26 -254
              0 -136 3 -167 26 -255 64 -238 208 -437 401 -554 198 -119 468 -134 675 -36
              238 113 401 318 477 600 29 109 27 389 -4 505 -29 107 -105 266 -168 349 -94
              125 -270 240 -429 281 -103 26 -252 26 -355 -1z"/>
              <path d="M5288 2815 c-136 -27 -260 -110 -337 -226 l-41 -61 0 92 c0 93 0 93
              -34 125 -43 40 -100 55 -213 55 -116 0 -179 -28 -221 -98 l-27 -47 -2 -650 c0
              -357 3 -666 8 -686 14 -58 50 -102 104 -129 43 -21 63 -25 145 -25 129 1 186
              31 236 125 17 31 19 55 16 215 -2 99 0 307 4 461 l6 282 37 48 c52 69 126 105
              214 105 71 0 96 -9 140 -49 54 -51 57 -83 57 -574 0 -483 1 -490 53 -546 55
              -59 172 -85 277 -63 75 16 116 46 146 108 l26 52 -1 455 c-2 505 -5 480 66
              548 51 49 101 69 179 69 76 1 128 -22 161 -70 40 -60 46 -145 38 -568 -6 -344
              -5 -398 9 -447 32 -110 99 -151 246 -151 136 0 212 50 241 158 7 28 9 204 6
              556 -5 567 -7 589 -69 723 -36 79 -113 158 -183 188 -139 59 -340 48 -489 -27
              -64 -33 -149 -113 -197 -187 l-39 -58 -10 28 c-26 68 -64 132 -102 171 -94 96
              -269 134 -450 98z"/>
              <path d="M8038 2815 c-136 -27 -260 -110 -337 -226 l-41 -61 0 92 c0 93 0 93
              -34 125 -43 40 -100 55 -213 55 -116 0 -179 -28 -221 -98 l-27 -47 -2 -650 c0
              -357 3 -666 8 -686 14 -58 50 -102 104 -129 43 -21 63 -25 145 -25 129 1 186
              31 236 125 17 31 19 55 16 215 -2 99 0 307 4 461 l6 282 37 48 c52 69 126 105
              214 105 71 0 96 -9 140 -49 54 -51 57 -83 57 -574 0 -483 1 -490 53 -546 55
              -59 172 -85 277 -63 75 16 116 46 146 108 l26 52 -1 455 c-2 505 -5 480 66
              548 51 49 101 69 179 69 76 1 128 -22 161 -70 40 -60 46 -145 38 -568 -6 -344
              -5 -398 9 -447 32 -110 99 -151 246 -151 136 0 212 50 241 158 7 28 9 204 6
              551 -5 563 -8 596 -68 727 -37 80 -113 159 -184 189 -139 59 -340 48 -489 -27
              -64 -33 -149 -113 -197 -187 l-39 -58 -10 28 c-26 68 -64 132 -102 171 -94 96
              -269 134 -450 98z"/>
              <path d="M10076 2786 c-58 -22 -88 -47 -114 -98 l-23 -45 1 -532 c1 -595 4
              -634 65 -758 55 -111 148 -180 284 -209 257 -54 483 47 596 269 22 42 43 77
              48 77 22 0 -5 -225 -39 -330 -45 -135 -129 -221 -254 -259 -98 -29 -131 -33
              -310 -36 -129 -1 -174 -6 -205 -19 -82 -35 -108 -80 -108 -186 0 -112 40 -177
              131 -216 49 -20 234 -36 337 -29 520 36 795 285 881 795 14 79 17 205 19 745
              2 430 -1 665 -8 694 -13 57 -77 125 -132 140 -50 14 -168 14 -216 1 -59 -17
              -102 -52 -129 -105 l-24 -50 2 -315 c4 -476 -11 -594 -86 -674 -81 -86 -229
              -85 -291 2 -50 70 -51 84 -51 551 l0 437 -27 55 c-41 79 -88 102 -213 106 -65
              2 -107 -1 -134 -11z"/>
            </g>
          </svg>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8 2xl:space-x-12">
          <a href="como-funciona.html" class="text-sm 2xl:text-xl font-medium text-secondary hover:text-primary transition-colors">Cómo funciona</a>
          <a href="clientes.html" class="text-sm 2xl:text-xl font-medium text-secondary hover:text-primary transition-colors">Clientes</a>
          <a href="profesionales.html" class="text-sm 2xl:text-xl font-medium text-secondary hover:text-primary transition-colors">Profesionales</a>
          <a href="seguridad.html" class="text-sm 2xl:text-xl font-medium text-secondary hover:text-primary transition-colors">Seguridad</a>
          <a href="ayuda.html" class="text-sm 2xl:text-xl font-medium text-secondary hover:text-primary transition-colors">Ayuda</a>
          <a href="nosotros.html" class="text-sm 2xl:text-xl font-medium text-secondary hover:text-primary transition-colors">Nosotros</a>
          <a href="precios.html" class="text-sm 2xl:text-xl font-medium text-secondary hover:text-primary transition-colors">Precios</a>
        </nav>

        <!-- Auth Buttons & Mobile Toggle -->
        <div class="flex items-center space-x-3 md:space-x-4">
          <a href="https://www.hommy.app/login" class="btn btn-primary !py-2 !px-4 md:!px-6 !text-xs md:!text-sm lg:!text-sm 2xl:!text-lg 2xl:!px-10 2xl:!py-4">
            Login
          </a>

          <!-- Mobile Menu Toggle -->
          <button id="mobile-menu-toggle" class="lg:hidden p-2 text-secondary hover:text-primary focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl overflow-hidden transition-all duration-300 max-h-0">
        <div class="container py-6 flex flex-col space-y-4">
          <a href="como-funciona.html" class="text-lg font-medium text-secondary hover:text-primary transition-colors">Cómo funciona</a>
          <a href="clientes.html" class="text-lg font-medium text-secondary hover:text-primary transition-colors">Clientes</a>
          <a href="profesionales.html" class="text-lg font-medium text-secondary hover:text-primary transition-colors">Profesionales</a>
          <a href="seguridad.html" class="text-lg font-medium text-secondary hover:text-primary transition-colors">Seguridad</a>
          <a href="ayuda.html" class="text-lg font-medium text-secondary hover:text-primary transition-colors">Ayuda</a>
          <a href="nosotros.html" class="text-lg font-medium text-secondary hover:text-primary transition-colors">Nosotros</a>
          <a href="precios.html" class="text-lg font-medium text-secondary hover:text-primary transition-colors">Precios</a>
          <div class="pt-4 border-t border-gray-100 flex flex-col space-y-4">
            <a href="https://www.hommy.app/login" class="btn btn-primary w-full">Login</a>
          </div>
        </div>
      </div>
    </header>
  `;const a=document.getElementById("mobile-menu-toggle"),o=document.getElementById("mobile-menu");a&&o&&a.addEventListener("click",()=>{!o.classList.contains("hidden")?(o.style.maxHeight="0",setTimeout(()=>o.classList.add("hidden"),300)):(o.classList.remove("hidden"),setTimeout(()=>o.style.maxHeight="600px",10))}),window.addEventListener("scroll",()=>{const r=s.querySelector("header");r&&(window.scrollY>20?(r.classList.add("shadow-md"),r.classList.remove("py-2")):r.classList.remove("shadow-md"))})}function n(){const s=document.getElementById("footer");s&&(s.innerHTML=`
    <footer class="bg-secondary text-white pt-16 pb-8">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <!-- Logo & Description -->
          <div class="space-y-6">
            <img src="/assets/images/logo_footer.png" alt="Hommy" class="h-20 2xl:h-32">
            <p class="text-gray-400 text-sm 2xl:text-lg leading-relaxed">
              La plataforma líder para encontrar profesionales verificados para tu hogar. Fácil, seguro y confiable.
            </p>
            <div class="flex space-x-4">
              <!-- Social Icons (Placeholders) -->
              <a href="#" class="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center hover:bg-primary transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center hover:bg-primary transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.355 2.618 6.778 6.98 6.978 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.199-4.359-2.612-6.77-6.979-6.97C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zM18.406 3.994a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
              </a>
            </div>
          </div>

          <!-- Compañía -->
          <div>
            <h4 class="text-lg font-bold mb-6">Compañía</h4>
            <ul class="space-y-4">
              <li><a href="/nosotros.html" class="text-gray-400 hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="/como-funciona.html" class="text-gray-400 hover:text-primary transition-colors">Cómo funciona</a></li>
              <li><a href="/seguridad.html" class="text-gray-400 hover:text-primary transition-colors">Seguridad</a></li>
            </ul>
          </div>

          <!-- Servicios -->
          <div>
            <h4 class="text-lg font-bold mb-6">Servicios</h4>
            <ul class="space-y-4">
              <li><a href="/clientes.html" class="text-gray-400 hover:text-primary transition-colors">Clientes</a></li>
              <li><a href="/profesionales.html" class="text-gray-400 hover:text-primary transition-colors">Profesionales</a></li>
              <li><a href="/precios.html" class="text-gray-400 hover:text-primary transition-colors">Precio</a></li>
            </ul>
          </div>

          <!-- Soporte -->
          <div>
            <h4 class="text-lg font-bold mb-6">Soporte</h4>
            <ul class="space-y-4">
              <li><a href="/ayuda.html" class="text-gray-400 hover:text-primary transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" class="text-gray-400 hover:text-primary transition-colors">Términos de Servicio</a></li>
              <li><a href="#" class="text-gray-400 hover:text-primary transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-500 text-sm">© 2026 hommy. Todos los derechos reservados.</p>
          <div class="flex space-x-6 text-sm text-gray-500">
            <a href="#" class="hover:text-white transition-colors">Términos</a>
            <a href="#" class="hover:text-white transition-colors">Privacidad</a>
            <a href="#" class="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `)}console.log("Hommy Website Loaded");l();n();
