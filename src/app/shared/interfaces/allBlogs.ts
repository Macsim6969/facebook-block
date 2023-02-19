export interface BLogs {
  name: string
  type: string
  id? : number
  date?: Date
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
