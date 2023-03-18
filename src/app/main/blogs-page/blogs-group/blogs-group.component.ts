import {Component, OnInit} from '@angular/core';
import {BlogsService} from "../../../shared/services/blogs.service";
import {BLogs} from "../../../shared/interfaces/allBlogs";

@Component({
  selector: 'app-blogs-group',
  templateUrl: './blogs-group.component.html',
  styleUrls: ['./blogs-group.component.scss']
})
export class BlogsGroupComponent implements OnInit{
  blogs: BLogs[] = []
  constructor(private blogService: BlogsService) {}

  ngOnInit() {
    this.blogService.getBLogs()
      .subscribe( res =>{
        this.blogs = Object.values(res)
      })
  }
}
