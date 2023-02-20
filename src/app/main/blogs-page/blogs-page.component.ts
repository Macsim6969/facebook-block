import {Component, OnChanges, OnInit} from '@angular/core';
import {BlogsService} from "../../shared/services/blogs.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.scss']
})
export class BlogsPageComponent implements OnInit{
  allBlogs = []
  constructor(private blogService: BlogsService, private router: Router) {}

  ngOnInit() {
    this.getBLogs()
    this.router.navigate(['/blogs','content'])
  }

  getBLogs(){
    this.blogService.getBLogs()
      .subscribe(res =>{
        this.allBlogs = res
      })
  }
}
