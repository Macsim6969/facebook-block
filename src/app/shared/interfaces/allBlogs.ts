export interface BLogs {
  userId: number
  title: string
  id : number
  body: string
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
  blogs: BLogs[] | BLogs | null
  favourite: boolean
  friends: People[]
}
