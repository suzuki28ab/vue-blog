<template>
  <div>
    <Header></Header>
    <Sidebar></Sidebar>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex lg2></v-flex>
          <v-flex lg10 sm12>
            <PostTitle></PostTitle>
            <PostTitle></PostTitle>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import PostTitle from "@/components/blog/PostTitle";

export default Vue.extend({
  name: "Blog",
  components: {
    Sidebar,
    Header,
    PostTitle
  }
});
</script>
