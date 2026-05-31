import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-info-misas',
  imports: [],
  templateUrl: './info-misas.html',
  styleUrl: './info-misas.scss',
})
export class InfoMisas {
  @Output()close = new EventEmitter<void>();

  cerrar(){this.close.emit();
   } 
}
