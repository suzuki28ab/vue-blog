<template>
  <v-container>
    <Posts :posts="posts"></Posts>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { db } from "@/plugins/firebase";
import Posts from "@/components/blog/Posts.vue";
import { PostData } from "@/types/post";

export type DataType = {
  posts: PostData[];
};

export default Vue.extend({
  name: "Result",
  data(): DataType {
    return {
      posts: []
    };
  },
  mounted() {
    this.getPosts(this.$route.query);
  },
  methods: {
    getPosts: function(query: any) {
      this.posts = [];
      if (query.category) {
        db.collection("posts")
          .where("category", "==", query.category)
          .orderBy("createdAt", "desc")
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              const post: PostData = doc.data() as PostData;
              post.id = doc.id;
              this.posts.push(post);
            });
          });
      } else if (query.tag) {
        db.collection("posts")
          .where("tags", "array-contains", query.tag)
          .orderBy("createdAt", "desc")
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              const post: PostData = doc.data() as PostData;
              post.id = doc.id;
              this.posts.push(post);
            });
          });
      }
    }
  },
  components: {
    Posts
  },
  beforeRouteUpdate(to, from, next) {
    this.getPosts(to.query);
    next();
  }
});
</script>
