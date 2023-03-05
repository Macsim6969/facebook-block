import {Pipe, PipeTransform} from '@angular/core'
import {Contacts} from "../../../../shared/interfaces/contacts";


@Pipe({name: 'filter'})
export class FiltersPipes implements PipeTransform{
  transform(contacts: Contacts[], search: string = ''): Contacts[] {
    if(!search.trim()){
      return contacts
    }
    return contacts.filter(p =>{
      return p.name.toLowerCase().includes(search.toLowerCase())
    })
  }
}
