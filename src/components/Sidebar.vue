<template>
  <v-navigation-drawer app right clipped v-model="drawer" mobile-break-point="960">
    <v-layout justify-center>
      <p>test</p>
    </v-layout>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Sidebar"
});
</script>
