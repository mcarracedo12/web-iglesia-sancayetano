import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alcoholicos',
  imports: [],
  templateUrl: './alcoholicos.html',
})
export class Alcoholicos {
     @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
}
