import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login'; 
import { Registro } from './components/registro/registro';
import { QueOfrecemos } from './components/que-ofrecemos/que-ofrecemos';

export const routes: Routes = [
    { path: '', component: Home },      // Ruta por defecto (El inicio)
    { path: 'login', component: Login }, // Ruta para el login
    { path: 'registro', component: Registro }, // Ruta para el registro
    { path: 'que-ofrecemos', component: QueOfrecemos }, //Ruta para Qué Ofrecemos?
    { path: '**', redirectTo: '' } // Si escriben una ruta que no existe, los mandamos a la home
];
