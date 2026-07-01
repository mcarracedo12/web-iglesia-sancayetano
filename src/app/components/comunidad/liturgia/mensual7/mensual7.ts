import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-mensual7',
  imports: [],
  templateUrl: './mensual7.html',
})
export class Mensual7 {
  @Output()close = new EventEmitter<void>();

  cerrar(){this.close.emit();
   } 
   @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
