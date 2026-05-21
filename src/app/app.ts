import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nav } from './components/nav/nav'
import { Comunidad } from './components/comunidad/comunidad';
import { Hero } from './components/hero/hero';
import { Donaciones } from './components/donaciones/donaciones';
import { Redes } from './components/redes/redes';
import { Cultura } from './components/cultura/cultura'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Nav, Comunidad, Hero, Donaciones, Redes, Cultura],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy{
  protected readonly title = signal('web-iglesia');
  audio!: HTMLAudioElement;
  sonando: boolean = false;
  ngOnInit(): void {
      // Inicializamos el audio con la ruta del archivo
    this.audio = new Audio('assets/All_Of_Me.mp3');
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
