import { db } from "@/plugins/firebase";

export const posts = {
  namespaced: true,
  state: {
    post: {},
    posts: []
  },
  mutations: {
    setPosts(state, post) {
      state.posts.push(post)
    },
    setPost(state, post) {
      state.post = post
    }
  },
  actions: {
    getPosts({ commit }) {
      db.collection("posts").get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            const id = doc.id
            const { title, content, createdAt } = doc.data()
            commit("setPosts", { id, title, content, createdAt })
          })
        });
    },
    getPost({ commit }, id: string) {
      db.collection("posts")
        .doc(id)
        .get()
        .then(doc => {
          commit("setPost", doc.data());
        });
    }
  }
}
