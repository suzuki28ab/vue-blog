<template>
  <div :class="$style.post_title">
    <h2>title</h2>
    <p>content</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PostTitle"
});
</script>

<style module>
.post_title {
  border: solid 1px rgb(176, 199, 49);
  margin-bottom: 20px;
}
</style>
