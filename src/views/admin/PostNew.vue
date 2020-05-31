<template>
  <v-container>
    <v-text-field label="title" v-model="title"></v-text-field>
    <v-select :items="categories" v-model="category" label="category"></v-select>
    <v-select :items="tagList" v-model="tags" label="tags" multiple></v-select>
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
    tagList: [],
    category: "",
    tags: []
  }),
  methods: {
    save: function() {
      db.collection("posts")
        .add({
          title: this.title,
          content: this.content,
          category: this.category,
          tags: this.tags,
          createdAt: new Date()
        })
        .then(function() {
          alert("Document successfully written!");
        })
        .catch(function(error) {
          alert(error);
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
    db.collection("tags")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.tagList.push(doc.data().name);
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
