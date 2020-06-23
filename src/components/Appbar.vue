<template>
  <div>
    <v-app-bar app flat clipped-right color="rgb(107, 173, 159)">
      <v-spacer></v-spacer>
      <router-link :to="{ name: 'BlogIndex' }" :class="$style.logo">
        <v-img src="../assets/zukan.svg" contain></v-img>
      </router-link>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer app right floating clipped v-model="drawer" mobile-break-point="960">
      <div :class="$style.sidebar">
        <v-list flat dense>
          <v-subheader class="font-weight-medium">カテゴリー</v-subheader>
          <v-divider></v-divider>
          <v-list-item
            v-for="category in categories"
            :key="category"
            :to="{ name: 'BlogResult', query: { category: category } }"
          >
            <v-list-item-content>
              <v-list-item-title v-text="category"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list flat dense>
          <v-subheader class="font-weight-medium">タグ</v-subheader>
          <v-divider></v-divider>
          <v-list-item
            v-for="tag in tags"
            :key="tag"
            :to="{ name: 'BlogResult', query: { tag: tag } }"
          >
            <v-list-item-content>
              <v-list-item-title v-text="tag"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { db } from "@/plugins/firebase";

export type DataType = {
  drawer: null;
  categories: string[];
  tags: string[];
};

export default Vue.extend({
  name: "Header",
  data(): DataType {
    return {
      drawer: null,
      categories: [],
      tags: []
    };
  },
  created() {
    db.collection("categories")
      .orderBy("name", "asc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.categories.push(doc.data().name);
        });
      });
    db.collection("tags")
      .orderBy("name", "asc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.tags.push(doc.data().name);
        });
      });
  }
});
</script>

<style module>
.sidebar {
  width: 100%;
  height: 100%;
  background-color: rgb(245, 247, 246);
}
.logo {
  max-width: 90%;
}
</style>
