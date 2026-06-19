import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatAdol } from './modals/cat-adol/cat-adol';
import { CatAlpha } from './modals/cat-alpha/cat-alpha';
import { CatJovAdul } from './modals/cat-jov-adul/cat-jov-adul';
import { CatMatrimonios } from './modals/cat-matrimonios/cat-matrimonios';
import { CatNino } from './modals/cat-nino/cat-nino';

@Component({
  selector: 'app-catequesis',
  imports: [ CommonModule, CatAdol, CatAlpha, CatJovAdul, CatMatrimonios, CatNino],
  templateUrl: './catequesis.html',
  // styleUrl: './../../comunidad.scss',
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
