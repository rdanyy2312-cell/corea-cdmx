import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section id="nosotros" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Imagen -->
          <div class="relative animate-fade-up">
            <div class="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/15040042/pexels-photo-15040042.jpeg?auto=compress&cs=tinysrgb&h=800&w=900"
                alt="Interior del restaurante"
                class="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div class="absolute -bottom-6 -right-6 bg-hanbok-600 rounded-2xl p-6 text-white shadow-xl hidden md:block">
              <div class="font-serif text-3xl">10+</div>
              <div class="text-rice-100 text-sm">años de tradición</div>
            </div>
            <div class="absolute -top-4 -left-4 w-24 h-24 border-4 border-rice-300 rounded-2xl -z-0 hidden md:block"></div>
          </div>

          <!-- Texto -->
          <div class="animate-fade-up">
            <span class="text-hanbok-600 text-sm font-medium tracking-[0.3em] uppercase">
              Nuestra Historia
            </span>
            <h2 class="font-serif text-4xl md:text-5xl text-sumi-900 mt-3 mb-6">
              Tradición coreana<br />en cada bocado
            </h2>
            <div class="flex items-center gap-3 mb-6">
              <span class="h-px w-12 bg-hanbok-400"></span>
              <span class="text-hanbok-600 text-lg">우리의 이야기</span>
            </div>
            <p class="text-sumi-600 leading-relaxed mb-5">
              Somos una franquicia dedicada a compartir la riqueza gastronómica de Corea
              con cada comensal. Nuestros chefs combinan técnicas tradicionales con
              ingredientes frescos de origen local para crear platillos auténticos.
            </p>
            <p class="text-sumi-600 leading-relaxed mb-8">
              Desde el icónico bibimbap hasta el bulgogi a la parrilla, cada receta
              representa siglos de cultura coreana servidos en un ambiente acogedor
              frente al Forum Buenavista.
            </p>

            <!-- Features -->
            <div class="grid grid-cols-2 gap-5">
              @for (feature of features; track feature.title) {
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-full bg-rice-100 flex items-center justify-center flex-shrink-0">
                    <span class="text-hanbok-600 text-lg">{{ feature.icon }}</span>
                  </div>
                  <div>
                    <div class="font-medium text-sumi-900">{{ feature.title }}</div>
                    <div class="text-sm text-sumi-500">{{ feature.desc }}</div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class About {
  features = [
    { icon: '🍳', title: 'Recetas auténticas', desc: 'Cocina tradicional coreana' },
    { icon: '🌶️', title: 'Ingredientes frescos', desc: 'Productos locales y de Corea' },
    { icon: '👥', title: 'Chef coreanos', desc: 'Equipo experto y apasionado' },
    { icon: '🍱', title: 'Platillos variados', desc: 'Desde bibimbap hasta postres' },
  ];
}
