import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewTube';
   status:string="";
  constructor(){}
  sidenav(){
    this.status="clicked";
  }

}
