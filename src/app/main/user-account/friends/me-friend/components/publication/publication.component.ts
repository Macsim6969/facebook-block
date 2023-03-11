import {Component, OnInit} from '@angular/core';
import {FriendsService} from "../../../../../../shared/services/friends.service";
import {BLogs, People} from "../../../../../../shared/interfaces/allBlogs";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit{

  publication: BLogs[]
  user: string
  showMore: boolean = false
  constructor(private friendSerive: FriendsService) {}

  ngOnInit() {
    this.publication = Object.values(this.friendSerive.friends.blogs)
    this.user= this.friendSerive.friends.id
  }

}
