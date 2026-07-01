import { Component, EventEmitter, HostListener, Output  } from '@angular/core';

@Component({
  selector: 'app-alimentos',
  imports: [],
  templateUrl: './alimentos.html',
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
