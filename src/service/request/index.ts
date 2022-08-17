import axios from 'axios'
import { AxiosInstance } from 'axios'

import type { instanceInterceptors, HYRequestInterceptors } from './type'

class hyRequset {
  instance: AxiosInstance
  interceptors?: instanceInterceptors
  constructor(config: HYRequestInterceptors) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )

    // 所有实例的请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        return data
      },
      (err) => {
        return err
      }
    )
  }
  //单独请求的拦截
  requset<T>(config: HYRequestInterceptors<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          resolve(res)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  get<T>(config: HYRequestInterceptors<T>): Promise<T> {
    return this.requset<T>({ ...config, method: 'GET' })
  }
  post<T>(config: HYRequestInterceptors<T>): Promise<T> {
    return this.requset<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: HYRequestInterceptors<T>): Promise<T> {
    return this.requset<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: HYRequestInterceptors<T>): Promise<T> {
    return this.requset<T>({ ...config, method: 'PATCH' })
  }
}

export default hyRequset
