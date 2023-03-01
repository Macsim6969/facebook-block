import { Component } from '@angular/core';
import {Contacts} from "../../../../shared/interfaces/contacts";
import {MainService} from "../../../../shared/services/main.service";

@Component({
  selector: 'app-all-friends',
  templateUrl: './all-friends.component.html',
  styleUrls: ['./all-friends.component.scss']
})
export class AllFriendsComponent {
  showId: string = ''
  showMore: boolean = false
  friends: Contacts[]

  constructor(private mainService: MainService) {
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
}
