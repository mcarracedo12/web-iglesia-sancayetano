import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cat-matrimonios',
  imports: [],
  templateUrl: './cat-matrimonios.html',
  styleUrl: './../../comunidad.scss',
})
export class CatMatrimonios {
  @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
}
