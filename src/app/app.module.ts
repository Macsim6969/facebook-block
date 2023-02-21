import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {MainModule} from "./main/main.module";
import { HelpPeopleComponent } from './shared/component/help-people/help-people.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        HelpPeopleComponent
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
