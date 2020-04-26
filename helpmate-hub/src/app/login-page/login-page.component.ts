import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  infoMessage: string = "Hello Dany!";

  constructor() { }

  ngOnInit(): void {
  }

  clickMe(): void {
    this.infoMessage = 'Hello There!';
  }

}
