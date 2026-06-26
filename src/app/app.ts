import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nav } from './components/shared/nav/nav'
import { Hero } from './components/shared/hero/hero';
import { Donaciones } from './components/shared/donaciones/donaciones';
import { Comunidad } from './components/comunidad/comunidad';
import { Redes } from './components/redes/redes';
import { Cultura } from './components/cultura/cultura'
import { Oraciones } from './components/oraciones/oraciones';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Nav, Comunidad, Hero, Donaciones, Redes, Cultura, Oraciones],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy{
  protected readonly title = signal('web-iglesia');
  audio!: HTMLAudioElement;
  sonando: boolean = false;
  ngOnInit(): void {
    this.audio = new Audio('assets/himno-san-cayetano.mp3');
    this.audio.loop = true; 
    this.audio.volume = 0.4; 
  }
  toggleMusica() {
    if (this.sonando) {
      this.audio.pause();
    } else {
      this.audio.play().catch(error => {
        console.log("El navegador bloqueó el autoplay, se requiere interacción:", error);
      });
    }
    this.sonando = !this.sonando;
  }
  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
    }
  }
}
