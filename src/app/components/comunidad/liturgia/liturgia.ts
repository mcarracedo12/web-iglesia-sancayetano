import { Component, HostListener } from '@angular/core';
import { SanExpedito } from "./san-expedito/san-expedito";
import { SanPioPietralcina } from "./san-pio-pietralcina/san-pio-pietralcina";
import { Patronal } from "./patronal/patronal";
import { Whatsapp } from "../../shared/whatsapp/whatsapp";
import { CommonModule } from '@angular/common';

type ModalTipo = 'expedito' | 'pio' | 'patronal' | null;

@Component({
  selector: 'app-liturgia',
  standalone: true,
  imports: [CommonModule, SanExpedito, SanPioPietralcina, Patronal, Whatsapp],
  templateUrl: './liturgia.html',
})
export class Liturgia {
  modalActivo: ModalTipo = null;

  @HostListener('document:keydown.escape')
  manejarEsc() {
    this.modalActivo = null; 
  }
}