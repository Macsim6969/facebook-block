import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MeFriendComponent} from "./me-friend.component";
import { PublicationComponent } from './components/publication/publication.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { PhotoComponent } from './components/photo/photo.component';
import { FriendComponent } from './components/friend/friend.component';
import {FormsModule} from "@angular/forms";
import {FriendsModule} from "../friends.module";

const routes: Routes = [
  {path: '', component: MeFriendComponent, children: [
      {path: '', component: AboutComponent},
      {path: 'blog', component: PublicationComponent, children: [
          {path: ':id', component: BlogComponent}
        ]},
      {path: 'friend', component: FriendComponent},
      {path: 'photo', component: PhotoComponent}
    ]}
]

@NgModule({
  declarations: [
    MeFriendComponent,
    PublicationComponent,
    BlogComponent,
    AboutComponent,
    PhotoComponent,
    FriendComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: []
})

export class MeFriendModule{}
