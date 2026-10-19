import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-sumi-950 text-rice-200 py-14">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          <!-- Marca -->
          <div class="md:col-span-2">
            <div class="flex items-center gap-2.5 mb-4">
              <span class="w-10 h-10 rounded-full bg-hanbok-600 flex items-center justify-center text-white font-serif text-xl">
                한
              </span>
              <div class="leading-tight">
                <div class="font-serif text-lg text-rice-50">
                  Han<span class="text-hanbok-400">Bap</span>
                </div>
                <div class="text-[10px] tracking-[0.2em] uppercase text-rice-300">Comida Coreana</div>
              </div>
            </div>
            <p class="text-rice-300/80 leading-relaxed max-w-md text-sm">
              Franquicia de comida coreana tradicional en Ciudad de México. Bibimbap, bulgogi,
              kimchi y postres auténticos frente al Forum Buenavista.
            </p>
          </div>

          <!-- Links -->
          <div>
            <h4 class="text-rice-50 font-medium mb-4">Navegación</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#hero" class="hover:text-hanbok-400 transition-colors">Inicio</a></li>
              <li><a href="#menu" class="hover:text-hanbok-400 transition-colors">Menú</a></li>
              <li><a href="#nosotros" class="hover:text-hanbok-400 transition-colors">Nosotros</a></li>
              <li><a href="#reserva" class="hover:text-hanbok-400 transition-colors">Reservar</a></li>
            </ul>
          </div>

          <!-- Contacto -->
          <div>
            <h4 class="text-rice-50 font-medium mb-4">Contacto</h4>
            <ul class="space-y-2 text-sm text-rice-300/80">
              <li>Frente al Forum Buenavista</li>
              <li>Ciudad de México, México</li>
              <li>12:00 pm — 11:00 pm</li>
              <li>+52 55 0000 0000</li>
            </ul>
          </div>
        </div>

        <div class="border-t border-sumi-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-rice-400">
          <p>© 2026 HanBap. Comida coreana tradicional.</p>
          <p class="flex items-center gap-2">
            <span class="text-hanbok-400">한식</span> · Hecho con tradición en CDMX
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {}
