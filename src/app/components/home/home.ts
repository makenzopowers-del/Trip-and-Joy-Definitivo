import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private modalService: ModalService) {}

  onVClick() {
    this.modalService.abrirPlanViaje.emit(); // Avisa de que se ha hecho clic
  }
}
