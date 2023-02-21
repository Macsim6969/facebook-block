import {Component, OnInit} from '@angular/core';
import {MainService} from "../../shared/services/main.service";
import {Contacts, Users} from "../../shared/interfaces/contacts";
import {BlogsService} from "../../shared/services/blogs.service";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit{
  ourInfo: Users
  myContacts: Contacts[]

  constructor(private userService: MainService, private blogService: BlogsService) {}

  ngOnInit(): void {
    this.userService.getInfo().subscribe( res => {
      this.ourInfo = res
      this.myContacts = Object.values(res.contacts)
    })
  }
}
