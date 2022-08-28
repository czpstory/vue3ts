import { Ibreadcrumb } from '@/base-ui/breadcrumb/types'
import { RouteRecordRaw } from 'vue-router'
let firstRoute: any = null
export function mapMenutoRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    // console.log(route)

    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstRoute) {
          firstRoute = menu
        }
        // console.log(routes)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}

//面包屑
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: Ibreadcrumb[] = []
  mapRouterPath(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

//刷新固定在那个路由地址
export function mapRouterPath(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: Ibreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = mapRouterPath(menu.children ?? [], currentPath)
      if (findMenu) {
        //第一层面包屑内容
        breadcrumbs?.push({ name: menu.name })
        // 第二层面包屑内容
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export { firstRoute }
