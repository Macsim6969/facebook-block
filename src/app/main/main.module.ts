import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HomePageComponent} from "./home-page/home-page.component";
import {HeaderComponent} from "../shared/component/header/header.component";
import {ContactsComponent} from "../shared/component/contacts/contacts.component";
import {MainContentComponent} from "../shared/component/main-content/main-content.component";
import {AuthInfoComponent} from "../shared/component/auth-info/auth-info.component";
import {HttpClientModule} from "@angular/common/http";
import {FilterPipe} from "../shared/pipe/filter.pipe";
import {FormsModule} from "@angular/forms";
import { MainHomeComponent } from './home-page/main-home/main-home.component';
import {MainComponent} from "./main.component";
import { SettingPageComponent } from './setting-page/setting-page.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
      {path: '', component: HomePageComponent, children: [
          {path: '', component: MainHomeComponent}
        ]},
      {path: 'blogs', loadChildren: () => import('./blogs-page/blog.module').then(m => m.BlogModule) },
      {path: 'user', loadChildren: () => import('./user-account/user-account.module').then(m => m.UserAccountModule)},
      {path: 'setting', component: SettingPageComponent}
    ]}
]
@NgModule({
  declarations:[
    MainComponent,
    HomePageComponent,
    HeaderComponent,
    ContactsComponent,
    AuthInfoComponent,
    MainContentComponent,
    FilterPipe,
    MainHomeComponent,
    SettingPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule,
    FilterPipe
  ]
})

export class MainModule{}
