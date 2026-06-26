import { Component } from '@angular/core';
import { Facebook } from "./facebook/facebook";
import { Instagram } from "./instagram/instagram";

@Component({
  selector: 'app-redes',
  imports: [Facebook, Instagram],
  templateUrl: './redes.html',
  styleUrl: './redes.scss',
})
export class Redes {}
