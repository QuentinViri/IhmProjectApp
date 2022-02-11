import { Component, OnInit } from '@angular/core';
import {User} from "../user.model";
import {UserService} from "../user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[] | undefined
  selectedUser?:User;
  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.userService.findAllUsers().subscribe((data:User[]) => {this.users = data})
  }

  onSelect(user:User) : void{
    this.selectedUser = user;
  }
}
