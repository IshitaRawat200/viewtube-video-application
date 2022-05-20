import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studio-livestream',
  templateUrl: './studio-livestream.component.html',
  styleUrls: ['./studio-livestream.component.css']
})
export class StudioLivestreamComponent implements OnInit {
 addForm!:FormGroup;
  constructor(formBuilder:FormBuilder) 
  {
    const selectedDate = { date: new Date() };
    this.addForm=new FormGroup({
      'Title':new FormControl('',([Validators.required,Validators.maxLength(100)])
    ),
      'startDate1':new FormControl(selectedDate,([Validators.required,Validators.maxLength(100)])),
      'startTime':new FormControl(''),
      'endTime':new FormControl(''),
      'endDate':new FormControl(''),
      'textArea':new FormControl(''),
      'guestList':new FormControl('')
    })
   }

  ngOnInit(): void {
  }
  savedet(){
    console.log('Saved Reg Details');
    console.log(this.addForm!.valueChanges.subscribe(data=>console.log(data)));
    alert("Your live stream event is scheduled successfully");
  }

}
