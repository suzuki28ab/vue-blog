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
  props: {
    body: String
  },
  methods: {
    compileMarkdown() {
      return marked(this.body);
    }
  }
});
</script>

<style module>
.markdown img {
  max-width: 90%;
}
.markdown h2 {
  margin-top: 30px;
}
.markdown h3 {
  margin-top: 30px;
  margin-bottom: 10px;
}
.markdown h4 {
  margin: 10px 0;
}
</style>
