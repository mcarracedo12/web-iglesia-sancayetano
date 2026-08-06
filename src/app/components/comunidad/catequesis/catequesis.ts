import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatAdol } from './cat-adol/cat-adol';
import { CatAlpha } from './cat-alpha/cat-alpha';
import { CatJovAdul } from './cat-jov-adul/cat-jov-adul';
import { CatMatrimonios } from './cat-matrimonios/cat-matrimonios';
import { CatNino } from './cat-nino/cat-nino';
import { Whatsapp } from "../../shared/whatsapp/whatsapp";

type ModalTipo = 'cat-nino' | 'cat-adol' | 'cat-jov-adul' | 'cat-matrimonios' | 'cat-alpha' | null;

@Component({
  selector: 'app-catequesis',
  imports: [CommonModule, CatAdol, CatAlpha, CatJovAdul, CatMatrimonios, CatNino, Whatsapp],
  templateUrl: './catequesis.html'
})


export class Catequesis {
  modalActivo: ModalTipo = null;

  @HostListener('document:keydown.escape')
  manejarEsc() {
    this.modalActivo = null; 
  }
}
