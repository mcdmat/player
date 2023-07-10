import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  // @Output() onEvent: EventEmitter<string> = new EventEmitter<string>();
  musicArray: string[] = [];
  constructor(private formBuilder: FormBuilder) {}

  formPlayer = this.formBuilder.group({
    add: ['file', Validators.required],
    select : ['']
  });

  addMusic(music: any) {
    this.musicArray.push(music);
  }

  deleteMusic(event: string) {
this.musicArray=this.musicArray.filter(item => event !== item);
  console.log(this.musicArray);
  
  }
}
