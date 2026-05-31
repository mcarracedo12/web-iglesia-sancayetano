import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqBautismos } from '../req-bautismos/req-bautismos'
import { ReqCatequesis } from '../req-catequesis/req-catequesis';
import { ReqCasamientos } from '../req-casamientos/req-casamientos';
import { InfoMisas } from '../info-misas/info-misas';

@Component({
  selector: 'app-comunidad',
  imports: [CommonModule, ReqBautismos, ReqCatequesis, ReqCasamientos, InfoMisas],
  templateUrl: './comunidad.html',
  styleUrl: './comunidad.scss',
})
export class Comunidad {
  mostrarReqBautismos: boolean = false;
  mostrarReqCatequesis: boolean = false;
  mostrarReqCasamientos: boolean =false;
  mostrarInfoMisas: boolean = false;

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
}
