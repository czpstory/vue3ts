import { createStore } from 'vuex'
import { IRootStore } from './type'

import loginStore from './login'

const store = createStore<IRootStore>({
  state() {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginStore
  }
})

export function setStore(): void {
  store.dispatch('loginStore/locationPull')
}

export default store
