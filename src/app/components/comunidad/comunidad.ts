import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqBautismos } from '../req-bautismos/req-bautismos'
import { ReqCatequesis } from '../req-catequesis/req-catequesis';
import { ReqCasamientos } from '../req-casamientos/req-casamientos';
import { InfoMisas } from '../info-misas/info-misas';
import { Santeria } from '../santeria/santeria';

@Component({
  selector: 'app-comunidad',
  imports: [CommonModule, ReqBautismos, ReqCatequesis, ReqCasamientos, InfoMisas, Santeria],
  templateUrl: './comunidad.html',
  styleUrl: './comunidad.scss',
})
export class Comunidad {
  
  mostrarReqBautismos: boolean = false;
  mostrarReqCatequesis: boolean = false;
  mostrarReqCasamientos: boolean =false;
  mostrarInfoMisas: boolean = false;
  mostrarSanteria: boolean = false;

  abrirReqBautismos() {
    this.mostrarReqBautismos = true;
  }
  abrirReqCatequesis() {
    this.mostrarReqCatequesis = true;
  }
  abrirReqCasamientos(){
    this.mostrarReqCasamientos = true;
  }
  abrirInfoMisas(){
    this.mostrarInfoMisas = true;
  }
  abrirSanteria(){
    this.mostrarSanteria = true;
  }

  // Obtenemos la referencia local del contenedor de las tarjetas
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  // Variables para controlar el estado del arrastre
  isDown = false;
  startX = 0;
  scrollLeft = 0;

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
    this.carouselContainer.nativeElement.style.scrollBehavior = 'smooth';
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
