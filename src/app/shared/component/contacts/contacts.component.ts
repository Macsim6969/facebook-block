import {Component, Input, OnInit} from '@angular/core';
import {Contacts, Users} from "../../interfaces/contacts";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{
  @Input() yourContacts: Contacts[]
  search: string = ''
  showInput: boolean = false
  constructor() {}

  ngOnInit() {

  }
}
