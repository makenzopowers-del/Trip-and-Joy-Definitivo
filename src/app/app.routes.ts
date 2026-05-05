import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login'; 
import { Registro } from './components/registro/registro';
import { QueOfrecemos } from './components/que-ofrecemos/que-ofrecemos';
import { Valoraciones } from './components/valoraciones/valoraciones';
import { PaisDetalle } from './components/pais-detalle/pais-detalle';
import { CiudadDetalle } from './components/ciudad-detalle/ciudad-detalle';
import { adminGuard } from './guards/admin-guard';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';

export const routes: Routes = [
    { path: '', component: Home },      // Ruta por defecto (El inicio)
    { path: 'login', component: Login }, // Ruta para el login
    { path: 'registro', component: Registro }, // Ruta para el registro
    { path: 'que-ofrecemos', component: QueOfrecemos }, //Ruta para Qué Ofrecemos?
    { path: 'valoraciones', component: Valoraciones }, // Ruta Valoraciones
    { path: 'pais/:nombre', component: PaisDetalle }, // Ruta para los paises
    { path: 'pais/:paisId/ciudad/:ciudadNombre', component: CiudadDetalle }, // Ruta para las ciudades
    { path: 'admin', component: AdminDashboard, canActivate: [adminGuard] },
    { path: '**', redirectTo: '' } // Si escriben una ruta que no existe, los mandamos a la home 
];
