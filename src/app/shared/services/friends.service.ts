import {Injectable, OnInit} from "@angular/core";
import {BLogs, People} from "../interfaces/allBlogs";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class FriendsService implements OnInit{
  friends: People

  constructor(private http: HttpClient) {
  }
  ngOnInit() {

  }


  getByIdBlogFriend(id: string, userId: string) : Observable<BLogs>{
    return this.http.get<BLogs>(`https://facebook-d95ea-default-rtdb.firebaseio.com/users/contacts/${userId}/blogs/${id}.json`)
      .pipe(
        map((blog: BLogs) =>{
          return{
            ...blog,
            id
          }
        })
      )
  }
}
