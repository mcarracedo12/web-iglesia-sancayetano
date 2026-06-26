import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatAdol } from './cat-adol/cat-adol';
import { CatAlpha } from './cat-alpha/cat-alpha';
import { CatJovAdul } from './cat-jov-adul/cat-jov-adul';
import { CatMatrimonios } from './cat-matrimonios/cat-matrimonios';
import { CatNino } from './cat-nino/cat-nino';
import { Whatsapp } from "../../shared/whatsapp/whatsapp";

@Component({
  selector: 'app-catequesis',
  imports: [CommonModule, CatAdol, CatAlpha, CatJovAdul, CatMatrimonios, CatNino, Whatsapp],
  templateUrl: './catequesis.html',
  //styleUrl: './../../comunidad.scss',
})
export class Catequesis {
  mostrarCatNinos: boolean = false;
  mostrarCatAdol: boolean = false;
  mostrarCatJovAdul: boolean = false;
  mostrarCatMatrimonios: boolean = false;
  mostrarAlpha: boolean = false; 

  abrirCatNinos(){
    this.mostrarCatNinos = true;
  }
  abrirCatAdol(){
    this.mostrarCatAdol = true;
  }
  abrirCatJovAdul(){
    this.mostrarCatJovAdul = true;
  }
  abrirCatMatrimonios(){
    this.mostrarCatMatrimonios = true;
  }
  abrirAlpha(){
    this.mostrarAlpha = true;
  }

}
