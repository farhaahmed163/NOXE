import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const Auth = inject(AuthService);
  const _Router = inject(Router)
  if (Auth.userData.getValue() != null) {
    return true

  }
  else {
    _Router.navigate(["/login"])
    return false

  }
};
