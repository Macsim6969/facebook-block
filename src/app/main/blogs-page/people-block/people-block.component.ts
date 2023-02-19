import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogsService} from "../../../shared/services/blogs.service";
import {People} from "../../../shared/interfaces/allBlogs";
import {ContactService} from "../../../shared/services/contact.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-people-block',
  templateUrl: './people-block.component.html',
  styleUrls: ['./people-block.component.scss']
})
export class PeopleBlockComponent implements OnDestroy, OnInit {
  peoples: People[] = []
  Psub: Subscription

  disable: boolean = false

  constructor(private peopleService: BlogsService, private contactService: ContactService, private route: Router) {
  }

  ngOnInit(): void {
    this.upload()
    setTimeout(() =>{
      this.ngOnInit()
    }, 500 * 10)
  }

  upload(): void {
    this.Psub = this.peopleService.getPeople()
      .subscribe(res => {
        const people = Object.values(res)
        this.peoples = people
      })
  }


  add(newPeople: People): void {
    const peopleTrue = {
      ...newPeople,
      isFriend: true
    }
    this.disable = true
    this.contactService.addPeople(peopleTrue).subscribe( res => {this.disable = false})
    this.contactService.changePeopleToFriend(peopleTrue).subscribe(res => {this.disable = false})

  }


  delete(pepleDel: People): void {
    const peopleTrue = {
      ...pepleDel,
      isFriend: false
    }
    this.contactService.deleteFriend(pepleDel).subscribe()
    this.contactService.changePeopleToFriend(peopleTrue).subscribe()
  }


  ngOnDestroy() {
    if (this.Psub) {
      this.Psub.unsubscribe()
    }
  }
}
