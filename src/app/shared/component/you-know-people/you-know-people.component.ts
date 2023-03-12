import {Component, OnInit} from '@angular/core';
import {BlogsService} from "../../services/blogs.service";
import {People} from "../../interfaces/allBlogs";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {UserService} from "../../../main/user-account/shared/user.service";

@Component({
  selector: 'app-you-know-people',
  templateUrl: './you-know-people.component.html',
  styleUrls: ['./you-know-people.component.scss']
})
export class YouKnowPeopleComponent implements OnInit {
  constructor(private blogService: BlogsService, private router: Router, private userService: UserService) {
  }

  people: People[] = []
  showSetting: boolean = false
  showBlock: boolean = true
  showBlockSetting: boolean = false
  ngOnInit() {
    this.blogService.getPeople().subscribe((res) => {
        this.people = Object.values(res).filter(r => r.isFriend === false)
      })

  }

  routerToFriend(): void{
    this.router.navigate(['/user/my-friends/other-people'])

    this.userService.showFriendBlock = true
  }

  showBlockSett() {
    this.showBlockSetting = !this.showBlockSetting
  }
}
