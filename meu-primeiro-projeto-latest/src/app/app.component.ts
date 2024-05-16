import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // templateUrl: './app.component.html',
  template: `
    <router-outlet />
    <h1>Curso de Angular</h1>
    <h2>Componentes</h2>
  `,
  // styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
