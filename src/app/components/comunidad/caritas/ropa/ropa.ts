import { Component, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-ropa',
  imports: [],
  templateUrl: './ropa.html',
  styleUrl: './../../comunidad.scss',
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
