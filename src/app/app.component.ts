import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Field } from './field';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  typeOptions: { name:string, value:string }[] = [
    {
      name: 'string',
      value: 'String',
    },
    {
      name: 'number',
      value: 'Number',
    },
    {
      name: 'date',
      value: 'Date',
    },
  ];
  modelForm = this.fb.group({
    name: ['Cat'],
    format: ['js'],
    fields: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
    ) {
  }

  addField() {
    const field = this.fb.group({
      name: this.fb.control('name'),
      isArray: this.fb.control(false),
      type: this.fb.control('String'),
      default: this.fb.control(""),
    });
    (this.modelForm.get('fields') as FormArray).push(field);
  }

  removeField(field: number) {
    (this.modelForm.get('fields') as FormArray).removeAt(field);
  }

  download(content: any) {
    const name = this.name;
    const formattedName = name.includes('-') ? name.split('-').map(section => section[0].toUpperCase() + section.slice(1)).join('') : name[0].toUpperCase() + name.slice(1);
    const file = new Blob([content], { type:'text/javascript' });
    saveAs(file, formattedName+'.'+this.format);
  }

  get name() {
    return this.modelForm.get('name')?.value ?? '';
  }

  get format() {
    return this.modelForm.get('format')?.value ?? '';
  }

  get fields() {
    return this.modelForm.get('fields') as FormArray<FormGroup>;
  }

  get fieldsVal() {
    return this.fields.value as any as Field[];
  }
}
