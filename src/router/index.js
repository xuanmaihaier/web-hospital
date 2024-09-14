// import Layout from '@/layout'
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

Vue.use(Router)
export const constantRoutes = [
  {
    path: "/",
    redirect: "home"
  },
  {
    path: '/home',
    hidden: true,
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: '/404',
    hidden: true,
    component: () => import('@/views/error-page/404')
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    mode: 'history', // require service supportz
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}
const isIncludeCurMenu = (route, menus) => {
  const cur = route.path
  let flag = false
  const mainMethod = (cur, menus) => {
    for (let i = 0; i < menus.length; i++) {
      const item = menus[i]
      if (item.url == cur) {
        flag = true
        break
      }
      if (item.children && item.children.length) {
        mainMethod(cur, item.children)
      }
    }
  }
  if (route.meta && route.meta.parentUrl) {
    // 如果是嵌套的子菜单则验证其父级菜单的权限
    mainMethod(route.meta.parentUrl, menus)
  } else {
    mainMethod(cur, menus)
  }
  return flag
}

/**
 * 获取默认菜单
 */
const findDefaultMenuItem = (menuItems) => {
  if (menuItems && menuItems.length > 0) {
    const firstItem = menuItems[0]
    if (firstItem.children && firstItem.children.length > 0) {
      return findDefaultMenuItem(firstItem.children)
    } else {
      return firstItem
    }
  }
  return null
}

export default router

router.beforeEach((to, from, next) => {
  next()
})

