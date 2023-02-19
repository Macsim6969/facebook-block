import {Component, Input, OnInit} from '@angular/core';
import {LogService} from "../../../auth/service/log.service";
import {MainService} from "../../services/main.service";
import {Users} from "../../interfaces/contacts";

// import {LoginService} from "../../services/login.ts.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() userinfo: Users
  constructor(private loginService: LogService) {}

  ngOnInit() {
  }
  logout() {
    this.loginService.logout()
  }


}
