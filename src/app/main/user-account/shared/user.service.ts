import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Users} from "../../../shared/interfaces/contacts";
import {map, Observable} from "rxjs";
import {BLogs} from "../../../shared/interfaces/allBlogs";

@Injectable({providedIn: "root"})

export class UserService {
  userInfo: Users
  constructor(private http: HttpClient) {}


  getByIdBlogMe(id: string): Observable<BLogs>{
    return this.http.get<BLogs>(`https://facebook-d95ea-default-rtdb.firebaseio.com/users/blogs/${id}.json`)
      .pipe(
       map((blog: BLogs) =>{
         return {
           ...blog,
           id
         }
       })
      )
  }
}
