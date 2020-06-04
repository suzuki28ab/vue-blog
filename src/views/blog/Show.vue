<template>
  <v-container>
    <v-layout justify-end>
      <v-flex lg10 sm12 :class="$style.show">
        <PostTitle :post="post"></PostTitle>
        <Markdown :body="post.content"></Markdown>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import PostTitle from "@/components/blog/PostTitle.vue";
import Markdown from "@/components/blog/Markdown.vue";
import { db } from "@/plugins/firebase";

export default Vue.extend({
  name: "BlogShow",
  data: () => ({
    post: {}
  }),
  created() {
    db.collection("posts")
      .doc(this.$route.params.id)
      .get()
      .then(doc => {
        this.post = doc.data();
      });
  },
  components: {
    PostTitle,
    Markdown
  }
});
</script>

<style module>
.show {
  height: 100%;
  padding: 10px;
  background-color: rgb(255, 255, 255);
}
</style>
