import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainService} from "../../shared/services/main.service";
import {Users} from "../../shared/interfaces/contacts";
import {UserService} from "./shared/user.service";
import {People} from "../../shared/interfaces/allBlogs";
import {Subscription} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit, OnDestroy {
  ourInfo: Users
  myContacts: People[]

  sbUser: Subscription

  constructor(private usersService: MainService, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.usersService.getInfo().subscribe(res => {
      this.ourInfo = res
      this.myContacts = Object.values(res.contacts)
      this.userService.userInfo = res
    })

  }

  ngOnDestroy() {
    if (this.sbUser) {
      this.sbUser.unsubscribe()
    }
  }

}
