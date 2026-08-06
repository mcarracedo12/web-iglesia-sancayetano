import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqBautismos } from './req-bautismos/req-bautismos'
import { ReqCatequesis } from './req-catequesis/req-catequesis';
import { ReqCasamientos } from './req-casamientos/req-casamientos';
import { InfoMisas } from './info-misas/info-misas';
import { Santeria } from './santeria/santeria';
import { Whatsapp } from "../../shared/whatsapp/whatsapp";

type ModalTipo = 'bautismos' | 'catequesis' | 'casamientos' | 'misa' | 'santeria' | null;
@Component({
  selector: 'app-secretaria',
  imports: [CommonModule, ReqBautismos, ReqCatequesis, ReqCasamientos, InfoMisas, Santeria, Whatsapp],
  templateUrl: './secretaria.html',
  //styleUrl: './../comunidad.scss'
})
export class Secretaria {
  modalActivo: ModalTipo = null;

  @HostListener('document:keydown.escape')
  manejarEsc() {
    this.modalActivo = null; 
  }
}
