import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';


export const adminGuard: CanActivateFn = (route, state) => {

  const auth = inject(Auth); 
  const router = inject(Router);

  // Le preguntamos a tu servicio si el usuario actual es administrador
  if (auth.esAdministrador()) {
    console.log('¡El portero te deja pasar! Eres admin.');
    return true; // Vía libre
  } else {
    console.log('¡Alto ahí! No eres admin. De vuelta al inicio.');
    router.navigate(['/']); // Lo mandamos a la página de inicio
    return false; // Bloqueamos el paso
  }
};
