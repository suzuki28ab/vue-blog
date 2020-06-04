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
import Appbar from "@/components/admin/Appbar.vue";

export default Vue.extend({
  name: "Admin",
  components: {
    Appbar
  }
});
</script>
