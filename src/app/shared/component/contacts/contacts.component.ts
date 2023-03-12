import {Component, Input, OnInit} from '@angular/core';
import {People} from "../../interfaces/allBlogs";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{
  @Input() yourContacts: People[]
  search: string = ''
  showInput: boolean = false
  constructor() {}

  ngOnInit() {

  }
}
