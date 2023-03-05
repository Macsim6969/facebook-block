import {Component, OnInit} from '@angular/core';
import {Contacts} from "../../../../shared/interfaces/contacts";
import {MainService} from "../../../../shared/services/main.service";
import {ContactService} from "../../../../shared/services/contact.service";

@Component({
  selector: 'app-favourite-friends',
  templateUrl: './favourite-friends.component.html',
  styleUrls: ['./favourite-friends.component.scss']
})
export class FavouriteFriendsComponent implements OnInit{
  showId: string = ''
  showMore: boolean = false
  contacts: Contacts[]
  favourite: boolean =false
  search: string = ''
  constructor(private mainService: MainService, private contactService: ContactService) {}

  ngOnInit() {
    this.mainService.getInfo().subscribe(res =>{
    this.contacts = Object.values(res.contacts).filter(r => r.favourite == true)
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
      this.contacts = this.contacts.filter(r => r.id !== user.id)
    })

    this.contactService.changePeopleToFriend(newUser).subscribe()
  }

  unFavourites(user: Contacts) {
    const newFavourite = {
      ...user,
      favourite: false
    }

    this.contactService.changePeopleToFriend(newFavourite).subscribe()

    this.contactService.changePeopleToFavourites(newFavourite).subscribe(res => {
      this.favourite = false
      this.showMore = false
      this.ngOnInit()
    })
  }
}
