import { CanActivateFn } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const user = localStorage.getItem('user');
  return !!user;
};
