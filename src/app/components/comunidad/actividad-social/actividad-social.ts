import { Component } from '@angular/core';
import { Alcoholicos } from "./alcoholicos/alcoholicos";
import { Narcoticos } from "./narcoticos/narcoticos";
import { Whatsapp } from '../../shared/whatsapp/whatsapp';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actividad-social',
  imports: [CommonModule, Alcoholicos, Narcoticos, Whatsapp],
  templateUrl: './actividad-social.html',
})
export class ActividadSocial {
  mostrarAlcoholicos: boolean = false;
  mostrarNarcoticos: boolean = false;

  abrirAlcoholicos() {
    this.mostrarAlcoholicos = true;
  }
  abrirNarcoticos() {
    this.mostrarNarcoticos = true;
  }
}
