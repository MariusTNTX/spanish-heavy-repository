import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const icsAccessGuard: CanActivateFn = () => {
  const router = inject(Router);
  const cookies = document.cookie
    .split('; ')
    .reduce((acc, cookie) => {
      const [key, value] = cookie.split('=');
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {} as Record<string, string>);
  const canAccess = cookies['ics'] === 'admin';
  !canAccess && router.navigate(['/events']);
  return canAccess;
};
