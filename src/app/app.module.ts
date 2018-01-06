// IMPORT MODULES
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

// IMPORT COMPONENTS
import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { PageNotFoundComponent }   from './not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { VideoComponent } from './video/video.component'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent,
    VideoComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
