import {Component, OnInit} from '@angular/core';
import {MainService} from "../../../shared/services/main.service";
import {UserService} from "../shared/user.service";
import {People} from "../../../shared/interfaces/allBlogs";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit{

  friends: People[]

  showFriendBlock: boolean

  constructor(private mainService: MainService, private userService: UserService) {
  }
  ngOnInit() {
    this.mainService.getInfo().subscribe(res =>{
      this.friends = Object.values(res.contacts)
    })

    this.showFriendBlock = this.userService.showFriendBlock
  }
}
