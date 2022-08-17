import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const hYrequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      return config
    }
  }
})

export default hYrequest
