import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {BlogsService} from "../../../../../shared/services/blogs.service";
import {BLogs} from "../../../../../shared/interfaces/allBlogs";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-blog-info',
  templateUrl: './blog-info.component.html',
  styleUrls: ['./blog-info.component.scss']
})
export class BlogInfoComponent implements OnInit {
  blog: BLogs
  constructor(private route: ActivatedRoute, private blogService: BlogsService) {
  }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.blogService.getById(params['id'])
      })).subscribe((blog: BLogs) =>{
        this.blog = blog
      console.log(blog)
    })
  }
}
