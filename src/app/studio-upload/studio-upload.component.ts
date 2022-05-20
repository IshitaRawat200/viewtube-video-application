import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-studio-upload',
  templateUrl: './studio-upload.component.html',
  styleUrls: ['./studio-upload.component.css']
})
export class StudioUploadComponent implements OnInit {
 bool="true";
  constructor() { }

  ngOnInit(): void {
  }
  submitDetails(formDetails:NgForm){
    alert("video is uploaded");

  }

}
