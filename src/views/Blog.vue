<template>
  <div>
    <PostTitle></PostTitle>
    <PostTitle></PostTitle>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostTitle from "@/components/blog/PostTitle";

export default Vue.extend({
  name: "Blog",
  components: {
    PostTitle
  }
});
</script>
