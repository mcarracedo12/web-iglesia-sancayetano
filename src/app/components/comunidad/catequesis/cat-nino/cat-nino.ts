import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-cat-nino',
  imports: [],
  templateUrl: './cat-nino.html',
  styleUrl: './../../comunidad.scss',
})
export class CatNino {
  @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
  @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
