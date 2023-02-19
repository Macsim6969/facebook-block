import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LogService} from "./log.service";

@Injectable({providedIn: 'root'})

export class LogGuards implements CanActivate{
  constructor(private loginService: LogService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.loginService.isAuthenticated()){
      return  true
    }else{
      this.router.navigate(['/auth'])
      this.loginService.logout()
      return false
    }
  }
}
