export interface IAccount {
  name: string
  password: string
}

export interface IPostInfo {
  id: number
  name: string
  token: string
}

export interface IData<T = any> {
  code: number
  data: T
}
