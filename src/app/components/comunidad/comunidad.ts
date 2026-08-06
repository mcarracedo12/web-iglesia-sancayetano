import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Secretaria } from './secretaria/secretaria';
import { Catequesis } from './catequesis/catequesis';
import { Caritas } from './caritas/caritas';
import { Liturgia } from './liturgia/liturgia';
import { ActividadSocial } from './actividad-social/actividad-social';

@Component({
  selector: 'app-comunidad',
  standalone: true, // Aseguramos standalone
  imports: [CommonModule, Secretaria, Catequesis, Caritas, Liturgia, ActividadSocial],
  templateUrl: './comunidad.html',
  styleUrl: './comunidad.scss'
})
export class Comunidad {

  // Obtenemos la referencia local del contenedor de las tarjetas
  @ViewChild('carouselContainer') carouselContainer!: ElementRef<HTMLDivElement>;

  // Variables para controlar el estado del arrastre
  isDown = false;
  startX = 0;
  scrollLeft = 0;

  // --- NAVEGACIÓN CON FLECHAS ---
  scrollNext() {
    if (!this.carouselContainer) return;
    const container = this.carouselContainer.nativeElement;
    container.style.scrollBehavior = 'smooth';
    const scrollAmount = 350;

    // Loop al inicio si llega al final
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 50) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  scrollPrev() {
    if (!this.carouselContainer) return;
    const container = this.carouselContainer.nativeElement;
    container.style.scrollBehavior = 'smooth';
    const scrollAmount = 350;

    // Si está al principio, va al final
    if (container.scrollLeft <= 5) {
      container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }

  // --- EVENTOS DE ARRASTRE (DRAG TO SCROLL) ---
  
  // 1. Cuando el usuario hace clic y mantiene presionado
  onMouseDown(e: MouseEvent) {
    this.isDown = true;
    const container = this.carouselContainer.nativeElement;
    
    // Guardamos la posición inicial del mouse y el scroll actual
    this.startX = e.pageX - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;
    
    // Desactivamos temporalmente el comportamiento "smooth" para que el arrastre sea instantáneo
    container.style.scrollBehavior = 'auto';
  }

  // 2. Si el mouse sale del contenedor, cancelamos el arrastre
  onMouseLeave() {
    this.isDown = false;
  }

  // 3. Cuando se suelta el clic del mouse
  onMouseUp() {
    this.isDown = false;
    // Devolvemos el scroll suave para cuando se usen las flechas
    if (this.carouselContainer) {
      this.carouselContainer.nativeElement.style.scrollBehavior = 'smooth';
    }
  }

  // 4. Mientras el mouse se mueve manteniendo el clic presionado
  onMouseMove(e: MouseEvent) {
    if (!this.isDown) return; // Si no está presionando el clic, no hace nada
    
    e.preventDefault(); // Evita selecciones de texto raras al arrastrar
    const container = this.carouselContainer.nativeElement;
    const x = e.pageX - container.offsetLeft;
    
    // Calculamos cuántos píxeles se movió el cursor (multiplicado por 1.5 para darle más velocidad)
    const walk = (x - this.startX) * 1.5; 
    container.scrollLeft = this.scrollLeft - walk;
  }
}