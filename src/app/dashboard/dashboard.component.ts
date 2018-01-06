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
  constructor() { }
ngOnInit() {
}

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
}
