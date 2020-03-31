<template>
  <v-container>
    <v-text-field label="title" v-model="title"></v-text-field>
    <mavon-editor language="ja" v-model="content"></mavon-editor>
    <v-btn @click="save" :class="$style.save">save</v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import "@/plugins/mavon-editor";
import { db } from "@/plugins/firebase";

export default Vue.extend({
  name: "PostNew",
  data: () => ({
    title: "",
    content: ""
  }),
  methods: {
    save: function() {
      const createdAt = new Date();
      db.collection("posts")
        .add({
          title: this.title,
          content: this.content,
          createdAt: createdAt
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  }
});
</script>

<style module>
.save {
  margin-top: 20px;
}
</style>
