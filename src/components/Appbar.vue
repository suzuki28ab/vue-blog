<template>
  <div>
    <v-app-bar app flat clipped-right color="rgb(161, 172, 221)">
      <v-spacer></v-spacer>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer app right clipped v-model="drawer" mobile-break-point="960">
      <div :class="$style.sidebar">
        <v-list flat dense>
          <v-subheader>カテゴリー</v-subheader>
          <v-divider></v-divider>
          <v-list-item
            v-for="category in categories"
            :key="category.name"
            :to="{ name: 'BlogResult', query: category.query }"
          >
            <v-list-item-content>
              <v-list-item-title v-text="category.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list flat dense>
          <v-subheader>タグ</v-subheader>
          <v-divider></v-divider>
          <v-list-item
            v-for="tag in tags"
            :key="tag.name"
            :to="{ name: 'BlogResult', query: tag.query }"
          >
            <v-list-item-content>
              <v-list-item-title v-text="tag.name"></v-list-item-title>
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

export default Vue.extend({
  name: "Header",
  data: () => ({
    drawer: null,
    categories: [],
    tags: []
  }),
  created() {
    db.collection("categories")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const categoryName = doc.data().name;
          this.categories.push({
            name: categoryName,
            query: { category: categoryName }
          });
        });
      });
    db.collection("tags")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const tagName = doc.data().name;
          this.tags.push({
            name: tagName,
            query: { tag: tagName }
          });
        });
      });
  }
});
</script>

<style module>
.sidebar {
  width: 100%;
  height: 100%;
  background-color: rgb(246, 248, 253);
  color: rgb(161, 172, 221);
}
</style>
