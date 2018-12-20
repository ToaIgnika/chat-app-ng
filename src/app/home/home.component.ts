import { Component, OnInit } from '@angular/core';
import adapter from 'webrtc-adapter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public stream : any;
  public constraints : any =  {
    audio: true,
    video: true
  };

  constructor() {

   }

  ngOnInit() {
  }

  ngAfterViewInit(){
    try {
      this.stream = navigator.mediaDevices.getUserMedia(this.constraints);
      
      this.handleSuccess(this.stream);
      //e.target.disabled = true;
    } catch (e) {
      //handleError(e);
      console.log(e);
    }  
  }


   handleSuccess(stream) {
    const video = document.getElementById('myVideo');
    console.log('Got stream with constraints:');
    URL.createObjectURL(stream);
    video.srcSource = stream;
  }
}
