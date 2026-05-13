import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-biografia-modal',
  standalone: true,
  imports: [],
  templateUrl: './biografia-modal.html',
  styleUrl: '../cultura/cultura.scss'
})
export class BiografiaModal {
  @Output()close = new EventEmitter<void>();

  cerrar(){this.close.emit();
   } 

}


