<template>
  <v-container>
    <v-layout>
      <v-flex lg2></v-flex>
      <v-flex lg10 sm12>
        <Markdown :body="post.content"></Markdown>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Markdown from "@/components/blog/Markdown";

export default Vue.extend({
  name: "BlogShow",
  computed: {
    post() {
      return this.$store.state.posts.post;
    }
  },
  created() {
    this.$store.dispatch("posts/getPost", this.$route.params.id);
  },
  components: {
    Markdown
  }
});
</script>
