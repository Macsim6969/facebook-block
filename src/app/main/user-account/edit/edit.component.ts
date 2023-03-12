import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/user.service";
import {Users} from "../../../shared/interfaces/contacts";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements  OnInit{
  user: Users
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.userInfo
  }

  photo($event) {
    console.log($event)
  }
}
