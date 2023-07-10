import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent {
  @Input() music!: string;
  @Output() deleteMusic: EventEmitter<string> = new EventEmitter();
  onDelete() {
    this.deleteMusic.emit(this.music);
  }
  playAudio(){
    let audio = new Audio();
    audio.src = this.music;
    audio.load();
    audio.play();
  }

}
