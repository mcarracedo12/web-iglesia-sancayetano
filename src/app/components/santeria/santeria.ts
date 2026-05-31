import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-santeria',
  imports: [],
  templateUrl: './santeria.html',
  styleUrl: './santeria.scss',
})

export class Santeria {
  @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
}
