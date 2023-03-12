import {BLogs, People, Photos} from "./allBlogs";


export interface Users {
  img: string
  imgCover: string
  name: string
  id: string
  contacts: People[]
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
