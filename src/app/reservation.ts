import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { supabase } from './supabase';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="reserva" class="py-24 bg-gradient-to-b from-rice-50 to-rice-100 relative overflow-hidden">
      <div class="absolute top-10 right-10 w-32 h-32 border-4 border-hanbok-200 rounded-full opacity-50"></div>
      <div class="absolute bottom-10 left-10 w-24 h-24 border-4 border-dong-200 rotate-45 opacity-50"></div>

      <div class="max-w-3xl mx-auto px-6 relative">
        <div class="text-center mb-12 animate-fade-up">
          <span class="text-hanbok-600 text-sm font-medium tracking-[0.3em] uppercase">
            Reservas
          </span>
          <h2 class="font-serif text-4xl md:text-5xl text-sumi-900 mt-3">
            Reserva tu mesa
          </h2>
          <div class="flex items-center justify-center gap-3 mt-6">
            <span class="h-px w-12 bg-hanbok-400"></span>
            <span class="text-hanbok-600 text-lg">예약</span>
            <span class="h-px w-12 bg-hanbok-400"></span>
          </div>
          <p class="text-sumi-500 mt-6">
            Déjanos tus datos y te confirmaremos tu reserva. Atendemos de 12pm a 11pm.
          </p>
        </div>

        <div class="bg-white rounded-3xl shadow-xl border border-sumi-100 p-8 md:p-10">
          @if (submitted()) {
            <div class="text-center py-10 animate-fade-in">
              <div class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 class="font-serif text-2xl text-sumi-900 mb-2">¡Reserva recibida!</h3>
              <p class="text-sumi-500 mb-6">
                Hemos registrado tu solicitud para {{ form.date }} a las {{ form.time }}.
                Te contactaremos pronto para confirmar.
              </p>
              <button
                (click)="resetForm()"
                class="px-6 py-2.5 rounded-full bg-hanbok-600 text-white font-medium hover:bg-hanbok-700 transition-colors"
              >
                Hacer otra reserva
              </button>
            </div>
          } @else {
            <form (ngSubmit)="submit()" class="space-y-5">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-sumi-700 mb-1.5">Nombre completo *</label>
                  <input
                    name="name"
                    [(ngModel)]="form.name"
                    required
                    placeholder="Tu nombre"
                    class="w-full px-4 py-3 rounded-xl border border-sumi-200 focus:border-hanbok-500 focus:ring-2 focus:ring-hanbok-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-sumi-700 mb-1.5">Teléfono *</label>
                  <input
                    name="phone"
                    [(ngModel)]="form.phone"
                    required
                    placeholder="300 000 0000"
                    class="w-full px-4 py-3 rounded-xl border border-sumi-200 focus:border-hanbok-500 focus:ring-2 focus:ring-hanbok-100 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-sumi-700 mb-1.5">Correo electrónico</label>
                <input
                  name="email"
                  type="email"
                  [(ngModel)]="form.email"
                  placeholder="tucorreo@ejemplo.com"
                  class="w-full px-4 py-3 rounded-xl border border-sumi-200 focus:border-hanbok-500 focus:ring-2 focus:ring-hanbok-100 outline-none transition-all"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label class="block text-sm font-medium text-sumi-700 mb-1.5">Fecha *</label>
                  <input
                    name="date"
                    type="date"
                    [(ngModel)]="form.date"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-sumi-200 focus:border-hanbok-500 focus:ring-2 focus:ring-hanbok-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-sumi-700 mb-1.5">Hora *</label>
                  <input
                    name="time"
                    type="time"
                    [(ngModel)]="form.time"
                    required
                    min="12:00"
                    max="23:00"
                    class="w-full px-4 py-3 rounded-xl border border-sumi-200 focus:border-hanbok-500 focus:ring-2 focus:ring-hanbok-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-sumi-700 mb-1.5">Personas *</label>
                  <select
                    name="party_size"
                    [(ngModel)]="form.party_size"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-sumi-200 focus:border-hanbok-500 focus:ring-2 focus:ring-hanbok-100 outline-none transition-all bg-white"
                  >
                    @for (n of partyOptions; track n) {
                      <option [value]="n">{{ n }} {{ n === 1 ? 'persona' : 'personas' }}</option>
                    }
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-sumi-700 mb-1.5">Notas especiales</label>
                <textarea
                  name="notes"
                  [(ngModel)]="form.notes"
                  rows="3"
                  placeholder="Alergias, celebraciones, peticiones especiales..."
                  class="w-full px-4 py-3 rounded-xl border border-sumi-200 focus:border-hanbok-500 focus:ring-2 focus:ring-hanbok-100 outline-none transition-all resize-none"
                ></textarea>
              </div>

              @if (errorMessage()) {
                <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                  {{ errorMessage() }}
                </div>
              }

              <button
                type="submit"
                [disabled]="loading()"
                class="w-full py-4 rounded-full bg-hanbok-600 text-white font-medium hover:bg-hanbok-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {{ loading() ? 'Enviando...' : 'Confirmar Reserva' }}
              </button>

              <p class="text-xs text-sumi-400 text-center">
                Atendemos todos los días de 12:00 pm a 11:00 pm frente al Forum Buenavista.
              </p>
            </form>
          }
        </div>
      </div>
    </section>
  `,
})
export class Reservation {
  loading = signal(false);
  submitted = signal(false);
  errorMessage = signal('');

  partyOptions = [1, 2, 3, 4, 5, 6, 7, 8];

  form = {
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '19:00',
    party_size: 2,
    notes: '',
  };

  resetForm() {
    this.form = {
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '19:00',
      party_size: 2,
      notes: '',
    };
    this.submitted.set(false);
    this.errorMessage.set('');
  }

  async submit() {
    this.errorMessage.set('');

    if (!this.form.name || !this.form.phone || !this.form.date || !this.form.time) {
      this.errorMessage.set('Por favor completa los campos obligatorios (*).');
      return;
    }

    // Validar hora dentro del horario de atención
    const hour = parseInt(this.form.time.split(':')[0], 10);
    if (hour < 12 || hour >= 23) {
      this.errorMessage.set('La hora debe estar entre 12:00 pm y 11:00 pm.');
      return;
    }

    this.loading.set(true);
    try {
      const { error } = await supabase.from('reservations').insert({
        name: this.form.name,
        phone: this.form.phone,
        email: this.form.email || null,
        date: this.form.date,
        time: this.form.time,
        party_size: this.form.party_size,
        notes: this.form.notes || null,
      });

      if (error) throw error;
      this.submitted.set(true);
    } catch (err: any) {
      this.errorMessage.set(
        'No pudimos registrar tu reserva. Inténtalo de nuevo en unos momentos.'
      );
    } finally {
      this.loading.set(false);
    }
  }
}
