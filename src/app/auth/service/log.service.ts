import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {config} from "../../key/key";
import {Observable, tap} from "rxjs";
import {FnAuthResponse} from "../../shared/interfaces/login";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})

export class LogService{
  constructor(private http: HttpClient, private router: Router) {}

  get token(): string{
    const expDate = new Date(localStorage.getItem('fb-token-exp'))
    if(new Date > expDate){
      return null
      this.logout()
    }
    return localStorage.getItem('fb-token')
  }

  isAuthenticated(): boolean{
    return !!this.token
  }
  logIn(user): Observable<any>{
   return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.apiKey}`, user)
     .pipe(
       tap(this.setToken)
     )
  }

  logout(){
    this.setToken(null)
    this.router.navigate(['/auth'])
  }

  private setToken(response: FnAuthResponse | null){
    if(response){
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    }else{
      localStorage.clear()
    }

  }
}
