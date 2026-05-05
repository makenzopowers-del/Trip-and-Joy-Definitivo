export interface Ciudad {
  nombre: string;      // El texto que va sobre la tarjeta (ej. 'OSLO', 'BERLÍN')
  imagenFondo?: string; // La ruta de la imagen de esa ciudad en concreto
  imagenDetalle?: string;
  descripcion?: string; // Descripcion de la ciudad
}

export interface Pais {
  id: string;          // El identificador para la URL (ej. 'noruega', 'alemania')
  nombre: string;      // El título grande del panel central (ej. 'NORUEGA')
  imagenFondo: string; // La ruta de la imagen gigante que ocupa toda la pantalla
  ciudades: Ciudad[];  // El array que contendrá las 3 ciudades de ese país
  infoOpcional?: string; // (Opcional) Por si más adelante quieres que el botón 'i' muestre un texto
}