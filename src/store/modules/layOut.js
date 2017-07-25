import _ from 'lodash'
import Promise from 'bluebird'
import cart from '@/api/layOut.js'
import * as Types from '@/store/mutation-types'

// initial state
const state = {
  Breadcrumb: []
}

// getters
const getters = {
  Breadcrumb: state => state.Breadcrumb
}

// actions
const actions = {
  [Types.SET_BREADCRUMB] ({ commit }, Breadcrumb) {
    commit(Types.SET_BREADCRUMB, { Breadcrumb })
  },
}

// mutations
const mutations = {
  [Types.SET_BREADCRUMB] (state, { Breadcrumb }) {
    state.Breadcrumb = Breadcrumb
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
