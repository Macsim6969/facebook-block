export interface BLogs {
  userId: number
  title: string
  id : number
  body: string
}

export interface Photos {
  id: string
  img: string
}

export interface People{
  img: string
  isOnline: boolean
  id: string
  isFriend: boolean
  name: string
}
