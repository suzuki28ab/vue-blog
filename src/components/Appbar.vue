<template>
  <div>
    <v-app-bar app clipped-right color="#E53935">
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer app right clipped v-model="drawer" mobile-break-point="960">
      <v-layout justify-center>
        <p>test</p>
      </v-layout>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Header",
  data: () => ({
    drawer: null
  })
});
</script>
