import { Component, OnInit } from '@angular/core';

declare var require: any;
var jsonData = require('assets/app.json');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  menuItems: any[];
  constructor() {
  }

  // Play video audio when the playback button is clicked
  // Create audio and playback

  callAudioPlayback() {
   var playVideoSoundFX = new Audio();
   var checkAudioBool = true;

     if (checkAudioBool === true && playVideoSoundFX.paused) {
      playVideoSoundFX.src = "/assets/audio/Ocean_Waves-soundfx.mp3";
      playVideoSoundFX.load();
      playVideoSoundFX.loop = false;
      playVideoSoundFX.play();
      return;
  }

};

ngOnInit() {
};

  // Declare the JSON data names, image and video url's.
  videoDashboardTitle = jsonData.videoDashboardTitle;
  appTitleName = jsonData.appTitleName ;
  appDescriptionText = jsonData.appDescription;
  appParagraphText = jsonData.paragraph;
  backButtonText =  jsonData.backButton;
  playVideoButtonText = jsonData.playVideoButton;
  skipVideoButtonText = jsonData.skipVideoButton;
  backgroundImage = jsonData.backgroundImage;
  videoURL = jsonData.videoURL;
  videoSoundFX = jsonData.videoSoundFX;
}
