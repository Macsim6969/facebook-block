import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth.component";
import { LoginComponent } from './login/login.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: AuthComponent, children: [
      {path: '', component: LoginComponent}
    ]}
]
@NgModule({
  declarations:[
    LoginComponent,
    LogFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[]
})

export class AuthModule{}
