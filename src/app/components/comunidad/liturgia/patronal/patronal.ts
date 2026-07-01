import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-patronal',
  imports: [],
  templateUrl: './patronal.html',
})
export class Patronal {
   @Output()close = new EventEmitter<void>();

  cerrar(){this.close.emit();
   } 
   @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
