import { Component, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-tiempos-compartidos',
  imports: [],
  templateUrl: './tiempos-compartidos.html',
})
export class TiemposCompartidos {
   @Output()close = new EventEmitter<void>();
  cerrar(){
    this.close.emit();
  }
  @HostListener('document:keydown.escape')
  manejarEsc() {
    this.cerrar();
  }

}
