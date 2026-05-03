import { Component, signal } from '@angular/core';
import { Nav } from './components/nav/nav'
import { Comunidad } from './components/comunidad/comunidad';
import { Hero } from './components/hero/hero';
import { Noticias } from './components/noticias/noticias';
import { Donaciones } from './components/donaciones/donaciones';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Nav, Comunidad, Hero, Noticias, Donaciones],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('web-iglesia');
}
