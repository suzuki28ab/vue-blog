import firebase from "@/plugins/firebase";

export const posts = {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, post) {
      state.posts.push(post)
    },
    resetPosts(state) {
      state.posts = [];
    }
  },
  actions: {
    getPosts({ commit }) {
      firebase.firestore().collection('posts').get()
        .then(snapshot => {
          snapshot.forEach(doc => commit('setPosts', doc.data()))
        })
    },
    removePosts(context) {
      context.commit('resetPosts')
    }

  }
}
