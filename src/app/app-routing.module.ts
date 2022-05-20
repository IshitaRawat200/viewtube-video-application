import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsBarComponent } from './chips-bar/chips-bar.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { HomeComponent } from './home/home.component';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { RouterModule } from '@angular/router';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AuthorizeGuard } from './authorize.guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes=[
  {path: 'home', component: HomeComponent },
  {path: '', component: ChipsBarComponent },
  {path: 'chips-bar', component: ChipsBarComponent },
  {path: 'studio-upload', component: StudioUploadComponent },
    {path: 'studio-livestream', component: StudioUploadComponent },
  {path: 'video-upload', component: VideoUploadComponent,canActive:[AuthGuard],
  children:[
    {path:'',canActivateChild:[AuthorizeGuard],
    children:[
    {path: '', component: StudioUploadComponent },
    {path: 'home', component: HomeComponent },
    {path: 'studio-upload', component: StudioUploadComponent },
    {path: 'studio-livestream', component: StudioLivestreamComponent }
  ]},
]
  },
  {path:"", redirectTo:'/authentication', pathMatch:'full'},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: '', component: LoginComponent },
  {path: 'authentication', component: AuthenticationComponent,
  children:[
    {path: '', component: LoginComponent },
    {path: 'home', component: HomeComponent },
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent }
  ]}
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
