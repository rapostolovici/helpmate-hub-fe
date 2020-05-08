import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.css']
})
export class UserDescriptionComponent implements OnInit {
  @Input() user: User;
  @Input() openUserDescription: boolean;

  constructor( private route: ActivatedRoute,
               private location: Location,
               private userService: UserService ) { }

  ngOnInit(): void {
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

}
