<template>
  <div>
    <v-app-bar app clipped-left color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer app clipped v-model="drawer" mobile-break-point="960">
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">設定項目</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list nav>
          <v-list-item v-for="navList in navLists" :key="navList.name" :to="{ name: navList.link }">
            <v-list-item-icon>
              <v-icon small>{{ navList.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ navList.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Header",
  data: () => ({
    drawer: null,
    navLists: [{ name: "投稿", icon: "fab fa-blogger-b", link: "AdminPost" }]
  })
});
</script>
