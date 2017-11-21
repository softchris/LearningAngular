import { FormBuilder, FormGroup } from '@angular/forms'
import { Component } from "@angular/core";
import { minValueValidator } from "./min.value.validator";

@Component({
  selector: 'person-form',
  template: `
  <form (ngSubmit)="submit(formGroup)" [formGroup]="formGroup">
    <input formControlName="name" placeholder="full name">
    <input formControlName="age" placeholder="age">
    <div formGroupName='address'>
      <input formControlName="city" placeholder="city" >
      <input formControlName="country" placeholder="country">
    </div>
    <div *ngIf="formGroup.get('age').hasError('minValue')">
      You must be at least 18
    </div>
    <button>Save</button>
  </form>
  `
})
export class FormComponent {
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: '',
      age: [0, minValueValidator(18)],
      address: this.formBuilder.group({
        city: 'London',
        country: 'UK'
      })
    });
  }

  submit() { }
}
