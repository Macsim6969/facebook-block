import {Component, OnInit} from '@angular/core';
import {MainService} from "../../shared/services/main.service";
import {Contacts, Users} from "../../shared/interfaces/contacts";
import {UserService} from "./shared/user.service";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit{
  ourInfo: Users
  myContacts: Contacts[]

  constructor(private usersService: MainService,private userService: UserService) {}

  ngOnInit(): void {
    this.usersService.getInfo().subscribe( res => {
      this.ourInfo = res
      this.myContacts = Object.values(res.contacts)
      this.userService.userInfo = res
    })
  }
}
