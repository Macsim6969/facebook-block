import { Component } from '@angular/core';
import {BLogs, People} from "../../../../../../shared/interfaces/allBlogs";
import {FriendsService} from "../../../../../../shared/services/friends.service";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap, window} from "rxjs";
import {BlogsService} from "../../../../../../shared/services/blogs.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  user: string
  blog: BLogs

  constructor(private friendSerive: FriendsService, private router: ActivatedRoute, private friendService: FriendsService) {}

  ngOnInit() {
    this.router.params.pipe(
      switchMap((params: Params) =>{
        return this.friendService.getByIdBlogFriend(params['id'], this.friendSerive.friends.id)
      })
    ).subscribe((res: BLogs) =>{
      this.blog =res
      console.log(res)
    })
    this.user= this.friendSerive.friends.id

    document.body.style.overflow = 'hidden'
  }


  removeHidden() {
    document.body.style.overflow = ''
  }
}
