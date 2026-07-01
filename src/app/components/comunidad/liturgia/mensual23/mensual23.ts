import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-mensual23',
  imports: [],
  templateUrl: './mensual23.html',
})
export class Mensual23 {
   @Output()close = new EventEmitter<void>();

  cerrar(){this.close.emit();
   } 
   @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
