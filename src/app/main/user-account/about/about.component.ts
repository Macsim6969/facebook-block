import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/user.service";
import {About} from "../../../shared/interfaces/contacts";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  about: About[]
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.about = this.userService.userInfo.about
  }
}
