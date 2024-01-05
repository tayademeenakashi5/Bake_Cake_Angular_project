import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject AuthService instance
  const router = inject(Router); // Use the singleton Router instance

  if (!authService.isLoggedIn) {
    router.navigate(['login']);
    return false;
  } else return true;
};
