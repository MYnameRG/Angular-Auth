import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { NoAccessComponent } from './no-access/no-access.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, AdminComponent, HomeComponent, NoAccessComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService],
      },
      { path: 'no-access', component: NoAccessComponent }
    ]),
  ],
  providers: [
    AuthGuardService,
    AuthService,
    AdminAuthGuardService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
