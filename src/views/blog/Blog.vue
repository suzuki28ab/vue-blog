<template>
  <div :class="$style.back">
    <Appbar></Appbar>
    <div>
      <v-content>
        <router-view></router-view>
      </v-content>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Appbar from "@/components/Appbar.vue";

export default Vue.extend({
  name: "Blog",
  components: {
    Appbar
  }
});
</script>

<style module>
.back {
  width: 100%;
  height: 100%;
  background-color: rgb(245, 247, 246);
}
</style>
