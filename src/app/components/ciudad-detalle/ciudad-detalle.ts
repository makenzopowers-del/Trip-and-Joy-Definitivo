import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Paises } from '../../services/paises';

@Component({
  selector: 'app-ciudad-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ciudad-detalle.html',
  styleUrl: './ciudad-detalle.css',
})
export class CiudadDetalle implements OnInit {
  pais: any;
  ciudad: any;

  constructor(
    private route: ActivatedRoute,
    private paisesService: Paises,
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // 1. Obtenemos los parámetros de la URL
    const paisId = this.route.snapshot.paramMap.get('paisId');
    const ciudadNombre = this.route.snapshot.paramMap.get('ciudadNombre');

    if (paisId && ciudadNombre) {
      // 2. Buscamos el país
      this.pais = this.paisesService.getPaisPorId(paisId);
      
      // 3. Buscamos la ciudad dentro de ese país
      if (this.pais && this.pais.ciudades) {
        this.ciudad = this.pais.ciudades.find((c: any) => 
          c.nombre.toLowerCase() === ciudadNombre.toLowerCase()
        );
      }
    }

    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0); // Que aparezca arriba del todo
    }
  }

  volver() {
    this.location.back(); // Vuelve a la pantalla anterior
  }
}
