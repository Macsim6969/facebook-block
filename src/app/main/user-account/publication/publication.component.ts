import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/user.service";
import {BLogs} from "../../../shared/interfaces/allBlogs";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit{

  blogs: BLogs[]
  userId: string
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.blogs = Object.values(this.userService.userInfo.blogs)
    this.userId = this.userService.userInfo.id
  }
}
