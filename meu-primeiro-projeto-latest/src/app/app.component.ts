import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent],
  // templateUrl: './app.component.html',
  template: `
    <!-- <router-outlet /> -->
    <!-- <app-new-component /> -->
    <!-- <app-template-binding /> -->
    <h1>Curso De Angular</h1>
    <app-template-variables />
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
