import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  // Text Interpolation
  public name = 'Celso Vinicius';
  public age = 22;
  public condition = this.age > 18 ? 'Maior' : 'Menor';
  public sum(val1:number, val2:number){
    return val1+val2;
  }

  // Property Binding
  public isDisabled = false;
  public srcValue = 'https://vidafullstack.com.br/wp-content/uploads/2023/12/angular-400x250.jpg';
}
