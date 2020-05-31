<template>
  <div :class="$style.back">
    <Appbar></Appbar>
    <div style="height: 100%">
      <v-content style="height: 100%">
        <router-view></router-view>
      </v-content>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Appbar from "@/components/Appbar";

export default Vue.extend({
  name: "Blog",
  methods: {
    increment() {
      this.$store.commit("test/increment");
    }
  },
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
