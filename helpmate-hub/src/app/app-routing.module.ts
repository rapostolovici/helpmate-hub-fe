import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { RegisterStep2Component } from './register-step2/register-step2.component';
import { AdministrationComponent } from './administration/administration.component';
import { UserDescriptionComponent } from './user-description/user-description.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'register-final', component: RegisterStep2Component},
  { path: 'admin', component: AdministrationComponent},
  { path: 'description/:id', component: UserDescriptionComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
