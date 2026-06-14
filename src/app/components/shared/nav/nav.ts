import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  // Esta función busca el checkbox y le pone el valor 'false' (desmarcado)
  closeMenu(checkbox: HTMLInputElement) {
    checkbox.checked = false;
  }
}