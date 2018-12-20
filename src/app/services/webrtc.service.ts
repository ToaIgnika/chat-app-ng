import { Injectable } from '@angular/core';
import adapter from 'webrtc-adapter';

@Injectable({
  providedIn: 'root'
})
export class WebrtcService {
  public stream : any;
  public constraints : any =  {
    audio: true,
    video: true
  };
  constructor() { }

  getUserMedia() {
    try {
      this.stream = navigator.mediaDevices.getUserMedia(this.constraints);
      console.log("success: " + this.stream );
      //e.target.disabled = true;
    } catch (e) {
      //handleError(e);
      console.log(e);
    }  
  }
}
