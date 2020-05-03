import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  user: User;

  users: User[] = [
    new User('email', 'category', 'firstName', 'lastName', ''),
    new User('email2', 'category', 'firstName', 'lastName', ''),
    new User('email3', 'category', 'firstName', 'lastName', '')
  ];

  constructor() {
    this.user = new User('admin@admin.com', 'admin', 'Admin', 'Admin', 'AdminF');// TODO APC; removefrom constructor, best practice init in ngOnInit!!!!
   }

  ngOnInit(): void {
    
  }

}
