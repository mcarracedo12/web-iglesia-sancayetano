import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaModal } from '../historia-modal/historia-modal';
import { BiografiaModal } from '../biografia-modal/biografia-modal';

@Component({
  selector: 'app-cultura',
  standalone: true,
  imports: [ CommonModule, HistoriaModal, BiografiaModal],
  templateUrl: './cultura.html',
  styleUrl: './cultura.scss',
})
export class Cultura {
  mostrarHistoria: boolean = false;
  mostrarBiografia: boolean = false;

  abrirHistoria() {
    this.mostrarHistoria = true;
  }

  abrirBio() {
    this.mostrarBiografia = true;
  }

}
