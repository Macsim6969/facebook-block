import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/user.service";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap} from "rxjs";
import {BLogs} from "../../../../shared/interfaces/allBlogs";

@Component({
  selector: 'app-me-blog',
  templateUrl: './me-blog.component.html',
  styleUrls: ['./me-blog.component.scss']
})
export class MeBlogComponent implements OnInit{
  blog: BLogs
  constructor(private userService: UserService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.pipe(
      switchMap((params: Params) =>{
       return this.userService.getByIdBlogMe(params['id'])
      })
    ).subscribe((res: BLogs) =>{
      this.blog = res
      console.log(res)
    })
    document.body.style.overflow = 'hidden'
  }

  removeHidden() {
    document.body.style.overflow = ''
  }
}
