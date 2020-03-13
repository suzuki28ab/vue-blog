<template>
  <v-app>
    <v-navigation-drawer app right clipped v-model="drawer" mobile-break-point="960">
      <v-layout justify-center>
        <p>test</p>
      </v-layout>
    </v-navigation-drawer>
    <v-app-bar app clipped-right color="primary">
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex lg2></v-flex>
          <v-flex lg10 sm12>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    drawer: null
  })
});
</script>
