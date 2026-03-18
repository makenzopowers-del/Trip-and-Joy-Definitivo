import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // Creamos el emisor para avisar de que queremos cerrar
  @Output() cerrarLogin = new EventEmitter<void>();

  onCerrarClick() {
    this.cerrarLogin.emit(); // Disparamos el evento hacia el padre
  }
}
