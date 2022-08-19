class czCache {
  //设置本地缓存账户密码
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    if (key) {
      const userMessage: any = window.localStorage.getItem(key)
      return JSON.parse(userMessage)
    }
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCache() {
    window.localStorage.clear()
  }
}

export default new czCache()
