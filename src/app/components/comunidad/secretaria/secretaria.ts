import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqBautismos } from './req-bautismos/req-bautismos'
import { ReqCatequesis } from './req-catequesis/req-catequesis';
import { ReqCasamientos } from './req-casamientos/req-casamientos';
import { InfoMisas } from './info-misas/info-misas';
import { Santeria } from './santeria/santeria';
import { Whatsapp } from "../../shared/whatsapp/whatsapp";


@Component({
  selector: 'app-secretaria',
  imports: [CommonModule, ReqBautismos, ReqCatequesis, ReqCasamientos, InfoMisas, Santeria, Whatsapp],
  templateUrl: './secretaria.html',
  //styleUrl: './../comunidad.scss'
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
