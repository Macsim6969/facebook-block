import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {BlogsPageComponent} from "./blogs-page.component";
import {HttpClientModule} from "@angular/common/http";
import { BlogsGroupComponent } from './blogs-group/blogs-group.component';
import { PhotosBlockComponent } from './photos-block/photos-block.component';
import { PeopleBlockComponent } from './people-block/people-block.component';
import { ImageBlockComponent } from './share/component/image-block/image-block.component';

const routes: Routes = [
  {path: '', component: BlogsPageComponent, children: [
      {path: 'groups', component: BlogsGroupComponent},
      {path: 'photos', component: PhotosBlockComponent},
      {path: 'people', component: PeopleBlockComponent}
    ]}
]
@NgModule({
  declarations: [
    BlogsPageComponent,
    BlogsGroupComponent,
    PhotosBlockComponent,
    PeopleBlockComponent,
    ImageBlockComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})

export class BlogModule{}
