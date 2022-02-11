import { Component, Input, OnInit } from '@angular/core';
import {User} from "../user.model";


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user?:User;

  constructor() { }

  ngOnInit(): void {
  }

}
