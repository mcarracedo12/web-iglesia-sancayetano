import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ropa } from './ropa/ropa';
import { Alimentos } from "./alimentos/alimentos"; 
import { ApoyoEscolar } from "./apoyo-escolar/apoyo-escolar";
import { Becas } from "./becas/becas";
import { TiemposCompartidos } from "./tiempos-compartidos/tiempos-compartidos";
import { Whatsapp } from "../../shared/whatsapp/whatsapp";

type ModalTipo = 'ropa' | 'alimentos' | 'apoyo' | 'becas' | 'tiempos' | null;
@Component({
  selector: 'app-caritas',
  imports: [CommonModule, Ropa, Whatsapp, Alimentos, ApoyoEscolar, Becas, TiemposCompartidos, ApoyoEscolar],
  templateUrl: './caritas.html',
})
export class Caritas {
  modalActivo: ModalTipo = null;

  @HostListener('document:keydown.escape')
  manejarEsc() {
    this.modalActivo = null; // Cierra cualquier modal activo en una sola línea
  }

}
