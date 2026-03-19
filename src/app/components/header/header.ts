import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Evento para emitir el login
  @Output() abrirLogin = new EventEmitter<void>();

  // Función que se ejecuta al hacer clic
  onBotonUneteClick() {
    console.log('¡El botón funciona y está avisando al padre!');
    this.abrirLogin.emit(); // Disparamos el evento hacia el padre
  }
}
