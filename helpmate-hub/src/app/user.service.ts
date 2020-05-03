import { Injectable } from '@angular/core';
import { User } from './user.model';
import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = USERS;

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
}
