import { Component, EventEmitter, HostListener, Output} from '@angular/core';

@Component({
  selector: 'app-mensual25',
  imports: [],
  templateUrl: './mensual25.html',
})
export class Mensual25 {
   @Output()close = new EventEmitter<void>();

  cerrar(){this.close.emit();
   } 
   @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
