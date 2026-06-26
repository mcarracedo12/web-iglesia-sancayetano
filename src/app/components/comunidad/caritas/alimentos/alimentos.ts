import { Component, EventEmitter, Output } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-alimentos',
  imports: [],
  templateUrl: './alimentos.html',
  styleUrl: './alimentos.scss',
})
export class Alimentos {
   @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
  @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }
}
