import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { USERS } from '../mock-users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  user: User;

  users: User[] = [];

  constructor(private userService:UserService) {}

  ngOnInit(): void {
    //TODO APC: fix the false user by adding new method in the service
    this.user = new User(12, 'ee', 'admin', 'aaa', 'admin', 'admin');
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
    ;
  }

}
