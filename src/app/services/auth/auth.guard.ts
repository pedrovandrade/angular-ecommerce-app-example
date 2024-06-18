import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

/**
 * Function to verify if a router must be enabled or disabled
 * according to wheter the user is authenticated or not. If
 * he is not (thus the route must be disabled), a redirection
 * to the login page is made.
 * @returns Enable status for the route (enabled = `true`,
 * disabled = `false`)
 */
export const authGuard: CanActivateFn = () => {
  const authService  =  inject(AuthService)
  const router  =  inject(Router)

  if (authService.isLoggedIn()) {
    return true
  }
  router.navigate(['/login'])
  return false
}
