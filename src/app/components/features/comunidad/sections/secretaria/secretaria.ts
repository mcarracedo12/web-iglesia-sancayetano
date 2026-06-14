import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqBautismos } from './modals/req-bautismos/req-bautismos'
import { ReqCatequesis } from './modals/req-catequesis/req-catequesis';
import { ReqCasamientos } from './modals/req-casamientos/req-casamientos';
import { InfoMisas } from './modals/info-misas/info-misas';
import { Santeria } from './modals/santeria/santeria';


@Component({
  selector: 'app-secretaria',
  imports: [CommonModule, ReqBautismos, ReqCatequesis, ReqCasamientos, InfoMisas, Santeria],
  templateUrl: './secretaria.html',
  styleUrl: './../../comunidad.scss'
})
export class Secretaria {
  mostrarReqBautismos: boolean = false;
  mostrarReqCatequesis: boolean = false;
  mostrarReqCasamientos: boolean =false;
  mostrarInfoMisas: boolean = false;
  mostrarSanteria: boolean = false;
  abrirReqBautismos() {
    this.mostrarReqBautismos = true;
  }
  abrirReqCatequesis() {
    this.mostrarReqCatequesis = true;
  }
  abrirReqCasamientos(){
    this.mostrarReqCasamientos = true;
  }
  abrirInfoMisas(){
    this.mostrarInfoMisas = true;
  }
  abrirSanteria(){
    this.mostrarSanteria = true;
  }

}
