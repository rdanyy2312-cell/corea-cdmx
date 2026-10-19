import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Imagen de fondo -->
      <div class="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5773968/pexels-photo-5773968.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
          alt="Comida coreana"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-sumi-950/85 via-sumi-900/70 to-sumi-900/30"></div>
      </div>

      <!-- Contenido -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
        <div class="max-w-2xl animate-fade-up">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hanbok-600/20 border border-hanbok-400/40 backdrop-blur-sm mb-6">
            <span class="w-2 h-2 rounded-full bg-rice-300 animate-pulse"></span>
            <span class="text-rice-100 text-xs tracking-[0.2em] uppercase font-medium">Franquicia Coreana</span>
          </div>

          <h1 class="font-serif text-5xl md:text-7xl text-rice-50 leading-[1.1] mb-6">
            Auténtica <span class="text-hanbok-400">comida</span><br />coreana en CDMX
          </h1>

          <p class="text-rice-100/90 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Bibimbap, bulgogi, kimchi y postres tradicionales preparados con recetas
            transmitidas por generaciones. Un viaje de sabores directamente desde Corea.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="#reserva"
              class="inline-flex items-center justify-center px-8 py-4 rounded-full bg-hanbok-600 text-white font-medium hover:bg-hanbok-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Reservar Mesa
            </a>
            <a
              href="#menu"
              class="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-rice-50 font-medium hover:bg-white/20 transition-all"
            >
              Ver Menú
            </a>
          </div>

          <!-- Datos rápidos -->
          <div class="grid grid-cols-3 gap-6 mt-14 max-w-lg">
            <div>
              <div class="text-rice-200 text-xs uppercase tracking-wider mb-1">Horario</div>
              <div class="text-rice-50 font-medium">12pm - 11pm</div>
            </div>
            <div>
              <div class="text-rice-200 text-xs uppercase tracking-wider mb-1">Ubicación</div>
              <div class="text-rice-50 font-medium">Forum Buenavista</div>
            </div>
            <div>
              <div class="text-rice-200 text-xs uppercase tracking-wider mb-1">Especialidad</div>
              <div class="text-rice-50 font-medium">Bibimbap & BBQ</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Indicador scroll -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div class="w-6 h-10 rounded-full border-2 border-rice-200/50 flex justify-center pt-2">
          <div class="w-1 h-2 rounded-full bg-rice-200/70 animate-bounce"></div>
        </div>
      </div>
    </section>
  `,
})
export class Hero {}
