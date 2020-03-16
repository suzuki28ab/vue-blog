<template>
  <div>
    <Appbar></Appbar>
    <v-content>
      <v-container>
        <v-layout justify-end>
          <v-flex lg10 sm12>
            <div v-for="post in posts" :key="post.id">
              <PostTitle :post="post"></PostTitle>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Appbar from "@/components/Appbar";
import PostTitle from "@/components/blog/PostTitle";

export default Vue.extend({
  name: "Blog",
  methods: {
    increment() {
      this.$store.commit("test/increment");
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    }
  },
  created() {
    this.$store.dispatch("posts/getPosts");
  },
  destroyed() {
    this.$store.dispatch("posts/removePosts");
    this.$el.remove();
  },
  components: {
    Appbar,
    PostTitle
  }
});
</script>
