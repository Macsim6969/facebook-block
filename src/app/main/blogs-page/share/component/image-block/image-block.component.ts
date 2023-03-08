import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Photos} from "../../../../../shared/interfaces/allBlogs";
import {BlogsService} from "../../../../../shared/services/blogs.service";

@Component({
  selector: 'app-image-block',
  templateUrl: './image-block.component.html',
  styleUrls: ['./image-block.component.scss'],

})
export class ImageBlockComponent implements OnInit{
  constructor(private blogService: BlogsService) {
  }
  @Output() closesImage: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() plusImage: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Input() imageSrc: Photos

ngOnInit() {
}

  close(value: boolean): void {
    this.closesImage.emit(value)
    document.body.style.overflow = ''
  }

  plusMe(image: Photos): void {
    const newImage = {
      ...image,
      my: true
    }
    this.blogService.setMePhoto(newImage).subscribe()
    this.blogService.setChangePhoto(newImage).subscribe(res =>{
      this.plusImage.emit(false)
    })
    document.body.style.overflow = ''
  }

}
