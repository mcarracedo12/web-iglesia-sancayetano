import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-req-catequesis',
  standalone: true,
  imports: [],
  templateUrl: './req-catequesis.html'
})
export class ReqCatequesis {
  @Output()close = new EventEmitter<void>();

  cerrar(){this.close.emit();
   } 
}
