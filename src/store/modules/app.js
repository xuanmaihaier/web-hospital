const state = {
  breadcrumbdatalist: null,
}

const mutations = {
  SET_BREAD_CRUMB_DATA: (state, router) => {
    const routerList = router.matched.filter((item) => item.meta.title)
    if (routerList && routerList.length) {
      routerList.forEach((value) => {
        value.title = value.meta.title
      })
    }
    state.breadcrumbdatalist = routerList
  }
}

const actions = {
  getBreadCrumbData({ commit }, router) {
    commit('SET_BREAD_CRUMB_DATA', router)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
