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
  photo: Photos
  isLoading: boolean = true
  showImage: string
  closeImage: boolean = false
  constructor(private photosService: BlogsService) {}

  ngOnInit() {
    this.isLoading = true
    this.photosService.getPhotos()
      .subscribe(res => {
        this.photos = Object.values(res)
        this.isLoading = false
      })
  }

  closesImage(value: boolean): void{
    this.closeImage = value
  }

  plusImage(value: boolean): void{
    this.closeImage = value
    this.ngOnInit()
  }
  showImg(img: Photos): void {
    this.showImage = img.img
    this.photo = img
    document.body.style.overflow = 'hidden'
    this.closeImage = true
  }
}
