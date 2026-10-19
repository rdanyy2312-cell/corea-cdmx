import { Component, signal } from '@angular/core';

interface MenuItem {
  name: string;
  korean: string;
  description: string;
  price: string;
  image: string;
  category: 'Platillos' | 'Postres';
}

@Component({
  selector: 'app-menu',
  template: `
    <section id="menu" class="py-24 bg-rice-50">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Encabezado -->
        <div class="text-center mb-16 animate-fade-up">
          <span class="text-hanbok-600 text-sm font-medium tracking-[0.3em] uppercase">
            Nuestra Carta
          </span>
          <h2 class="font-serif text-4xl md:text-5xl text-sumi-900 mt-3">
            Sabores de Corea
          </h2>
          <div class="flex items-center justify-center gap-3 mt-6">
            <span class="h-px w-12 bg-hanbok-400"></span>
            <span class="text-hanbok-600 text-lg">한</span>
            <span class="h-px w-12 bg-hanbok-400"></span>
          </div>
          <p class="text-sumi-500 max-w-2xl mx-auto mt-6 leading-relaxed">
            Una selección de platillos y postres tradicionales preparados con
            ingredientes frescos y recetas auténticas coreanas.
          </p>
        </div>

        <!-- Filtros -->
        <div class="flex justify-center gap-4 mb-12">
          <button
            (click)="activeTab.set('Platillos')"
            [class]="activeTab() === 'Platillos'
              ? 'px-6 py-2.5 rounded-full bg-hanbok-600 text-white font-medium transition-all'
              : 'px-6 py-2.5 rounded-full bg-white text-sumi-600 border border-sumi-200 hover:border-hanbok-400 transition-all'"
          >
            Platillos
          </button>
          <button
            (click)="activeTab.set('Postres')"
            [class]="activeTab() === 'Postres'
              ? 'px-6 py-2.5 rounded-full bg-hanbok-600 text-white font-medium transition-all'
              : 'px-6 py-2.5 rounded-full bg-white text-sumi-600 border border-sumi-200 hover:border-hanbok-400 transition-all'"
          >
            Postres
          </button>
        </div>

        <!-- Grid de platillos -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (item of filteredItems(); track item.name) {
            <article
              class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-sumi-100"
            >
              <div class="relative h-60 overflow-hidden">
                <img
                  [src]="item.image"
                  [alt]="item.name"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div class="absolute top-4 right-4 bg-rice-50/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span class="text-hanbok-700 font-semibold text-sm">{{ item.price }}</span>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-baseline justify-between mb-2">
                  <h3 class="font-serif text-xl text-sumi-900">{{ item.name }}</h3>
                  <span class="text-sumi-400 text-sm font-medium">{{ item.korean }}</span>
                </div>
                <p class="text-sumi-500 text-sm leading-relaxed">{{ item.description }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Menu {
  activeTab = signal<'Platillos' | 'Postres'>('Platillos');

  items: MenuItem[] = [
    {
      name: 'Bibimbap Clásico',
      korean: '비빔밥',
      description: 'Arroz con vegetales salteados, huevo frito, carne marinada y salsa gochujang picante.',
      price: '$165 MXN',
      image: 'https://images.pexels.com/photos/13112412/pexels-photo-13112412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      category: 'Platillos',
    },
    {
      name: 'Bibimbap en Piedra',
      korean: '돌솥비빔밥',
      description: 'Arroz crujiente en cuenco de piedra caliente con vegetales, carne y huevo.',
      price: '$195 MXN',
      image: 'https://images.pexels.com/photos/12973148/pexels-photo-12973148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      category: 'Platillos',
    },
    {
      name: 'Bulgogi BBQ',
      korean: '불고기',
      description: 'Tiras de res marinada en salsa de soya, pera y ajo, asadas a la parrilla.',
      price: '$245 MXN',
      image: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      category: 'Platillos',
    },
    {
      name: 'Kimchi Tradicional',
      korean: '김치',
      description: 'Col fermentada con especias coreanas, el acompañante esencial de cada comida.',
      price: '$85 MXN',
      image: 'https://images.pexels.com/photos/8956770/pexels-photo-8956770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      category: 'Platillos',
    },
    {
      name: 'Parrilla Coreana',
      korean: '고기구이',
      description: 'Selección de carnes asadas con acompañamientos tradicionales banchan.',
      price: '$290 MXN',
      image: 'https://images.pexels.com/photos/18936008/pexels-photo-18936008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      category: 'Platillos',
    },
    {
      name: 'Bibimbap Mixto',
      korean: '혼합비빔밥',
      description: 'Variación colorida con hongos, vegetales de temporada y arroz integral.',
      price: '$175 MXN',
      image: 'https://images.pexels.com/photos/9348489/pexels-photo-9348489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      category: 'Platillos',
    },
    {
      name: 'Tteok Dulce',
      korean: '떡',
      description: 'Pasteles de arroz tradicionales con relleno dulce de frijol rojo.',
      price: '$95 MXN',
      image: 'https://images.pexels.com/photos/10422389/pexels-photo-10422389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      category: 'Postres',
    },
    {
      name: 'Dulces Coreanos',
      korean: '한과',
      description: 'Selección de dulces tradicionales artísticos con colores y diseños vibrantes.',
      price: '$110 MXN',
      image: 'https://images.pexels.com/photos/23355666/pexels-photo-23355666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      category: 'Postres',
    },
    {
      name: 'Tteok en Caldo',
      korean: '떡국',
      description: 'Dumplings de arroz dulce en caldo con nueces, ideal para celebraciones.',
      price: '$120 MXN',
      image: 'https://images.pexels.com/photos/36865958/pexels-photo-36865958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      category: 'Postres',
    },
  ];

  filteredItems() {
    return this.items.filter((i) => i.category === this.activeTab());
  }
}
