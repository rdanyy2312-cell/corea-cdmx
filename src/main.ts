import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Navbar } from './app/navbar';
import { Hero } from './app/hero';
import { Menu } from './app/menu';
import { About } from './app/about';
import { Location } from './app/location';
import { Reservation } from './app/reservation';
import { Footer } from './app/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Menu, About, Location, Reservation, Footer],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-menu />
      <app-about />
      <app-location />
      <app-reservation />
    </main>
    <app-footer />
  `,
})
export class App {}

bootstrapApplication(App);
