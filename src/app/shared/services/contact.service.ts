import {Injectable} from "@angular/core";
import {Contacts} from "../interfaces/contacts";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {People} from "../interfaces/allBlogs";

@Injectable({providedIn: "root"})

export class ContactService {
  constructor(private http: HttpClient) {}

  addPeople(people: People): Observable<People>{
    return this.http.patch<People>(`https://facebook-d95ea-default-rtdb.firebaseio.com/users/contacts/${people.id}.json`, people)
  }

  changePeopleToFriend(people: Contacts): Observable<People>{
    return this.http.patch<People>(`https://facebook-d95ea-default-rtdb.firebaseio.com/peoples/${people.id}.json`, people)
  }

  changePeopleToFavourites(people: Contacts): Observable<People>{
    return this.http.patch<People>(`https://facebook-d95ea-default-rtdb.firebaseio.com/users/contacts/${people.id}.json`, people)
  }

  deleteFriend(peple: Contacts): Observable<any>{
    return this.http.delete(`https://facebook-d95ea-default-rtdb.firebaseio.com/users/contacts/${peple.id}.json`)
  }
}
