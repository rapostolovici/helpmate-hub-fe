import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { GoogleMapImgComponent } from './google-map-img/google-map-img/google-map-img.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoComponent } from './logo/logo.component';
import { from } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { RegisterStep2Component } from './register-step2/register-step2.component';
import { AdministrationComponent } from './administration/administration.component';

const appRoutes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'register-final', component: RegisterStep2Component},
  { path: 'admin', component: AdministrationComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapImgComponent,
    LoginPageComponent,
    LogoComponent,
    RegisterComponent,
    RegisterStep2Component,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
