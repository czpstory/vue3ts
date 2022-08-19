import hYrequest from '../indes'
import { IAccount, IPostInfo, IData } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  userInfoRequest = '/users/',
  userMenu = '/role/'
}

export function loginAccountRequest(account: IAccount) {
  return hYrequest.post<IData<IPostInfo>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function userInfoRequestById(id: number) {
  return hYrequest.get<IData>({
    url: LoginAPI.userInfoRequest + id
  })
}

export function userMenuRequest(id: number) {
  return hYrequest.get<IData>({
    url: LoginAPI.userMenu + id + '/menu'
  })
}
