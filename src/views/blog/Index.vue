<template>
  <v-container style="height: 100%">
    <v-layout justify-end style="height: 100%">
      <v-flex lg10 sm12 :class="$style.index">
        <div v-for="post in posts" :key="post.id">
          <PostTitle :post="post"></PostTitle>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import PostTitle from "@/components/blog/PostTitle";

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
    PostTitle
  }
});
</script>

<style module>
.index {
  height: 100%;
  background-color: rgb(255, 255, 255);
}
</style>
