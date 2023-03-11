import {Photos} from "./allBlogs";

export  interface Contacts {
  img: string
  name: string
  isOnline: boolean
  isFriend: boolean
  favourite: boolean

  id: string
}
export interface Users {
  img: string
  imgCover: string
  name: string
  id: string
  contacts: Contacts[]
  photos: Photos[]
  about: []
  blogs: [ ]
}
