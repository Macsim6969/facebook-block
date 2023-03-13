import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {UserAccountComponent} from "./user-account.component";
import {PublicationComponent} from "./publication/publication.component";
import { AboutComponent } from './about/about.component';
import { FriendsComponent } from './friends/friends.component';
import { PhotosComponent } from './photos/photos.component';
import { MusicComponent } from './music/music.component';
import { MeBlogComponent } from './publication/me-blog/me-blog.component';
import {YouKnowPeopleComponent} from "../../shared/component/you-know-people/you-know-people.component";
import { EditComponent } from './edit/edit.component';
import {FormsModule} from "@angular/forms";
import { SettingPhotoComponent } from './shared/component/setting-photo/setting-photo.component';


const routes: Routes = [
  {path: '', component: UserAccountComponent, children: [
      {path: '', component: AboutComponent},
      {path: 'my-blog', component: PublicationComponent, children: [
          {path: ':id', component: MeBlogComponent}
        ]},
      {path: 'my-friends', component: FriendsComponent, children: [
          {path: '', loadChildren: () => import('./friends/friends.module').then(m => m.FriendsModule)}
        ]},
      {path: 'photos', component: PhotosComponent},
      {path: 'music', component: MusicComponent},
      {path: 'edit', component: EditComponent}
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
    MeBlogComponent,
    YouKnowPeopleComponent,
    EditComponent,
    SettingPhotoComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule

    ],
  exports: [
    RouterModule
  ]
})

export class UserAccountModule{}
