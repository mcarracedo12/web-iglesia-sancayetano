import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-santeria',
  imports: [],
  templateUrl: './santeria.html',
  styleUrl: '../../../styles.scss',
})

export class Santeria {
  @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
  @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
