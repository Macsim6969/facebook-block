import {Component, Input, OnInit} from '@angular/core';
import {LogService} from "../../../auth/service/log.service";
import {Users} from "../../interfaces/contacts";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show: boolean = false
  @Input() userinfo: Users
  constructor(private loginService: LogService) {}

  ngOnInit() {
  }
  logout() {
    this.loginService.logout()
  }

  showLog() {
    this.show = !this.show
  }
}
