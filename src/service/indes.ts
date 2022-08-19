import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

import czCache from '@/utils/cache'

const hYrequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config: any) => {
      const token = czCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export default hYrequest
