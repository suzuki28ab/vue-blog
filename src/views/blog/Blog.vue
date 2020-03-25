<template>
  <div>
    <Appbar></Appbar>
    <v-content>
      <router-view></router-view>
    </v-content>
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
