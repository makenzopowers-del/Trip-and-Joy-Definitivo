import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Login } from './components/login/login';
import { PlanViaje1 } from './components/plan-viaje-1/plan-viaje-1'; 
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Login, PlanViaje1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'tripandjoy2';
  isLoginVisible: boolean = false;
  isPlanViajeVisible = false;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    // Escuchamos si alguien hace clic en la 'v' de inicio
    this.modalService.abrirPlanViaje.subscribe(() => {
      this.isPlanViajeVisible = true;
    });
  }


}
