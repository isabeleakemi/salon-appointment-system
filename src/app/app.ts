import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Agendamento } from './components/agendamento/agendamento';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Agendamento],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('salon-appointment-system');
}
