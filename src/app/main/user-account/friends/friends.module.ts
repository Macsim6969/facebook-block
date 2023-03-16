import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {AllFriendsComponent} from './all-friends/all-friends.component';
import {FavouriteFriendsComponent} from './favourite-friends/favourite-friends.component';
import {UserService} from "../shared/user.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FiltersPipes} from "./shared/filter.pipe";
import { OtherFriendsComponent } from './other-friends/other-friends.component';
import { PeopleIdComponent } from './other-friends/people-id/people-id.component';


const routes: Routes = [
  {path: '', component: AllFriendsComponent},
  {path: 'favourites', component: FavouriteFriendsComponent },
  {path: 'other-people', component: OtherFriendsComponent, children: [
      {path: ':id', component: PeopleIdComponent}
    ]},
  {path: ':id', loadChildren: () => import('./me-friend/me-friend.module').then(m => m.MeFriendModule)},
]

@NgModule({
  declarations: [
    AllFriendsComponent,
    FavouriteFriendsComponent,
    FiltersPipes,
    OtherFriendsComponent,
    PeopleIdComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ],
  providers: [UserService]
})

export class FriendsModule {
}
