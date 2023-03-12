import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../shared/user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {People} from "../../../../../shared/interfaces/allBlogs";

@Component({
  selector: 'app-people-id',
  templateUrl: './people-id.component.html',
  styleUrls: ['./people-id.component.scss']
})
export class PeopleIdComponent implements OnInit{
  people: People
  constructor(private userService: UserService, private router: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.router.params.pipe(
      switchMap((params: Params) =>{
       return  this.userService.getByIdPeople(params['id'])
      })
    ).subscribe((res: People) =>{
      this.people = res
    })
  }

  addToFriends() {
    this.route.navigate(['/blogs']).then(() =>{
      setTimeout(()=>{
      this.route.navigate(['/blogs/people'])
      }, 100)
    })
  }
}
