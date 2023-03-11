import {BLogs, Photos} from "./allBlogs";

export interface Contacts {
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
  about: About[]
  blogs: BLogs[]
}

export interface About {
  fullName: string
  date: string
  sex: string
  mobilePhone: number
  someInfo: [
    {
    mainInfo: string,
    achievements: string,
    favoriteQuotes: string
    }
  ],
  workAndEducation: [
    {
    work: string,
    education: string
    }
  ],
  placesOfResidence: [
    {
    cityOfResidencce: string,
    homeTown: string
    }
  ],
  family: string
}
