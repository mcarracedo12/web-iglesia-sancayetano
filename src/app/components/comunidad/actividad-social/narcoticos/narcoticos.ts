import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-narcoticos',
  imports: [],
  templateUrl: './narcoticos.html',
})
export class Narcoticos {
     @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
  @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
