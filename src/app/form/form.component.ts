import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  email:string ='';
  message:string='';

  showSuccessAlert: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  send():void{
    console.log("email : " + this.email);
    console.log("message : " + this.message);
    this.email='';
    this.message='';
    this.showSuccessAlert=true;
  }

}
