import {Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import {MainService} from "../../../shared/services/main.service";
import {Contacts} from "../../../shared/interfaces/contacts";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit{

  friends: Contacts[]

  constructor(private mainService: MainService) {
  }
  ngOnInit() {
    this.mainService.getInfo().subscribe(res =>{
      this.friends = Object.values(res.contacts)
    })
  }
}
