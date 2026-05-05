import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})

export class AdminDashboard {
  // Estos números en un futuro vendrán de tu base de datos
  totalActividades = 1560;
  totalUsuarios = 12500;
  totalAlojamientos = 1250;

  constructor(private router: Router) {}

  // Funciones preparadas para cuando quieras dar vida a los botones
  irAGestionarActividades() {
    console.log('Ir a gestionar actividades');
    // this.router.navigate(['/admin/actividades']);
  }
}
