<template>
  <v-container>
    <Posts :posts="posts"></Posts>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Posts from "@/components/blog/Posts.vue";
import { db } from "@/plugins/firebase";
import { PostData } from "@/types/post";

export type DataType = {
  posts: PostData[];
};

export default Vue.extend({
  name: "Index",
  data(): DataType {
    return {
      posts: []
    };
  },
  created() {
    db.collection("posts")
      .orderBy("createdAt", "asc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const post: PostData = doc.data() as PostData;
          post.id = doc.id;
          this.posts.push(post);
        });
      });
  },
  components: {
    Posts
  }
});
</script>
