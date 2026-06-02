import { Component, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-req-bautismos',
  standalone: true,
  imports: [],
  templateUrl: './req-bautismos.html',
  styleUrl: '../../../styles.scss',
})
export class ReqBautismos {
  @Output()close = new EventEmitter<void>();

  cerrar(){this.close.emit();
   } 
   @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}