import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cat-alpha',
  imports: [],
  templateUrl: './cat-alpha.html',
  styleUrl: './../../comunidad.scss',
})
export class CatAlpha {
  @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
}
