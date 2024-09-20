// import Layout from '@/layout'
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

Vue.use(Router)
export const constantRoutes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/search/:name',
    component: () => import('@/views/search/index.vue'),
    name: 'search',
    meta: {
      title: '搜索结果',
      name: 'search'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      name: 'home'
    }
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import('@/views/jobs/index.vue'),
    meta: {
      title: '人才招聘',
      name: 'jobs'
    }
  },
  {
    path: '/oa',
    name: 'oa',
    component: () => import('@/views/oa/index.vue'),
    meta: {
      title: 'OA办公',
      name: 'oa'
    }
  },
  {
    path: '/overview',
    name: 'overview',
    redirect: '/overview/introduction',
    component: () => import('@/views/overview/main.vue'),
    meta: {
      title: '医院概况',
      name: 'overview'
    },
    children: [
      {
        path: '/overview/introduction',
        name: 'introduction',
        component: () => import('@/views/overview/introduction/index.vue'),
        meta: {
          title: '医院简介',
          name: 'introduction'
        }
      }, {
        path: '/overview/organization',
        name: 'organization',
        component: () => import('@/views/overview/organization/index.vue'),
        meta: {
          title: '组织架构',
          name: 'organization'
        }
      }, {
        path: '/overview/events',
        name: 'events',
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
    name: 'trends',
    redirect: '/trends/news',
    component: () => import('@/views/trends/main.vue'),
    meta: {
      title: '医院动态',
      name: 'trends'
    },
    children: [
      {
        path: '/trends/news',
        name: 'trendsNews',
        component: () => import('@/views/trends/components/index.vue'),
        meta: {
          title: '医院新闻',
          name: 'news',
        },
        children:[
          {
            path: '/trends/news/details/:date/:name',
            name: 'newsDetails',
            component: () => import('@/views/trends/components/details.vue'),
            meta: {
              title: '详情',
              name: 'newsDetails',
              pPath:'/trends/news'
            },
          }
        ]
      },
      {
        path: '/trends/nurse',
        name: 'nurse',
        component: () => import('@/views/trends/components/index.vue'),
        meta: {
          title: '护理园地',
          name: 'nurse',
        },
        children:[
          {
            path: '/trends/nurse/details/:date/:name',
            name: 'nurseDetails',
            component: () => import('@/views/trends/components/details.vue'),
            meta: {
              title: '详情',
              name: 'nurseDetails',
               pPath:'/trends/nurse'
            },
          }
        ]
      },
      {
        path: '/trends/insurance',
        name: 'insurance',
        component: () => import('@/views/trends/components/index.vue'),
        meta: {
          title: '医保政策',
          name: 'insurance',
        },
        children:[
          {
            path: '/trends/insurance/details/:date/:name',
            name: 'insuranceDetails',
            component: () => import('@/views/trends/components/details.vue'),
            meta: {
              title: '详情',
              name: 'insuranceDetails',
              pPath:'/trends/insurance'
            },
          }
        ]
      },
      {
        path: '/trends/notice',
        name: 'notice',
        component: () => import('@/views/trends/components/index.vue'),
        meta: {
          title: '通知公告',
          name: 'notice',
        },
        children:[
          {
            path: '/trends/notice/details/:date/:name',
            name: 'noticeDetails',
            component: () => import('@/views/trends/components/details.vue'),
            meta: {
              title: '详情',
              name: 'noticeDetails',
              pPath:'/trends/notice'
            },
          }
        ]
      },
      {
        path: '/trends/finance',
        name: 'finance',
        component: () => import('@/views/trends/components/index.vue'),
        meta: {
          title: '财务公开',
          name: 'finance',
        },
        children:[
          {
            path: '/trends/finance/details/:date/:name',
            name: 'financeDetails',
            component: () => import('@/views/trends/components/details.vue'),
            meta: {
              title: '详情',
              name: 'financeDetails',
              pPath:'/trends/finance'
            },
          }
        ]
      }
    ]
  },
  {
    path: '/culture',
    name: 'culture',
    redirect: '/culture/news',
    component: () => import('@/views/culture/main.vue'),
    meta: {
      title: '党建文化',
      name: 'culture'
    },
    children: [
      {
        path: '/culture/news',
        name: 'cultureNews',
        component: () => import('@/views/culture/components/index.vue'),
        meta: {
          title: '党建动态',
          name: 'cultureNews',
        },
        children:[
          {
            path: '/culture/news/details/:date/:name',
            name: 'cultureNewsDetails',
            component: () => import('@/views/culture/components/details.vue'),
            meta: {
              title: '详情',
              name: 'cultureNewsDetails',
              pPath:'/culture/news'
            },
          }
        ]
      },
      {
        path: '/culture/clean',
        name: 'cultureClean',
        component: () => import('@/views/culture/components/index.vue'),
        meta: {
          title: '党风廉政',
          name: 'cultureClean',
        },
        children:[
          {
            path: '/culture/clean/details/:date/:name',
            name: 'cultureCleanDetails',
            component: () => import('@/views/culture/components/details.vue'),
            meta: {
              title: '详情',
              name: 'cultureCleanDetails',
              pPath:'/culture/clean'
            },
          }
        ]
      },
      {
        path: '/culture/education',
        name: 'cultureEducation',
        component: () => import('@/views/culture/components/index.vue'),
        meta: {
          title: '文化建设',
          name: 'cultureEducation',
        },
        children:[
          {
            path: '/culture/education/details/:date/:name',
            name: 'cultureEducationDetails',
            component: () => import('@/views/culture/components/details.vue'),
            meta: {
              title: '详情',
              name: 'cultureEducationDetails',
              pPath:'/culture/education'
            },
          }
        ]
      },
      {
        path: '/culture/video',
        name: 'cultureVideo',
        component: () => import('@/views/culture/components/index.vue'),
        meta: {
          title: '影音视窗',
          name: 'cultureVideo',
        },
        children:[
          {
            path: '/culture/video/details/:date/:name',
            name: 'cultureVideoDetails',
            component: () => import('@/views/culture/components/details.vue'),
            meta: {
              title: '详情',
              name: 'cultureVideoDetails',
              pPath:'/culture/video'
            },
          }
        ]
      },
      {
        path: '/culture/workers',
        name: 'cultureWorkers',
        component: () => import('@/views/culture/components/index.vue'),
        meta: {
          title: '职工园地',
          name: 'cultureWorkers',
        },
        children:[
          {
            path: '/culture/workers/details/:date/:name',
            name: 'cultureWorkersDetails',
            component: () => import('@/views/culture/components/details.vue'),
            meta: {
              title: '详情',
              name: 'cultureWorkersDetails',
              pPath:'/culture/workers'
            },
          }
        ]
      },
      {
        path: '/culture/link',
        name: 'cultureLink',
        component: () => import('@/views/culture/components/index.vue'),
        meta: {
          title: '友情链接',
          name: 'cultureLink',
        },
        children:[
          {
            path: '/culture/link/details/:date/:name',
            name: 'cultureLinkDetails',
            component: () => import('@/views/culture/components/details.vue'),
            meta: {
              title: '详情',
              name: 'cultureLinkDetails',
              pPath:'/culture/link'
            },
          }
        ]
      },
      {
        path: '/culture/school',
        name: 'cultureSchool',
        component: () => import('@/views/culture/components/index.vue'),
        meta: {
          title: '网上党校',
          name: 'cultureSchool',
        },
        children:[
          {
            path: '/culture/school/details/:date/:name',
            name: 'cultureSchoolDetails',
            component: () => import('@/views/culture/components/details.vue'),
            meta: {
              title: '详情',
              name: 'cultureSchoolDetails',
              pPath:'/culture/school'
            },
          }
        ]
      },
      {
        path: '/culture/thinking',
        name: 'cultureThinking',
        component: () => import('@/views/culture/components/index.vue'),
        meta: {
          title: '患者心声',
          name: 'cultureThinking',
        },
        children:[
          {
            path: '/culture/thinking/details/:date/:name',
            name: 'cultureThinkingDetails',
            component: () => import('@/views/culture/components/details.vue'),
            meta: {
              title: '详情',
              name: 'cultureThinkingDetails',
              pPath:'/culture/thinking'
            },
          }
        ]
      },
      {
        path: '/culture/study',
        name: 'cultureStudy',
        component: () => import('@/views/culture/components/index.vue'),
        meta: {
          title: '《准则》和《条例》学习专栏',
          name: 'cultureStudy',
        },
        children:[
          {
            path: '/culture/study/details/:date/:name',
            name: 'cultureStudyDetails',
            component: () => import('@/views/culture/components/details.vue'),
            meta: {
              title: '详情',
              name: 'cultureStudyDetails',
              pPath:'/culture/study'
            },
          }
        ]
      },
    ]
  },
  {
    path: '/404',
    name: '404',
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
