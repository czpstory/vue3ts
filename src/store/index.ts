import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootStore } from './type'
import { IStoreType } from './type'
import loginStore from './login'
import system from './main/system/system'

const store = createStore<IRootStore>({
  state() {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginStore,
    system
  }
})

export function setStore(): void {
  store.dispatch('loginStore/locationPull')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
