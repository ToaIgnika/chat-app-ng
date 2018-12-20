import { Injectable } from '@angular/core';
import adapter from 'webrtc-adapter';

@Injectable({
  providedIn: 'root'
})


export class WebrtcService {

  public constraints : any =  {
    audio: false,
    video: true
  };

  
  constructor() { }

  showUser(videoObject) {
    try {
      navigator.mediaDevices
      .getUserMedia(this.constraints)
      .then(stream => (videoObject.nativeElement.srcObject = stream));
  //    .then(stream => this.pc.addStream(stream));
    } catch (e) {
      //handleError(e);
      console.log(e);
    }  
  }

  showRemote() {

  }
}
