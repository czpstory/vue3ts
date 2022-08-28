import hYrequest from '../../indes'
import { IData } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return hYrequest.post<IData>({
    url: url,
    data: queryInfo
  })
}
