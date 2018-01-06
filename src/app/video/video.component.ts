import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import the JSON file
declare var require: any;
var jsonData = require('assets/app.json');

@Component({
  selector: 'app-dashboard',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {
  menuItems: any[];
  constructor() { }
ngOnInit() {
}

  // Declare the JSON data names, image and video url's.
  appTitleName = jsonData.appTitleName ;
  appDescriptionText = jsonData.appDescription;
  appParagraphText = jsonData.paragraph;
  backButtonText =  jsonData.backButton;
  playVideoButtonText = jsonData.playVideoButton;
  skipVideoButtonText = jsonData.skipVideoButton;
  backgroundImageNight = jsonData.backgroundImageNight;
  videoURL = jsonData.videoURL;
}
