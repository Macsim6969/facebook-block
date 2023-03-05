import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contacts} from "../../../shared/interfaces/contacts";

@Injectable()

export class UserService {
  constructor(private http: HttpClient) {}


}
