import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { GoogleMapImgComponent } from './google-map-img/google-map-img/google-map-img.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoComponent } from './logo/logo.component';
import { RegisterComponent } from './register/register.component';
import { RegisterStep2Component } from './register-step2/register-step2.component';
import { AdministrationComponent } from './administration/administration.component';
import { UserDescriptionComponent } from './user-description/user-description.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapImgComponent,
    LoginPageComponent,
    LogoComponent,
    RegisterComponent,
    RegisterStep2Component,
    AdministrationComponent,
    UserDescriptionComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
