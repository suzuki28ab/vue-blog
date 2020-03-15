<template>
  <div :class="$style.post_title">
    <router-link :to="{ name: 'BlogShow', params: { id: post.id } }" tag="div">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PostTitle",
  props: ["post"]
});
</script>

<style module>
.post_title {
  border: solid 1px rgb(176, 199, 49);
  margin-bottom: 20px;
}
</style>
