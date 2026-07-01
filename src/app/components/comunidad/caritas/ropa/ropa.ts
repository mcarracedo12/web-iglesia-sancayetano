import { Component, EventEmitter, HostListener, Output} from '@angular/core';

@Component({
  selector: 'app-ropa',
  imports: [],
  templateUrl: './ropa.html',
})
export class Ropa {
   @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
  @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
