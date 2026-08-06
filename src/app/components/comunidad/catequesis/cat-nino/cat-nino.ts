import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cat-nino',
  imports: [],
  templateUrl: './cat-nino.html',
})
export class CatNino {
  @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
}
