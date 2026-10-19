import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class]="scrolled()
        ? 'bg-rice-50/95 backdrop-blur-md shadow-md py-3'
        : 'bg-transparent py-5'"
    >
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <!-- Logo -->
        <a href="#hero" class="flex items-center gap-2.5 group">
          <span class="w-10 h-10 rounded-full bg-hanbok-600 flex items-center justify-center text-white font-serif text-xl shadow-md group-hover:scale-110 transition-transform">
            한
          </span>
          <div class="leading-tight">
            <div class="font-serif text-lg text-sumi-900" [class]="scrolled() ? 'text-sumi-900' : 'text-sumi-900'">
              Han<span class="text-hanbok-600">Bap</span>
            </div>
            <div class="text-[10px] tracking-[0.2em] uppercase text-sumi-400">Comida Coreana</div>
          </div>
        </a>

        <!-- Links desktop -->
        <div class="hidden md:flex items-center gap-8">
          @for (link of links; track link.label) {
            <a
              [href]="link.href"
              class="text-sm font-medium text-sumi-700 hover:text-hanbok-600 transition-colors relative group"
            >
              {{ link.label }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-hanbok-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          }
        </div>

        <!-- CTA desktop -->
        <a
          href="#reserva"
          class="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-hanbok-600 text-white text-sm font-medium hover:bg-hanbok-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          Reservar Mesa
        </a>

        <!-- Botón móvil -->
        <button
          (click)="mobileOpen.set(!mobileOpen())"
          class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-sumi-800 hover:bg-sumi-100"
          aria-label="Menú"
        >
          <svg [class]="mobileOpen() ? 'hidden' : 'block'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg [class]="mobileOpen() ? 'block' : 'hidden'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Menú móvil -->
      @if (mobileOpen()) {
        <div class="md:hidden bg-rice-50 border-t border-sumi-100 animate-fade-in">
          <div class="px-6 py-4 flex flex-col gap-3">
            @for (link of links; track link.label) {
              <a
                [href]="link.href"
                (click)="mobileOpen.set(false)"
                class="py-2 text-sumi-700 font-medium hover:text-hanbok-600 transition-colors"
              >
                {{ link.label }}
              </a>
            }
            <a
              href="#reserva"
              (click)="mobileOpen.set(false)"
              class="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-hanbok-600 text-white font-medium"
            >
              Reservar Mesa
            </a>
          </div>
        </div>
      }
    </nav>
  `,
})
export class Navbar {
  scrolled = signal(false);
  mobileOpen = signal(false);
  links = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Menú', href: '#menu' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Ubicación', href: '#ubicacion' },
    { label: 'Reservar', href: '#reserva' },
  ];

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrolled.set(window.scrollY > 30);
      });
    }
  }
}
