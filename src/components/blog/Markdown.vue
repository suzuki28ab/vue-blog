<template>
  <div v-html="compileMarkdown"></div>
</template>

<script lang="ts">
import Vue from "vue";
import marked from "marked";

export default Vue.extend({
  name: "Markdown",
  props: ["body"],
  computed: {
    compileMarkdown() {
      return marked(this.body);
    }
  }
});
</script>
