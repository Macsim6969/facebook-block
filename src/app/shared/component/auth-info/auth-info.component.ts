import {Component, Input, OnInit} from '@angular/core';
import {Users} from "../../interfaces/contacts";

@Component({
  selector: 'app-auth-info',
  templateUrl: './auth-info.component.html',
  styleUrls: ['./auth-info.component.scss']
})
export class AuthInfoComponent implements OnInit{
  @Input() user: Users

  ngOnInit() {
  }
}
