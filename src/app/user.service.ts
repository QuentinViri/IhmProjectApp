import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersPath = 'assets/users.json';

  constructor(private http: HttpClient) { }

  public findAllUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.usersPath);
  }
}
