import { ILoginStore } from './login/type'

export interface IRootStore {
  name: string
}

export interface IRootWithModule {
  loginStore: ILoginStore
}

export type IStoreType = IRootStore & IRootWithModule
