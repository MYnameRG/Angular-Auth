import { Injectable } from '@angular/core';
import login from './data-file.json';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginData: any[] = login;

  constructor() { }

  verifyIdentity(data: any) {
    let result: string;
    for(let i=0;i<this.loginData.length;i++) {
      if(data.email === this.loginData[i].email) {
        result = this.loginData[i].token;
        if(data && result) {
          localStorage.setItem('token', result);
          return true;
        }
      }
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');

    if(!token) return false;

    let date = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);

    console.log(date, isExpired)

    return true;
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if(!token) return null;

    return new JwtHelperService().decodeToken(token);
  }
}
