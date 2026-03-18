import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login'; 
import { Registro } from './components/registro/registro';

export const routes: Routes = [
    { path: '', component: Home },      // Ruta por defecto (El inicio)
    { path: 'login', component: Login }, // Ruta para el login
    { path: 'registro', component: Registro }, // Ruta para el registro
    { path: '**', redirectTo: '' } // Si escriben una ruta que no existe, los mandamos a la home
];
