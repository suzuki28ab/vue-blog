<template>
  <v-container>
    <v-layout justify-end>
      <v-flex lg10 sm12>
        <div v-for="post in posts" :key="post.id">
          <PostTitle :post="post"></PostTitle>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { db } from "@/plugins/firebase";
import PostTitle from "@/components/blog/PostTitle";

export default Vue.extend({
  name: "Result",
  data: () => ({
    posts: []
  }),
  mounted() {
    this.getPosts(this.$route.query);
  },
  methods: {
    getPosts: function(query) {
      this.posts = [];
      if (query.category) {
        db.collection("posts")
          .where("category", "==", query.category)
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              const id = doc.id;
              const { title, content, createdAt } = doc.data();
              this.posts.push({ id, title, content, createdAt });
            });
          });
      } else if (query.tag) {
        db.collection("posts")
          .where("tags", "array-contains", query.tag)
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              const id = doc.id;
              const { title, content, createdAt } = doc.data();
              this.posts.push({ id, title, content, createdAt });
            });
          });
      }
    }
  },
  components: {
    PostTitle
  },
  beforeRouteUpdate(to, from, next) {
    this.getPosts(to.query);
    next();
  }
});
</script>
