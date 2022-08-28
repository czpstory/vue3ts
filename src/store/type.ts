import { ILoginStore } from './login/type'
import { ISystemState } from './main/system/types'
export interface IRootStore {
  name: string
}

export interface IRootWithModule {
  loginStore: ILoginStore
  system: ISystemState
}

export type IStoreType = IRootStore & IRootWithModule
