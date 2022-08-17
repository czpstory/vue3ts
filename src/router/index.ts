import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [{ path: '/', redirect: 'app' }]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default router
