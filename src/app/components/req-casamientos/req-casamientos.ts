import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-req-casamientos',
  imports: [],
  templateUrl: './req-casamientos.html',
  styleUrl: './req-casamientos.scss',
})
export class ReqCasamientos {
  @Output()close = new EventEmitter<void>();

  cerrar(){this.close.emit();
   } 
}
