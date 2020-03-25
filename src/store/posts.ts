import { db } from "@/plugins/firebase";

export const posts = {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, post) {
      state.posts.push(post)
    }
  },
  actions: {
    getPosts({ commit }) {
      db.collection('posts').get()
        .then(snapshot => {
          snapshot.forEach(doc => commit('setPosts', doc.data()))
        })
    }
  }
}