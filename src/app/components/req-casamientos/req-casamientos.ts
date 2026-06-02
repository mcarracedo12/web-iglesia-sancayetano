import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-req-casamientos',
  imports: [],
  templateUrl: './req-casamientos.html',
  styleUrl: '../../../styles.scss',
})
export class ReqCasamientos {
  @Output()close = new EventEmitter<void>();

  cerrar(){this.close.emit();
   } 
   @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
