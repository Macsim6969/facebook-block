import {Component, OnInit} from '@angular/core';
import {BlogsService} from "../../../shared/services/blogs.service";
import {Photos} from "../../../shared/interfaces/allBlogs";
import {ContactService} from "../../../shared/services/contact.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit{
  photos: Photos[] = []
  isLoading: boolean = true

  showImage: string
  closeImage: boolean = false
  constructor(private contactServie: ContactService) {}

  ngOnInit() {
    this.isLoading = true
    this.contactServie.getMyPhotos()
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
