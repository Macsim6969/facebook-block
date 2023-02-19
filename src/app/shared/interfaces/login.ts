export interface Login{
  email: string
  password: string
}

export interface FnAuthResponse {
  idToken: string
  expiresIn: string
}
