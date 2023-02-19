import {Component, Input, OnInit} from '@angular/core';
import {Contacts, Users} from "../../shared/interfaces/contacts";
import {LogService} from "../../auth/service/log.service";
import {MainService} from "../../shared/services/main.service";
import {convertToParamMap} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  allUserInfo: Users
  userContacts: Contacts[]
  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.mainService.getInfo()
      .subscribe(res =>{
      this.allUserInfo = res
        if(res.contacts){
          const friends = Object.values(res.contacts).flat()
          console.log(friends)
          this.userContacts = friends
        }
    })
  }
}
