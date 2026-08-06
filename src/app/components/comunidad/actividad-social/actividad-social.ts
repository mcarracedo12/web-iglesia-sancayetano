import { Component, HostListener } from '@angular/core';
import { Alcoholicos } from "./alcoholicos/alcoholicos";
import { Narcoticos } from "./narcoticos/narcoticos";
import { Whatsapp } from '../../shared/whatsapp/whatsapp';
import { CommonModule } from '@angular/common';

type ModalTipo = 'alcoholicos' | 'narcoticos' | null;
@Component({
  selector: 'app-actividad-social',
  imports: [CommonModule, Alcoholicos, Narcoticos, Whatsapp],
  templateUrl: './actividad-social.html',
})
export class ActividadSocial {
  modalActivo: ModalTipo = null;
  @HostListener('document:keydown.escape')
  manejarEsc() {
    this.modalActivo = null; // Cierra cualquier modal activo en una sola línea
  }
}
