import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {MainModule} from "./main/main.module";
import { LoadingComponent } from './shared/component/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [],
  exports: [
    LoadingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
