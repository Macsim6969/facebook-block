import {Component, OnInit} from '@angular/core';
import {BlogsService} from "../../../shared/services/blogs.service";
import {Photos} from "../../../shared/interfaces/allBlogs";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit{
  gallery: Photos[]
  constructor(private blogService: BlogsService) {}

  ngOnInit() {
    this.blogService.getPhotos().subscribe((res:Photos[]) =>{
      this.gallery = res
    })
  }
}
