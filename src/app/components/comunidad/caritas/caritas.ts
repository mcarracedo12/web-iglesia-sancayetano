import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ropa } from './ropa/ropa';
import { Alimentos } from "./alimentos/alimentos"; 
import { ApoyoEscolar } from "./apoyo-escolar/apoyo-escolar";
import { Becas } from "./becas/becas";
import { TiemposCompartidos } from "./tiempos-compartidos/tiempos-compartidos";
import { Whatsapp } from "../../shared/whatsapp/whatsapp";


@Component({
  selector: 'app-caritas',
  imports: [CommonModule, Ropa, Whatsapp, Alimentos, ApoyoEscolar, Becas, TiemposCompartidos, ApoyoEscolar],
  templateUrl: './caritas.html',
})
export class Caritas {
  mostrarRopa: boolean = false;
  mostrarAlimentos: boolean = false;
  mostrarApoyo: boolean = false;
  mostrarBecas: boolean = false;
  mostrarTiempos: boolean = false;

  abrirRopa() {
    this.mostrarRopa = true;
  }
  abrirAlimentos() {
    this.mostrarAlimentos = true;
  }
  abrirApoyo() {
    this.mostrarApoyo = true;
  }
  abrirBecas() {
    this.mostrarBecas = true;
  }
  abrirTiempos() {
    this.mostrarTiempos = true;
  }

}
