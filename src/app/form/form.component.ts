import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private formBuilder: FormBuilder) {}

  formPlayer = this.formBuilder.group({
    add : [ 'file', Validators.required],
    // select : ['']
  })
}
