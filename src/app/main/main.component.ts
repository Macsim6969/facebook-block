import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {MainService} from "../shared/services/main.service";
import {Users} from "../shared/interfaces/contacts";
import {NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{
  users: Users
  Smain: Subscription
  constructor(private mainService: MainService, private route: Router) {}
  ngOnInit() {
   this.Smain =  this.mainService.getInfo().subscribe(res =>{
      this.users = res
    })
  }

  ngOnDestroy() {
    if(this.Smain ){
      this.Smain.unsubscribe()
    }
  }

}
