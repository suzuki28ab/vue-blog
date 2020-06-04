import { db } from "@/plugins/firebase";
import { PostData } from "@/types/post";

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
      db.collection("posts").orderBy('createdAt', 'desc').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            const post: PostData = doc.data();
            post.id = doc.id
            commit("setPosts", post)
          })
        });
    }
  }
}
