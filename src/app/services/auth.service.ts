import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn: boolean = false;

  login(loginId: string, password: string) {
    if (loginId === 'meen@welcome' && password === 'meen@2000') {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.isLoggedIn = false;
  }
}
