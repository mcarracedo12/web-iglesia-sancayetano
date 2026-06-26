import { Component, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-becas',
  imports: [],
  templateUrl: './becas.html',
  styleUrl: './becas.scss',
})
export class Becas {
   @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
  @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
