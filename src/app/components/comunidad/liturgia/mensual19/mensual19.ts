import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-mensual19',
  imports: [],
  templateUrl: './mensual19.html',
})
export class Mensual19 {
  @Output()close = new EventEmitter<void>();

  cerrar(){this.close.emit();
   } 
   @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
