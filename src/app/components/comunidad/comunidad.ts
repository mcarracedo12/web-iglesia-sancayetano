import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Secretaria } from './secretaria/secretaria';
import { Catequesis } from './catequesis/catequesis';
import { Caritas } from './caritas/caritas';
import { Liturgia } from './liturgia/liturgia';
import { ActividadSocial } from './actividad-social/actividad-social';

@Component({
  selector: 'app-comunidad',
  standalone: true,
  imports: [CommonModule, Secretaria, Catequesis, Caritas, Liturgia, ActividadSocial],
  templateUrl: './comunidad.html',
  styleUrl: './comunidad.scss'
})
export class Comunidad {

  @ViewChild('carouselContainer') carouselContainer!: ElementRef<HTMLDivElement>;

  isDown = false;
  startX = 0;
  scrollLeft = 0;

  // --- NAVEGACIÓN CON FLECHAS ---
  scrollNext() {
    if (!this.carouselContainer) return;
    const container = this.carouselContainer.nativeElement;
    const scrollAmount = 350;

    // Si llega al final, resetea al inicio INSTANTÁNEAMENTE (sin rebobinar)
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
      container.scrollTo({ left: 0, behavior: 'auto' });
    } else {
      container.scrollTo({ left: container.scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  }

  scrollPrev() {
    if (!this.carouselContainer) return;
    const container = this.carouselContainer.nativeElement;
    const scrollAmount = 350;

    // Si está al principio, salta al final instantáneamente
    if (container.scrollLeft <= 5) {
      container.scrollTo({ left: container.scrollWidth, behavior: 'auto' });
    } else {
      container.scrollTo({ left: container.scrollLeft - scrollAmount, behavior: 'smooth' });
    }
  }

  // --- EVENTOS DE ARRASTRE (DRAG TO SCROLL) ---
  
  onMouseDown(e: MouseEvent) {
    this.isDown = true;
    const container = this.carouselContainer.nativeElement;
    
    this.startX = e.pageX - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;
    
    container.style.scrollBehavior = 'auto';
  }

  // Escuchamos la liberación del mouse en toda la ventana para que no quede "pegado"
  @HostListener('window:mouseup')
  onMouseUp() {
    if (this.isDown) {
      this.isDown = false;
      if (this.carouselContainer) {
        this.carouselContainer.nativeElement.style.scrollBehavior = 'smooth';
      }
    }
  }

  onMouseMove(e: MouseEvent) {
    if (!this.isDown) return;
    
    e.preventDefault();
    const container = this.carouselContainer.nativeElement;
    const x = e.pageX - container.offsetLeft;
    
    const walk = (x - this.startX) * 1.5; 
    container.scrollLeft = this.scrollLeft - walk;
  }
}