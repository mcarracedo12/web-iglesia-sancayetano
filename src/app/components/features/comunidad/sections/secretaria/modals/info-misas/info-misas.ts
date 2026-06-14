import { Component, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-info-misas',
  imports: [],
  templateUrl: './info-misas.html',
  styleUrl: './../../../../comunidad.scss',
})
export class InfoMisas {
  @Output()close = new EventEmitter<void>();

  cerrar(){this.close.emit();
   } 
   @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
