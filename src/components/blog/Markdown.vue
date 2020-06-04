<template>
  <div>
    <div v-html="compileMarkdown()" :class="$style.markdown"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import marked from "marked";

export default Vue.extend({
  name: "Markdown",
  props: ["body"],
  methods: {
    compileMarkdown() {
      return marked(this.body);
    }
  }
});
</script>

<style module>
.markdown img {
  width: 90%;
}
</style>
