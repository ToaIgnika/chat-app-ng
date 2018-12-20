import { Component, OnInit, ViewChild } from '@angular/core';
import adapter from 'webrtc-adapter';
import { WebrtcService } from '../services/webrtc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("me") me : any;
  stream = "";
  public constraints : any =  {
    audio: true,
    video: true
  };

  constructor(public webrtc : WebrtcService){

  }

  ngOnInit(){
    navigator.mediaDevices
    .getUserMedia(this.constraints)
    .then(stream => (this.me.nativeElement.srcObject = stream));
//    .then(stream => this.pc.addStream(stream));
  }

  //https://www.codeproject.com/Articles/1194400/%2FArticles%2F1194400%2FWebRTC-using-Angular-and-AngularFire
}
