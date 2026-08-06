import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-apoyo-escolar',
  imports: [],
  templateUrl: './apoyo-escolar.html',
})
export class ApoyoEscolar {
   @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
}
