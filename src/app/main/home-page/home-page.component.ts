import {Component, OnInit} from '@angular/core';
import {Users} from "../../shared/interfaces/contacts";
import {MainService} from "../../shared/services/main.service";
import {People} from "../../shared/interfaces/allBlogs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  allUserInfo: Users
  userContacts: People[]
  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.mainService.getInfo()
      .subscribe(res =>{
      this.allUserInfo = res
        if(res.contacts){
          const friends = Object.values(res.contacts).flat()
          this.userContacts = friends
        }
    })
  }
}
