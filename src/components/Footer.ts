export function initFooter() {
  const footerContainer = document.getElementById('footer');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
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
  `;
}
