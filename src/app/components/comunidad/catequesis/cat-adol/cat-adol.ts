import { Component, Output, EventEmitter } from '@angular/core';

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
}
