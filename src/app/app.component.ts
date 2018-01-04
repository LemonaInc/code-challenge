import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitleName = 'Video Player';
  appDescriptionText = "Welcome to the video player";
  backButtonText = "Back";
  playVideoButtonText = "Play Video";
}
