import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SettingPhoto, Users} from "../../../shared/interfaces/contacts";
import {map, Observable} from "rxjs";
import {BLogs, People} from "../../../shared/interfaces/allBlogs";

@Injectable({providedIn: "root"})

export class UserService {
  userInfo: Users

  showFriendBlock: boolean = false
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

  getByIdPeople(id: string): Observable<People>{
    return this.http.get<People>(`https://facebook-d95ea-default-rtdb.firebaseio.com/peoples/${id}.json`)
      .pipe(
        map((people: People) =>{
          return{
            ...people,
            id,
            isFriend: false
          }
        })
      )
  }

  getPhotoToSetting(url: string): Observable<SettingPhoto>{
    return this.http.get<SettingPhoto>(`https://facebook-d95ea-default-rtdb.firebaseio.com/users/setting/${url}.json`)
  }

  changeSettingUser(newUser: Users): Observable<Users>{
    return this.http.patch<Users>(`https://facebook-d95ea-default-rtdb.firebaseio.com/users.json`, newUser)
  }
}
