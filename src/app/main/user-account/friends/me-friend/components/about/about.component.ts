import {Component, OnInit} from '@angular/core';
import {About} from "../../../../../../shared/interfaces/contacts";
import {FriendsService} from "../../../../../../shared/services/friends.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  about: About[]

  constructor(private friendService: FriendsService) {}

  ngOnInit() {
    this.about = Object.values(this.friendService.friends.about).filter(r => r)
  }
}
