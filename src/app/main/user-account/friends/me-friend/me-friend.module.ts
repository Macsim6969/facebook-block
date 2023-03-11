import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MeFriendComponent} from "./me-friend.component";
import { PublicationComponent } from './components/publication/publication.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {path: '', component: MeFriendComponent, children: [
      {path: 'blog', component: PublicationComponent, children: [
          {path: ':id', component: BlogComponent}
        ]},
    ]}
]

@NgModule({
  declarations: [
    MeFriendComponent,
    PublicationComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})

export class MeFriendModule{}
