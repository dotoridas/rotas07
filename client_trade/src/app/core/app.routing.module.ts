import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {LoginComponent} from "../login/login.component";
import {UserComponent} from "../user/user.component";

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent}
];

/*@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }*/
export const routing = RouterModule.forRoot(routes);