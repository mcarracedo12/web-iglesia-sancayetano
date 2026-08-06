import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-narcoticos',
  imports: [],
  templateUrl: './narcoticos.html',
})
export class Narcoticos {
     @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
}
