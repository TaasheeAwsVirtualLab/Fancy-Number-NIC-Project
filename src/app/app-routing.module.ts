import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ActionComponent } from './action/action.component';
const routes: Routes = [
  // {path:"", redirectTo:"sign-up", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"sign-up", component:SignUpComponent},
  {path:"home", component:HomeComponent},
  {path:"action",component:ActionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
