<template>
  <v-container>
    <Posts :posts="posts"></Posts>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Posts from "@/components/blog/Posts.vue";

export default Vue.extend({
  name: "Index",
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    }
  },
  created() {
    if (this.$store.state.posts.posts.length == 0) {
      this.$store.dispatch("posts/getPosts");
    }
  },
  components: {
    Posts
  }
});
</script>
