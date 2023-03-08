import {Component, OnInit} from '@angular/core';
import {Photos} from "../../../shared/interfaces/allBlogs";
import {ContactService} from "../../../shared/services/contact.service";
import {BlogsService} from "../../../shared/services/blogs.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit{
  photos: Photos[] = []
  isLoading: boolean = true

  showImage: string
  constructor(private contactServie: ContactService) {}

  ngOnInit() {
    this.isLoading = true
     this.contactServie.getMyPhotos()
      .subscribe(res => {
       this.photos = Object.values(res)
        this.isLoading = false
      })

  }
  showImg(img: string): void {
    this.showImage = img
    document.body.style.overflow = ''
  }
}
