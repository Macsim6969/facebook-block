import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {AllFriendsComponent} from './all-friends/all-friends.component';
import {FavouriteFriendsComponent} from './favourite-friends/favourite-friends.component';

const routes: Routes = [
  {path: 'all', component: AllFriendsComponent},
  {path: 'favourites', component: FavouriteFriendsComponent }
]

@NgModule({
  declarations: [
    AllFriendsComponent,
    FavouriteFriendsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: []
})

export class FriendsModule {
}
