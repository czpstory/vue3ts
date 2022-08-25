import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootStore } from './type'
import { IStoreType } from './type'
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

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
