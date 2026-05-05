import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class Auth { 
  
  // Usuario de prueba
  private usuarioActual: Usuario | null = {
    id: '123',
    nombre: 'Simeón',
    email: 'admin@tripandjoy.com',
    rol: 'administrador' 
  };

  // 👇 ESTO SIMULA TU BASE DE DATOS (Solo para hacer pruebas ahora mismo)
  private baseDeDatosUsuarios = [
    { id: '1', nombre: 'Admin Trip', email: 'admin@tripandjoy.com', password: '123', rol: 'administrador' },
    { id: '2', nombre: 'Cliente Feliz', email: 'cliente@tripandjoy.com', password: '123', rol: 'cliente' }
  ];

  constructor() { }
  
  //  NUEVA FUNCIÓN: Comprueba el email y la contraseña
  login(emailIngresado: string, passwordIngresado: string): boolean {
    // Buscamos en nuestra "base de datos" si alguien coincide
    const usuarioEncontrado = this.baseDeDatosUsuarios.find(
      u => u.email === emailIngresado && u.password === passwordIngresado
    );

    if (usuarioEncontrado) {
      // Si el email y pass son correctos, guardamos sus datos (¡SIN la contraseña!)
      this.usuarioActual = {
        id: usuarioEncontrado.id,
        nombre: usuarioEncontrado.nombre,
        email: usuarioEncontrado.email,
        rol: usuarioEncontrado.rol as 'cliente' | 'administrador'
      };
      return true; // Login exitoso
    } else {
      return false; // Login fallido
    }
  }

  getUsuarioActual(): Usuario | null {
    return this.usuarioActual;
  }

  esAdministrador(): boolean {
    return this.usuarioActual?.rol === 'administrador';
  }
}
