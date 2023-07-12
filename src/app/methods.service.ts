import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MethodsService {
  musicArray: any[] = [];
  constructor() {}

  addMusic(music: any): object[] {
    this.musicArray.push(music);
    
    return this.musicArray;
  }
 
  deleteMusic(music: any) {
    this.musicArray = this.musicArray.filter((e) => music !== e);
  }
  playAudio(music: string) {
    let audio = new Audio();
    audio.src = music;
    audio.load();
    audio.play();
  }
}
