import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  imports: [CommonModule],
  templateUrl: './noticias.html',
  styleUrl: './noticias.scss',
})
export class Noticias {
  // novedades = signal([
  //   { id: 1, titulo: 'Cena Solidaria', fecha: '15 de Mayo', descripcion: 'Los esperamos para compartir...', imagen: 'assets/noticia1.jpg' },
  //   { id: 2, titulo: 'Horarios de Invierno', fecha: '1 de Mayo', descripcion: 'Nuevos horarios de misa...', imagen: 'assets/noticia2.jpg' }
  // ]);
}
