import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {MainModule} from "./main/main.module";

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
