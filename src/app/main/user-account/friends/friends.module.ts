import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {AllFriendsComponent} from './all-friends/all-friends.component';
import {FavouriteFriendsComponent} from './favourite-friends/favourite-friends.component';
import {UserService} from "../shared/user.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FiltersPipes} from "./shared/filter.pipe";
import { MeFriendComponent } from './me-friend/me-friend.component';


const routes: Routes = [
  {path: '', component: AllFriendsComponent},
  {path: 'favourites', component: FavouriteFriendsComponent },
  {path: ':id', component: MeFriendComponent},
]

@NgModule({
  declarations: [
    AllFriendsComponent,
    FavouriteFriendsComponent,
    FiltersPipes,
    MeFriendComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [UserService]
})

export class FriendsModule {
}
