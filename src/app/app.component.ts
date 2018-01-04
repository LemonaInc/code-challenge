import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import the JSON file
declare var require: any;
var jsonData = require('assets/app.json');

// Declare JSON constants
// const backButtonText = jsonData.backButtonText;
//
// console.log(backButtonText);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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

console.log(jsonData.videoURL)
