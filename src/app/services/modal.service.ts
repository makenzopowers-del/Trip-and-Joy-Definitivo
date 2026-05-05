import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  // EventEmitter para abrir el modal de Plan de Viaje
  abrirPlanViaje = new EventEmitter<void>();

  // EventEmitter para abrir el modal de Login/Registro
  abrirLogin = new EventEmitter<void>();

  constructor() { }
}