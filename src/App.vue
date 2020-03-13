<template>
  <v-app>
    <Header></Header>
    <Sidebar></Sidebar>
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
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default Vue.extend({
  name: "App",
  components: {
    Sidebar,
    Header
  }
});
</script>
