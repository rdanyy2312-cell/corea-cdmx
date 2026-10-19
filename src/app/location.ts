import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  template: `
    <section id="ubicacion" class="py-24 bg-sumi-950 text-rice-50 relative overflow-hidden">
      <!-- Patrón decorativo -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-10 left-10 w-40 h-40 border-4 border-hanbok-400 rounded-full"></div>
        <div class="absolute bottom-20 right-20 w-60 h-60 border-4 border-dong-400 rounded-full"></div>
        <div class="absolute top-1/2 left-1/3 w-32 h-32 border-4 border-rice-300 rotate-45"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 relative">
        <div class="text-center mb-14 animate-fade-up">
          <span class="text-rice-300 text-sm font-medium tracking-[0.3em] uppercase">
            Visítanos
          </span>
          <h2 class="font-serif text-4xl md:text-5xl mt-3">Ubicación y Horarios</h2>
          <div class="flex items-center justify-center gap-3 mt-6">
            <span class="h-px w-12 bg-hanbok-400"></span>
            <span class="text-rice-200 text-lg">오시는 길</span>
            <span class="h-px w-12 bg-hanbok-400"></span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Ubicación -->
          <div class="bg-sumi-900/50 backdrop-blur-sm border border-sumi-800 rounded-2xl p-8 hover:border-hanbok-500 transition-all group">
            <div class="w-12 h-12 rounded-xl bg-hanbok-600/20 flex items-center justify-center mb-5 group-hover:bg-hanbok-600/40 transition-colors">
              <svg class="w-6 h-6 text-hanbok-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="font-serif text-xl mb-3">Dónde estamos</h3>
            <p class="text-rice-200/80 leading-relaxed">
              Frente al Forum Buenavista<br />
              Ciudad de México, México
            </p>
          </div>

          <!-- Horario -->
          <div class="bg-sumi-900/50 backdrop-blur-sm border border-sumi-800 rounded-2xl p-8 hover:border-hanbok-500 transition-all group">
            <div class="w-12 h-12 rounded-xl bg-hanbok-600/20 flex items-center justify-center mb-5 group-hover:bg-hanbok-600/40 transition-colors">
              <svg class="w-6 h-6 text-hanbok-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="font-serif text-xl mb-3">Horario de atención</h3>
            <p class="text-rice-200/80 leading-relaxed">
              Todos los días<br />
              <span class="text-rice-100 font-medium text-lg">12:00 pm — 11:00 pm</span>
            </p>
          </div>

          <!-- Contacto -->
          <div class="bg-sumi-900/50 backdrop-blur-sm border border-sumi-800 rounded-2xl p-8 hover:border-hanbok-500 transition-all group">
            <div class="w-12 h-12 rounded-xl bg-hanbok-600/20 flex items-center justify-center mb-5 group-hover:bg-hanbok-600/40 transition-colors">
              <svg class="w-6 h-6 text-hanbok-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <h3 class="font-serif text-xl mb-3">Contáctanos</h3>
            <p class="text-rice-200/80 leading-relaxed">
              +52 55 0000 0000<br />
              hola@hanbap.co
            </p>
          </div>
        </div>

        <!-- Mapa -->
        <div class="mt-10 rounded-2xl overflow-hidden border border-sumi-800 shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=Forum%20Buenavista%20Ciudad%20de%20M%C3%A9xico&output=embed"
            class="w-full h-[400px] grayscale-[0.3] contrast-110"
            loading="lazy"
            title="Mapa Forum Buenavista CDMX"
          ></iframe>
        </div>
      </div>
    </section>
  `,
})
export class Location {}
