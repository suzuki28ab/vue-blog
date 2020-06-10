<template>
  <div v-highlight>
    <div v-html="compileMarkdown()" :class="$style.markdown"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import marked from "marked";

import "vue-code-highlight/themes/prism-coy.css";

import "prism-es6/components/prism-markup-templating";
import "prism-es6/components/prism-json";
import "prism-es6/components/prism-yaml";

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
.markdown hr {
  margin: 30px 0;
}
.markdown code {
  box-shadow: 0 0;
}
</style>
