import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-cat-alpha',
  imports: [],
  templateUrl: './cat-alpha.html',
  styleUrl: '../../../styles.scss',
})
export class CatAlpha {
  @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
  @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
