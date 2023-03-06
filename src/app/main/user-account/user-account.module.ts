import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {UserAccountComponent} from "./user-account.component";
import {PublicationComponent} from "./publication/publication.component";
import { AboutComponent } from './about/about.component';
import { FriendsComponent } from './friends/friends.component';
import { PhotosComponent } from './photos/photos.component';
import { MusicComponent } from './music/music.component';
import {HelpPeopleComponent} from "../../shared/component/help-people/help-people.component";


const routes: Routes = [
  {path: '', component: UserAccountComponent, children: [
      {path: '', component: PublicationComponent},
      {path: 'about', component: AboutComponent},
      {path: 'my-friends', component: FriendsComponent, children: [
          {path: '', loadChildren: () => import('./friends/friends.module').then(m => m.FriendsModule)}
        ]},
      {path: 'photos', component: PhotosComponent},
      {path: 'music', component: MusicComponent}
    ]}
]
@NgModule({
  declarations: [
    UserAccountComponent,
    PublicationComponent,
    AboutComponent,
    FriendsComponent,
    PhotosComponent,
    MusicComponent,
    HelpPeopleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports: [
    RouterModule
  ]
})

export class UserAccountModule{}
