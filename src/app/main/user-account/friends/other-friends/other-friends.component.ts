import { Component } from '@angular/core';
import {UserService} from "../../shared/user.service";
import {ContactService} from "../../../../shared/services/contact.service";
import {BlogsService} from "../../../../shared/services/blogs.service";
import {People} from "../../../../shared/interfaces/allBlogs";

@Component({
  selector: 'app-other-friends',
  templateUrl: './other-friends.component.html',
  styleUrls: ['./other-friends.component.scss']
})
export class OtherFriendsComponent {
  showId: string = ''
  showMore: boolean = false
  people: People[]
  favourite: boolean =false
  search: string =''
  constructor( private userService: UserService, private contactService: ContactService, private blogService: BlogsService) {
  }
  ngOnInit() {
    this.blogService.getPeople().subscribe((res: People[]) =>{
      this.people = Object.values(res).filter(r => r.isFriend === false)
    })
  }

  show(id, bool){
    this.showId = id
    this.showMore =bool
  }

  add(newPeople: People): void {
    const peopleTrue = {
      ...newPeople,
      isFriend: true
    }

    this.contactService.addPeople(peopleTrue).subscribe( res => this.showMore = false)
    this.contactService.changePeopleToFriend(peopleTrue).subscribe( res => {
      this.people = this.people.filter(r => {
        return  r.isFriend === false
      })
      this.showMore = false
    })

    setTimeout(()=>{
      this.ngOnInit()
    }, 1000)
  }

  noInteresting(id: string) {
    this.people = this.people.filter(u => u.id !== id)
  }
}
