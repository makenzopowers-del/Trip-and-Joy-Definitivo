import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-que-ofrecemos',
  imports: [RouterLink],
  templateUrl: './que-ofrecemos.html',
  styleUrl: './que-ofrecemos.css',
})
export class QueOfrecemos {
  @Output() abrirLoginModal = new EventEmitter<void>();

  abrirLogin() {
    this.abrirLoginModal.emit();
  }
}
