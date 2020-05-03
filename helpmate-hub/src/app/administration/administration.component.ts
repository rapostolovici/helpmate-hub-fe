import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  user: User;

  users: User[] = USERS;

  constructor() {}

  ngOnInit(): void {
    
  }

}
