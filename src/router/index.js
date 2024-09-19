// import Layout from '@/layout'
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

Vue.use(Router)
export const constantRoutes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/search/:name',
    component: () => import('@/views/search/index.vue'),
    meta: {
      title: '搜索结果',
      name: 'search'
    }
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      name: 'home'
    }
  },
  {
    path: '/jobs',
    component: () => import('@/views/jobs/index.vue'),
    meta: {
      title: '人才招聘',
      name: 'jobs'
    }
  },
  {
    path: '/oa',
    component: () => import('@/views/oa/index.vue'),
    meta: {
      title: 'OA办公',
      name: 'oa'
    }
  },
  {
    path: '/overview',
    redirect: '/overview/introduction',
    component: () => import('@/views/overview/main.vue'),
    meta: {
      title: '医院概况',
      name: 'overview'
    },
    children: [
      {
        path: '/overview/introduction',
        component: () => import('@/views/overview/introduction/index.vue'),
        meta: {
          title: '医院简介',
          name: 'introduction'
        }
      }, {
        path: '/overview/organization',
        component: () => import('@/views/overview/organization/index.vue'),
        meta: {
          title: '组织架构',
          name: 'organization'
        }
      }, {
        path: '/overview/events',
        component: () => import('@/views/overview/events/index.vue'),
        meta: {
          title: '大事件',
          name: 'events'
        }
      }
    ]
  },
  {
    path: '/trends',
    redirect: '/trends/news',
    component: () => import('@/views/trends/main.vue'),
    meta: {
      title: '医院动态',
      name: 'trends'
    },
    children: [
      {
        path: '/trends/news',
        component: () => import('@/views/trends/components/index.vue'),
        meta: {
          title: '医院新闻',
          name: 'news'
        }
      },
      {
        path: '/trends/nurse',
        component: () => import('@/views/trends/components/index.vue'),
        meta: {
          title: '护理园地',
          name: 'nurse'
        }
      },
      {
        path: '/trends/insurance',
        component: () => import('@/views/trends/components/index.vue'),
        meta: {
          title: '医保政策',
          name: 'insurance'
        }
      },
      {
        path: '/trends/notice',
        component: () => import('@/views/trends/components/index.vue'),
        meta: {
          title: '通知公告',
          name: 'notice'
        }
      },
      {
        path: '/trends/finance',
        component: () => import('@/views/trends/components/index.vue'),
        meta: {
          title: '财务公开',
          name: 'finance'
        }
      }
    ]
  },
  {
    path: '/404',
    hidden: true,
    component: () => import('@/views/error-page/404'),
    meta: {
      title: '404',
      name: '404'
    }
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

router.afterEach((to, from) => {
  store.dispatch('app/getBreadCrumbData', to)
})
