import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-becas',
  imports: [],
  templateUrl: './becas.html',
})
export class Becas {
   @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
}
