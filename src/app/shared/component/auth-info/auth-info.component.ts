import {Component, Input, OnInit} from '@angular/core';
import {Users} from "../../interfaces/contacts";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-info',
  templateUrl: './auth-info.component.html',
  styleUrls: ['./auth-info.component.scss']
})
export class AuthInfoComponent implements OnInit{
  @Input() user: Users

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  routerToFriend(): void{
    if(this.router.navigate(['/blogs/content'])){
      setTimeout(()=>{
        this.router.navigate(['blogs/people'])
      }, 0)
    }
  }
}
