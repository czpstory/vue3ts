import { Module } from 'vuex'
import { ILoginStore } from './type'
import { IRootStore } from '../type'
import { IAccount } from '@/service/login/type'
import czCache from '@/utils/cache'
import router from '@/router/index'
import {
  loginAccountRequest,
  userInfoRequestById,
  userMenuRequest
} from '@/service/login'
import { mapMenutoRoutes } from '@/utils/map-menu'
const loginStore: Module<ILoginStore, IRootStore> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus
      const routes = mapMenutoRoutes(userMenus)
      // console.log(routes)

      // 动态添加路由
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  getters: {},
  actions: {
    //1.获取用户的ID和token
    async loginAction({ commit }, payload: IAccount) {
      const result = await loginAccountRequest(payload)
      const { id, token } = result.data
      czCache.setCache('token', token)
      commit('changeToken', token)

      //2.根据用户的id获取用户的信息
      const userInfoResult = await userInfoRequestById(id)
      const userInfo = userInfoResult.data
      czCache.setCache('userInfo', userInfo)
      commit('changeUserInfo', userInfo)
      console.log(userInfo)

      //3.获取角色菜单树
      const userMenuResult = await userMenuRequest(id)
      const userMenus = userMenuResult.data
      czCache.setCache('userMenus', userMenus)
      commit('changeUserMenus', userMenus)

      router.push('/main')
    },

    //2.页面刷新 重新更新vuex里面的数据s
    locationPull({ commit }) {
      const token = czCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = czCache.getCache('userInfo')
      commit('changeUserInfo', userInfo)
      const userMenus = czCache.getCache('userMenus')
      commit('changeUserMenus', userMenus)
    }
  }
}

export default loginStore
