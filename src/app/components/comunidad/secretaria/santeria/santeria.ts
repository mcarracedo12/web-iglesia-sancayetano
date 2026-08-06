import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-santeria',
  imports: [],
  templateUrl: './santeria.html'
})

export class Santeria {
  @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
}
