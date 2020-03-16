import firebase from "@/plugins/firebase;

export const posts = {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    addPosts(state, post) {
      state.comments.push(post)
    },
  },
  actions: {
    getPosts: function ({ commit }) {
      firebase.firestore().collection('posts').get().then(snapshot => {
        snapshot.forEach(doc => commit('addPosts', doc.data()))
      })
    }
  }
}
