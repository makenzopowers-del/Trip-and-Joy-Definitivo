import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private modalService: ModalService, public auth: Auth, private router: Router ) {}

  onVClick() {
    if (this.auth.isLoggedIn()) {
      // Si está logueado, abre el selector de país (tu lógica original)
      this.modalService.abrirPlanViaje.emit();
    } else {
      // Si no está logueado, hace scroll suave hacia la sección de servicios
      const elemento = document.getElementById('servicios');
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  // Método para manejar el clic en "Ver Detalles"
  verDetalles(rutaDestino: string) {
    if (this.auth.isLoggedIn()) {
      // Si está logueado, le permitimos viajar a esa ruta (ej: '/alojamientos')
      this.router.navigate([rutaDestino]);
    } else {
      // Si no está logueado, le abrimos la ventana de Iniciar Sesión/Registro
      // (Asegúrate de que tu ModalService tenga este EventEmitter si no lo tiene ya)
      this.modalService.abrirLogin.emit(); 
    }
  }
}
