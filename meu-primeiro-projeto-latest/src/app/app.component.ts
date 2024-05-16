import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  // templateUrl: './app.component.html',
  template: `
    <!-- <router-outlet /> -->
    <h1>Curso de Angular</h1>
    Antigo: <app-new-component></app-new-component>
    Novo: <app-new-component />
  `,
  // styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
