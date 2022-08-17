import { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface instanceInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptors?: (res: T) => T
  responseInterceptorsCatch?: (error: any) => any
}

export interface HYRequestInterceptors<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: instanceInterceptors<T>
}
