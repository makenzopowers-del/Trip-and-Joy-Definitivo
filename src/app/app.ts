import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Login } from './components/login/login';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'tripandjoy2';
  isLoginVisible: boolean = false;
}
