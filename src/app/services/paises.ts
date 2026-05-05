import { Injectable } from '@angular/core';
import { Pais } from '../pais.model';

@Injectable({
  providedIn: 'root',
})
export class Paises {

  // Aquí está la información detallada de cada país
  private paises: Pais[] = [
    {
      id: 'noruega',
      nombre: 'NORUEGA',
      imagenFondo: 'noruega/fondo-noruega.jpeg',
      ciudades: [
        { nombre: 'Oslo', 
          imagenFondo: 'noruega/oslo.jpg', // La que sale en la pantalla principal del país
          imagenDetalle: 'noruega/imagen-oslo.jpg', // La nueva imagen para esta pantalla
          descripcion: 'Oslo, la capital de Noruega, es una ciudad que combina naturaleza, cultura contemporánea e historia vikinga en un entorno moderno y sostenible. Situada entre el fiordo de Oslo y extensos bosques, ofrece actividades para todo tipo de viajeros.'
        },

        { nombre: 'BERGEN', 
          imagenFondo: 'noruega/bergen.jfif',
          imagenDetalle: 'noruega/imagen-bergen.jpg' ,
          descripcion: 'Bergen, situada en la costa suroeste de Noruega, es conocida como la "puerta de entrada a los fiordos". Rodeada de montañas y mar, combina historia hanseática, paisajes espectaculares y una atmósfera encantadora con casas de madera de colores.'
        },
        { nombre: 'STAVANGER', 
          imagenFondo: 'noruega/stavanger.jpg',
          imagenDetalle: 'noruega/imagen-stavanger.jpg',
          descripcion: 'Stavanger, ubicada en la región suroeste de Noruega, es conocida como la capital del petróleo del país y como uno de los mejores puntos de partida para explorar algunos de los paisajes más espectaculares de Noruega. Combina un encantador casco antiguo de casas blancas de madera con una naturaleza impresionante.'
        }
      ]
    },
    {
      id: 'alemania',
      nombre: 'ALEMANIA',
      imagenFondo: 'alemania/fondo-alemania.jpeg',
      ciudades: [
        { nombre: 'BERLÍN', 
          imagenFondo: 'alemania/berlin.jpg',
          imagenDetalle:'alemania/',
          descripcion: ''
        },

        { nombre: 'MÚNICH', 
          imagenFondo: 'alemania/munich.jpg',
          imagenDetalle: 'alemania/',
          descripcion: ''
        },

        { nombre: 'STUTTGART', 
          imagenFondo: 'alemania/stuttgart.jpg',
          imagenDetalle: 'alemania/',
          descripcion: ''
        }
      ]
    },
    {
      id: 'francia',
      nombre: 'FRANCIA',
      imagenFondo: 'francia/fondo-francia.jpg',
      ciudades: [
        { nombre: 'PARÍS', imagenFondo: 'francia/paris.jpg' },
        { nombre: 'TOULOUSE', imagenFondo: 'francia/toulouse.jpg' },
        { nombre: 'MARSELLA', imagenFondo: 'francia/marsella.jpg' }
      ]
    }
  ];

  constructor() { }

  // Método para obtener los datos de un país por su id
  getPaisPorId(id: string): Pais | undefined {
    return this.paises.find(p => p.id === id);
  }
  
}
