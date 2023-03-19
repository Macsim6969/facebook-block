import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogGuards} from "./auth/service/log.guards";
import {ErrorPageComponent} from "./main/error-page/error-page.component";

const routes: Routes = [
  {path: '', loadChildren: () => import('./main/main.module').then(comp => comp.MainModule), canActivate: [LogGuards]},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(comp => comp.AuthModule)},
  {path: '**', pathMatch: "full", component: ErrorPageComponent}
];

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
