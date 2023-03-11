import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Route, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {BlogsService} from "../../../../shared/services/blogs.service";
import {People} from "../../../../shared/interfaces/allBlogs";
import {FriendsService} from "../../../../shared/services/friends.service";

@Component({
  selector: 'app-me-friend',
  templateUrl: './me-friend.component.html',
  styleUrls: ['./me-friend.component.scss']
})
export class MeFriendComponent implements OnInit{
  user: People
  constructor(private route: ActivatedRoute, private blogsService: BlogsService, private friendsService: FriendsService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) =>{
        return this.blogsService.getByIdUser(params['id'])
      })
    ).subscribe((res: People) =>{
      this.user = res
      this.friendsService.friends = res
    })

  }
}
