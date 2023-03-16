import {Component, OnInit} from '@angular/core';
import {FriendsService} from "../../../../../../shared/services/friends.service";
import {People} from "../../../../../../shared/interfaces/allBlogs";
import {Router} from "@angular/router";
import {ContactService} from "../../../../../../shared/services/contact.service";
import {BlogsService} from "../../../../../../shared/services/blogs.service";

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit{
  friends: People[]

  constructor(private friendService: FriendsService, private router: Router, private contactService: ContactService, private blogsService: BlogsService) {}

  ngOnInit() {
    this.friends = this.friendService.friends.friends
  }


  found(){
    this.router.navigate(['/blogs/content']).then(()=>{setTimeout(()=>{
          this.router.navigate(['/blogs', 'people'])
        }, 100)})
  }

}
