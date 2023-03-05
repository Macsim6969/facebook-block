import { Component } from '@angular/core';
import {Contacts} from "../../../../shared/interfaces/contacts";
import {MainService} from "../../../../shared/services/main.service";
import {UserService} from "../../shared/user.service";
import {ContactService} from "../../../../shared/services/contact.service";
import {People} from "../../../../shared/interfaces/allBlogs";

@Component({
  selector: 'app-all-friends',
  templateUrl: './all-friends.component.html',
  styleUrls: ['./all-friends.component.scss']
})
export class AllFriendsComponent {
  showId: string = ''
  showMore: boolean = false
  friends: Contacts[]
  favourite: boolean =false
search: string =''
  constructor(private mainService: MainService, private userService: UserService, private contactService: ContactService) {
  }
  ngOnInit() {
    this.mainService.getInfo().subscribe(res =>{
      this.friends = Object.values(res.contacts)
    })
  }

  show(id, bool){
    this.showId = id
    this.showMore =bool
  }

  remove(user: Contacts){
    const newUser = {
      ...user,
      isFriend: false,
      favourite: false
    }
    this.contactService.deleteFriend(user).subscribe(()=>{
      this.friends = this.friends.filter(r => r.id !== user.id)
    })

    this.contactService.changePeopleToFriend(newUser).subscribe()
  }

  toFavourite(user: Contacts){
    const newFavourite = {
      ...user,
      favourite: true
    }

    this.contactService.changePeopleToFriend(newFavourite).subscribe( )

    this.contactService.changePeopleToFavourites(newFavourite).subscribe( res =>{
      this.favourite = true
      this.showMore = false
      this.ngOnInit()
    })
  }

  unFavourites(user: Contacts){
    const newFavourite = {
      ...user,
      favourite: false
    }

    this.contactService.changePeopleToFriend(newFavourite).subscribe( )

    this.contactService.changePeopleToFavourites(newFavourite).subscribe( res =>{
      this.favourite = false
      this.showMore = false
      this.ngOnInit()
    })
  }


}
