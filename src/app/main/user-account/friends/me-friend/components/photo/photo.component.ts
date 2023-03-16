import { Component } from '@angular/core';
import {Photos} from "../../../../../../shared/interfaces/allBlogs";
import {MainService} from "../../../../../../shared/services/main.service";
import {BlogsService} from "../../../../../../shared/services/blogs.service";
import {ContactService} from "../../../../../../shared/services/contact.service";
import {FriendsService} from "../../../../../../shared/services/friends.service";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  photos: Photos[] = []
  isLoading: boolean = true

  showImage: string
  showMore: boolean = false

  constructor(private friendsService: FriendsService) {
  }

  ngOnInit() {
    this.isLoading = true
    this.photos = this.friendsService.friends.photos
  }

  showImg(img: string): void {
    this.showImage = img
    document.body.style.overflow = ''
  }

  showMoreInfo() {
    this.showMore = !this.showMore
  }
}
