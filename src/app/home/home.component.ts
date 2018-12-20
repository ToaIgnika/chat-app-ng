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
 
  public constraints : any =  {
    audio: false,
    video: true
  };

  constructor(public webrtc : WebrtcService){

  }

  ngOnInit(){
    this.webrtc.showUser(this.me);
  }

  //https://www.codeproject.com/Articles/1194400/%2FArticles%2F1194400%2FWebRTC-using-Angular-and-AngularFire
}
