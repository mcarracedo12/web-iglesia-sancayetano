import { Component } from '@angular/core';
import { SanExpedito } from "./san-expedito/san-expedito";
import { SanPioPietralcina } from "./san-pio-pietralcina/san-pio-pietralcina";
import { Patronal } from "./patronal/patronal";
import { Mensual7 } from "./mensual7/mensual7";
import { Mensual19 } from "./mensual19/mensual19";
import { Mensual23 } from "./mensual23/mensual23";
import { Mensual25 } from "./mensual25/mensual25";
import { Whatsapp } from "../../shared/whatsapp/whatsapp";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liturgia',
  imports: [CommonModule, SanExpedito, SanPioPietralcina, Patronal, Mensual7, Mensual19, Mensual23, Mensual25, Whatsapp],
  templateUrl: './liturgia.html',
})
export class Liturgia {
  mostrarSanExpedito: boolean = false;
  mostrarSanPioPietralcina: boolean = false;
  mostrarPatronal: boolean = false;
  mostrarMensual7: boolean = false;
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
  abrirMensual7() {
    this.mostrarMensual7 = true;
  }
  abrirMensual19() {
    this.mostrarMensual19 = true;
  }
  abrirMensual23() {
    this.mostrarMensual23 = true;
  }
  abrirMensual25() {
    this.mostrarMensual25 = true;
  }
}
