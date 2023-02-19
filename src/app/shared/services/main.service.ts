import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../interfaces/contacts";

@Injectable({providedIn: 'root'})

export class MainService{
  constructor(private http: HttpClient) {}

  getInfo(): Observable<Users>{
    return this.http.get<Users>('https://facebook-d95ea-default-rtdb.firebaseio.com/users.json')
  }
}
