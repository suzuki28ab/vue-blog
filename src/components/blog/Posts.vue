<template>
  <v-layout justify-end>
    <v-flex lg10 sm12 :class="$style.bg">
      <div v-for="post in posts" :key="post.id">
        <PostTitle :post="post"></PostTitle>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import PostTitle from "@/components/blog/PostTitle.vue";

export default Vue.extend({
  name: "Posts",
  props: ["posts"],
  components: {
    PostTitle
  }
});
</script>

<style module>
.bg {
  padding: 10px;
  background-color: rgb(255, 255, 255);
}
</style>
