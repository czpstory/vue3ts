import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootStore } from '../../type'
import { getPageListData } from '@/service/main/system'
const system: Module<ISystemState, IRootStore> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0
    }
  },
  mutations: {
    changeUsersList(state, usersList) {
      state.usersList = usersList
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const { url, queryInfo } = payload
      const listResult = await getPageListData(url, queryInfo)
      const { list } = listResult.data

      commit('changeUsersList', list)
    }
  }
}

export default system
