import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {BLogs, People, Photos} from "../interfaces/allBlogs";
import {Contacts} from "../interfaces/contacts";


@Injectable({providedIn: "root"})

export class BlogsService implements OnInit {
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getBLogs(): Observable<BLogs[]> {
    return this.http.get<BLogs[]>('https://facebook-d95ea-default-rtdb.firebaseio.com/blogs.json')
  }

  getById(id: number): Observable<BLogs> {
    return this.http.get<BLogs>(`https://facebook-d95ea-default-rtdb.firebaseio.com/blogs/${id}.json`)
      .pipe(
        map((blog: BLogs) => {
          return {
            ...blog,
            id
          }
        })
      )
  }

  getByIdUser(id: string) : Observable<People> {
    return this.http.get<People>(`https://facebook-d95ea-default-rtdb.firebaseio.com/users/contacts/${id}.json`)
      .pipe(
        map((user: People) =>{
          return {
            ...user,
            id
          }
        })
      )
  }
  getPhotos(): Observable<Photos[]> {
    return this.http.get<Photos[]>('https://facebook-d95ea-default-rtdb.firebaseio.com/photos.json')
  }

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>('https://facebook-d95ea-default-rtdb.firebaseio.com/peoples.json')
  }

}
