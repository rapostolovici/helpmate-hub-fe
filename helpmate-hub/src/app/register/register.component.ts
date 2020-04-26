import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateToFinalStep(): void {
    this.router.navigate(['/register-final']);
  }

  backToLogin(): void {
    this.router.navigate(['/login']);
  }

}
