<template>
  <div :class="$style.blog">
    <Maincomponent></Maincomponent>
    <Sidebarcomponent></Sidebarcomponent>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Maincomponent from "../components/blog/Maincomponent";
import Sidebarcomponent from "../components/blog/Sidebarcomponent";

export default Vue.extend({
  name: "Blog",
  components: {
    Maincomponent,
    Sidebarcomponent
  }
});
</script>

<style module>
.blog {
  display: flex;
  justify-content: space-around;
}
</style>
