import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { ChipsBarComponent } from './chips-bar/chips-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { RouterModule } from '@angular/router';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NotfoundComponent } from './notfound/notfound.component';
//import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    VideoContentComponent,
    ChipsBarComponent,
    StudioUploadComponent,
    StudioLivestreamComponent,
    VideoUploadComponent,
    HomeComponent,
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent
    
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function appRoutes(appRoutes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

