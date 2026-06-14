import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-cat-jov-adul',
  imports: [],
  templateUrl: './cat-jov-adul.html',
  styleUrl: './../../../../comunidad.scss',
})
export class CatJovAdul {
  @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
  @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
