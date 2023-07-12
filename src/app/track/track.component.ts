import { Component, EventEmitter, Output } from '@angular/core';
import { MethodsService } from '../methods.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css'],
})
export class TrackComponent {
  @Output() deleteMusic = new EventEmitter<string>();
  @Output() playMusic = new EventEmitter<string>();
  constructor(protected ms: MethodsService) {}

  playTrack(index:number) {
    this.playMusic.emit(this.ms.musicArray[index].blobUrl);   
  }
  download() {}
  deleteTrack(index: number) {
    this.deleteMusic.emit(this.ms.musicArray[index]);
  }
}
