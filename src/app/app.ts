import { Component, signal } from '@angular/core';
import { Nav } from './components/nav/nav'
import { Comunidad } from './components/comunidad/comunidad';
import { Hero } from './components/hero/hero';
import { Donaciones } from './components/donaciones/donaciones';
import { Redes } from './components/redes/redes';
import { Cultura } from './components/cultura/cultura'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Nav, Comunidad, Hero, Donaciones, Redes, Cultura],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('web-iglesia');
}
