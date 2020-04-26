import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  user: User;

  constructor(private router: Router) {
    this.user = new User('admin@admin.com', 'admin', 'Admin', 'Admin', 'AdminF');
   }

  ngOnInit(): void {
    
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

}
