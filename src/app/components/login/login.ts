import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  //Función para el enlace "Registrate aquí"
  onCerrarClick() {
    this.cerrarLogin.emit(); // Disparamos el evento hacia el padre
  }

  //Función para el enlace "Entrar"
  onEntrar() {
    // Primero, cerramos la ventana oscura del login
    this.cerrarLogin.emit();
    
    // Segundo, ¡viajamos a la pantalla de bienvenida!
    this.router.navigate(['/bienvenida']);
  }
}
