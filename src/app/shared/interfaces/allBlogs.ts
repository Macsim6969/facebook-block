import {About} from "./contacts";

export interface BLogs {
  img: string
  title: string
  id : string | number
  body: string
  bgImage: string
  favourite? : boolean
}

export interface Photos {
  id: string
  img: string
  my: boolean
}

export interface People{
  img: string
  imgCover: string
  isOnline: boolean
  id: string
  isFriend: boolean
  name: string
  blogs: BLogs[]
  favourite: boolean
  friends: People[]
  photos: Photos[]
  about: About[]
  help: boolean
}
