import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Route} from "@angular/router";
import {switchMap} from "rxjs";
import {BlogsService} from "../../../../shared/services/blogs.service";
import {People} from "../../../../shared/interfaces/allBlogs";

@Component({
  selector: 'app-me-friend',
  templateUrl: './me-friend.component.html',
  styleUrls: ['./me-friend.component.scss']
})
export class MeFriendComponent implements OnInit{
  user: People
  constructor(private route: ActivatedRoute, private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) =>{
        return this.blogsService.getByIdUser(params['id'])
      })
    ).subscribe((res: People) =>{
      this.user = res
      console.log(res)
    })
  }
}
