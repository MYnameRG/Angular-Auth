import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    if(this.authService.currentUser?.admin) return true;

    this.router.navigate(['/no-access']);
    return false;
  }
}
