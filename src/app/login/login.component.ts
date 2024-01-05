import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginId: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  validateAdmin() {
    this.authService.login(this.loginId, this.password);
    if (this.authService.isLoggedIn) {
      this.router.navigate(['orderDashboard']);
    }else{
      alert("You have entered wrong Id or Password!")
      this.router.navigate(["login"]);
    }
  }
}
