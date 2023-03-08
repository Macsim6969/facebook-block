import {Component, OnInit} from '@angular/core';
import {Photos} from "../../../shared/interfaces/allBlogs";
import {ContactService} from "../../../shared/services/contact.service";
import {BlogsService} from "../../../shared/services/blogs.service";
import {switchMap} from "rxjs";
import {MainService} from "../../../shared/services/main.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: Photos[] = []
  isLoading: boolean = true

  showImage: string
  showMore: boolean = false

  constructor(private mainService: MainService, private blogService: BlogsService, private contactServie: ContactService) {
  }

  ngOnInit() {
    this.isLoading = true
    this.contactServie.getMyPhotos().subscribe(res =>{
      this.photos = Object.values(res)
    })
  }

  showImg(img: string): void {
    this.showImage = img
    document.body.style.overflow = ''
  }

  showMoreInfo() {
    this.showMore = !this.showMore
  }

  delete(src: string) {
    const newSrc = this.photos.filter(r => r.img === src).map(r => r.id).join()
    const newImage = Object.assign({}, this.photos.filter(r => r.img === src).map(r => r)[0])
    let newImage2: Photos = {
      ...newImage,
      my: false
    }

    this.contactServie.deleteMyPhotos(newSrc).subscribe( res =>{
      this.showMore = false
      this.ngOnInit()
      this.showImage = ''
    })

    this.blogService.setChangePhoto(newImage2).subscribe()
  }
}
