import { Component, Input } from '@angular/core';
import { Field } from '../field';

@Component({
  selector: 'app-model-displayer',
  templateUrl: './model-displayer.component.html',
  styleUrls: ['./model-displayer.component.scss']
})
export class ModelDisplayerComponent {

  @Input('modelName') name: string = 'cat';
  @Input('mode') mode: 'node' | 'commonjs' = 'node';
  @Input() fields: Field[] = [];

  constructor() {
  }

  public getContent() {
    const el = document.querySelector('#container') as HTMLElement;
    console.log(el?.innerText);
    return el?.innerText;
  }

  get formattedName() {
    if (this.name.includes('-')) {
      return this.name.split('-')
        .map(section => section[0].toUpperCase() + section.slice(1))
        .join('');
    }
    return this.name[0].toUpperCase() + this.name.slice(1);
  }
}
