import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-san-expedito',
  imports: [],
  templateUrl: './san-expedito.html',
})
export class SanExpedito {
   @Output()close = new EventEmitter<void>();

  cerrar(){this.close.emit();
   } 
   @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
