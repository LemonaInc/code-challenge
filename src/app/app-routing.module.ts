import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent }  from './not-found.component';
// Import the dashboard component
import { DashboardComponent } from './dashboard/dashboard.component'
// Import the video component
import { VideoComponent } from './video/video.component'

// Define the app routes
const appRoutes: Routes = [
  // { path: '**', component: PageNotFoundComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'video', component: VideoComponent },
  // If there is no path then redirect to the video page
  { path: '',   redirectTo: '/video', pathMatch: 'full' }
];

@NgModule({
  imports: [

    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
