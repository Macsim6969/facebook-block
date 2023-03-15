import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogGuards} from "./auth/service/log.guards";

const routes: Routes = [
  {path: '', loadChildren: () => import('./main/main.module').then(comp => comp.MainModule), canActivate: [LogGuards]},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(comp => comp.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
