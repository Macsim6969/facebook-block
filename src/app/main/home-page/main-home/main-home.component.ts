import {Component, OnInit} from '@angular/core';
import {BlogsService} from "../../../shared/services/blogs.service";
import {BLogs} from "../../../shared/interfaces/allBlogs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent  implements OnInit{
  blogs: BLogs[] = []
  constructor(private blogService: BlogsService, private route: Router) {}

  ngOnInit() {
    this.blogService.getBLogs().subscribe(res =>{
       this.blogs = Object.values(res).filter(r => r.favourite === true)
    })
  }

  read(id: string| number): void {
    this.route.navigate(['/blogs']).then(() =>{
      setTimeout(()=>{
        this.route.navigate(['/blogs/content', id])
      }, 100)
    })
  }

  remove(bl: BLogs) {
    const newBlog ={
      ...bl,
      favourite: false
    }
    this.blogService.changeBlogInfo(newBlog).subscribe( res => {
      this.ngOnInit()
    })

  }
}
