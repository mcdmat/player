import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  blobItem: any;
  objectToPush: any;
  @Output() addMusic = new EventEmitter<string | null>();
  @Output() addNameMusic = new EventEmitter<string | null>();

  constructor(private readonly formBuilder: FormBuilder) {}

  formPlayer = this.formBuilder.group({
    add: ['file', Validators.required],
    select: [''],
  });

  inputChange(event: any) {
    this.blobItem = {
      blobUrl: URL.createObjectURL(event.target.files[0]),
      musicName: event.target.files[0].name,
    };

    return this.blobItem;
  }
  addTrack() {
    if (this.formPlayer.controls.add.value === 'url') {
      this.objectToPush = {
        blobUrl: this.formPlayer.controls['select'].value,
        musicName: this.formPlayer.controls['select'].value,
      };
    } else {
      this.objectToPush = this.blobItem;
    }
    this.addMusic.emit(this.objectToPush);
    this.formPlayer.reset({ add: 'file' });
  }
}
