import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MainService} from "../shared/services/main.service";
import {Users} from "../shared/interfaces/contacts";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  users: Users
  constructor(private mainService: MainService) {}
  ngOnInit() {
    this.mainService.getInfo().subscribe(res =>{
      this.users = res
    })
  }

}
