import {Pipe, PipeTransform} from '@angular/core'
import {People} from "../interfaces/allBlogs";

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform{
  transform(contacts: People[], search: string = ''): People[] {
    if(!search.trim()){
      return contacts
    }
    return contacts.filter(p =>{
      return p.name.toLowerCase().includes(search.toLowerCase())
    })
  }
}
