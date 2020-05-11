<template>
  <v-container>
    <v-text-field label="title" v-model="title"></v-text-field>
    <v-select :items="categories" v-model="category" label="category"></v-select>
    <mavon-editor language="ja" v-model="content" @imgAdd="imgAdd" ref="md" :class="$style.editor"></mavon-editor>
    <v-btn @click="save" :class="$style.save">save</v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import "@/plugins/mavon-editor";
import { db, storage } from "@/plugins/firebase";

export default Vue.extend({
  name: "PostNew",
  data: () => ({
    title: "",
    content: "",
    categories: [],
    category: ""
  }),
  methods: {
    save: function() {
      db.collection("posts")
        .add({
          title: this.title,
          content: this.content,
          category: this.category,
          createdAt: new Date()
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    },
    imgAdd: function(pos, $file) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child($file.name);
      fileRef
        .put($file)
        .then(snapshot => {
          return snapshot.ref.getDownloadURL();
        })
        .then(url => {
          console.log(url);
          this.$refs.md.$img2Url(pos, url);
          return url;
        });
    }
  },
  created() {
    db.collection("categories")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.categories.push(doc.data().name);
        });
      });
  }
});
</script>

<style module>
.save {
  margin-top: 20px;
}
.editor {
  z-index: 0 !important;
}
</style>
