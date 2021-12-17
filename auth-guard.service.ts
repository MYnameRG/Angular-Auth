import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: any, state: RouterStateSnapshot) {
    if(this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login'], { queryParams: { returnURL: state.url } });
    return false;
  }
}
