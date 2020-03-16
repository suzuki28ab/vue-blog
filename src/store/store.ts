import Vue from 'vue'
import Vuex from 'vuex'
import { test } from './test'
import { posts } from './posts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test,
    posts
  }
})
