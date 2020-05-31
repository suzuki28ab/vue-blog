<template>
  <v-container>
    <v-layout>
      <v-flex lg2></v-flex>
      <v-flex lg10 sm12 :class="$style.show">
        <Markdown :body="post.content"></Markdown>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Markdown from "@/components/blog/Markdown";
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
