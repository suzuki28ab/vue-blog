<template>
  <div>
    <Appbar></Appbar>
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
import Appbar from "@/components/Appbar";
import PostTitle from "@/components/blog/PostTitle";

export default Vue.extend({
  name: "Blog",
  components: {
    Appbar,
    PostTitle
  }
});
</script>
