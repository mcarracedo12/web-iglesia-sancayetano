import { Component, Output, EventEmitter } from '@angular/core'; // Importamos lo necesario

@Component({
  selector: 'app-historia-modal',
  standalone: true, // Asegurate de que sea standalone si no usas módulos
  imports: [],
  templateUrl: './historia-modal.html',
  styleUrl: '../cultura/cultura.scss',
})
export class HistoriaModal {
  // 1. Declaramos el evento de salida
  @Output() close = new EventEmitter<void>();

  // 2. Creamos la función que emite el evento
  cerrar() {
    this.close.emit();
  }
}