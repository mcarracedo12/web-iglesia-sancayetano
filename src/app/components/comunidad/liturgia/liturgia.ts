import { Component } from '@angular/core';
import { SanExpedito } from "./san-expedito/san-expedito";
import { SanPioPietralcina } from "./san-pio-pietralcina/san-pio-pietralcina";
import { Patronal } from "./patronal/patronal";
import { Whatsapp } from "../../shared/whatsapp/whatsapp";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liturgia',
  imports: [CommonModule, SanExpedito, SanPioPietralcina, Patronal, Whatsapp],
  templateUrl: './liturgia.html',
})
export class Liturgia {
  mostrarSanExpedito: boolean = false;
  mostrarSanPioPietralcina: boolean = false;
  mostrarPatronal: boolean = false;
  // mostrarMensual7: boolean = false;
  mostrarMensual19: boolean = false;
  mostrarMensual23: boolean = false;
  mostrarMensual25: boolean = false;

  abrirSanExpedito() {
    this.mostrarSanExpedito = true;
  }
  abrirSanPioPietralcina() {
    this.mostrarSanPioPietralcina = true;
  }
  abrirPatronal() {
    this.mostrarPatronal = true;
  }

}
