import { Component, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-req-catequesis',
  standalone: true,
  imports: [],
  templateUrl: './req-catequesis.html',
  styleUrl: './../../../../comunidad.scss',
})
export class ReqCatequesis {
  @Output()close = new EventEmitter<void>();

  cerrar(){this.close.emit();
   } 
   @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
