<template>
  <div :class="$style.blog">
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

<style module>
.blog {
  background-color: rgb(236, 253, 238);
}
</style>
