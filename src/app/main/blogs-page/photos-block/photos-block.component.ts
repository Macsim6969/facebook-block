import {Component, Input, OnInit} from '@angular/core';
import {BlogsService} from "../../../shared/services/blogs.service";
import {Photos} from "../../../shared/interfaces/allBlogs";

@Component({
  selector: 'app-photos-block',
  templateUrl: './photos-block.component.html',
  styleUrls: ['./photos-block.component.scss']
})
export class PhotosBlockComponent implements OnInit{

  photos: Photos[] = []
  isLoading: boolean = true

  showImage: string
  closeImage: boolean = false
  constructor(private photosService: BlogsService) {}

  ngOnInit() {
    this.isLoading = true
    this.photosService.getPhotos()
      .subscribe(res => {
        this.photos = res
        this.isLoading = false
      })
  }

  closesImage(value: boolean){
    this.closeImage = value
  }
  showImg(img: string): void {
    this.showImage = img
    document.body.style.overflow = 'hidden'
    this.closeImage = true
  }
}
