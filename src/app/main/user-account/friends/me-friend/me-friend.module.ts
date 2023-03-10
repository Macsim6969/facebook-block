import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MeFriendComponent} from "./me-friend.component";

const routes: Routes = [
  {path: '', component: MeFriendComponent}
]

@NgModule({
  declarations: [
    MeFriendComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})

export class MeFriendModule{}
