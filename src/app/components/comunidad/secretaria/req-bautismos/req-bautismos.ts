import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-req-bautismos',
  standalone: true,
  imports: [],
  templateUrl: './req-bautismos.html'
})
export class ReqBautismos {
  @Output()close = new EventEmitter<void>();

  cerrar(){this.close.emit();
   } 
}