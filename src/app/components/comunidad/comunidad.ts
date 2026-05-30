import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqBautismos } from '../req-bautismos/req-bautismos'

@Component({
  selector: 'app-comunidad',
  imports: [CommonModule, ReqBautismos],
  templateUrl: './comunidad.html',
  styleUrl: './comunidad.scss',
})
export class Comunidad {
  mostrarReqBautismos: boolean = false;
  // mostrarReqBautismos: boolean = false;
  abrirReqBautismos() {
    this.mostrarReqBautismos = true;
  }
  // abrirReqBautismos() {
  //   this.mostrarReqBautismos = true;
  // }
}
