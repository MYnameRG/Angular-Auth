import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private service: AuthService, private route: Router, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit(e: Event) {
    e.preventDefault();
    let checked = this.service.verifyIdentity(this.loginForm.value);
    if(checked) {
      let returnUrl = this.activateRoute.snapshot.queryParamMap.get('returnURL');
      this.route.navigate([returnUrl || '/']);
    }
    else this.invalidLogin = true;
  }
}
