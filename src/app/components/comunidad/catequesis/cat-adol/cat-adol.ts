import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-cat-adol',
  imports: [],
  templateUrl: './cat-adol.html',
  styleUrl: './../../comunidad.scss',
})
export class CatAdol {
  @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
  @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
