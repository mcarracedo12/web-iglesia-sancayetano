import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';   

@Component({
  selector: 'app-contacto-desarrollador',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto-desarrollador.html',
  styleUrl: './contacto-desarrollador.scss',
})
export class ContactoDesarrollador {
  isModalOpen = false;
  enviando = false;
  mensajeExito = false;
  mensajeError = false;

  formData = {
    name: '',
    email: '',
    message: '',
    _gotcha: ''
  };

  private formspreeEndpoint = 'https://formspree.io/f/xkjwwqoj';

  // Inyectamos ChangeDetectorRef para forzar la actualización de la UI desfasada por el fetch
  constructor(private cdr: ChangeDetectorRef) {}

  abrirModal() {
    this.isModalOpen = true;
    this.mensajeExito = false;
    this.mensajeError = false;
    this.enviando = false;
  }

  cerrarModal() {
    this.isModalOpen = false;
    this.enviando = false;
  }

  @HostListener('window:keydown.escape', [])
  handleEscapeKey() {
    if (this.isModalOpen) {
      this.cerrarModal();
    }
  }

  async enviarFormulario(event: Event) {
    event.preventDefault();

    if (this.formData._gotcha) {
      this.mensajeExito = true;
      this.formData = { name: '', email: '', message: '', _gotcha: '' };
      setTimeout(() => this.cerrarModal(), 2000);
      return;
    }

    this.enviando = true;
    this.mensajeExito = false;
    this.mensajeError = false;

    try {
      const response = await fetch(this.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.formData)
      });

      if (response.ok) {
        this.mensajeExito = true;
        this.formData = { name: '', email: '', message: '', _gotcha: '' };
        
        await new Promise(resolve => setTimeout(resolve, 2500));
        this.cerrarModal();
      } else {
        this.mensajeError = true;
      }
    } catch (error) {
      this.mensajeError = true;
    } finally {
      this.enviando = false;
      this.cdr.detectChanges(); //Angular que re-renderiza el botón 
    }
  }
}