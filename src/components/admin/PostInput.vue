<template>
  <div>
    <v-text-field label="title" v-model="inputTitle"></v-text-field>
    <v-select :items="categories" v-model="inputCategory" label="category"></v-select>
    <v-select :items="tagList" v-model="inputTags" label="tags" multiple></v-select>
    <mavon-editor
      language="ja"
      v-model="inputContent"
      @imgAdd="imgAdd"
      ref="md"
      :class="$style.editor"
    ></mavon-editor>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "@/plugins/mavon-editor";
import { db, storage } from "@/plugins/firebase";

export type DataType = {
  categories: string[];
  tagList: string[];
};

export default Vue.extend({
  name: "PostInput",
  data(): DataType {
    return {
      categories: [],
      tagList: []
    };
  },
  props: {
    title: String,
    content: String,
    category: String,
    tags: Array
  },
  computed: {
    inputTitle: {
      get: function(): string {
        return (this as any).title;
      },
      set: function(value) {
        (this as any).$emit("update:title", value);
      }
    },
    inputContent: {
      get: function(): string {
        return (this as any).content;
      },
      set: function(value) {
        (this as any).$emit("update:content", value);
      }
    },
    inputCategory: {
      get: function(): string {
        return (this as any).category;
      },
      set: function(value) {
        (this as any).$emit("update:category", value);
      }
    },
    inputTags: {
      get: function(): string {
        return (this as any).tags;
      },
      set: function(value) {
        (this as any).$emit("update:tags", value);
      }
    }
  },
  created() {
    db.collection("categories")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          (this as any).categories.push(doc.data().name);
        });
      });
    db.collection("tags")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          (this as any).tagList.push(doc.data().name);
        });
      });
  },
  methods: {
    imgAdd: function(pos: any, $file: any) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child($file.name);
      fileRef
        .put($file)
        .then(snapshot => {
          return snapshot.ref.getDownloadURL();
        })
        .then(url => {
          (this as any).$refs.md.$img2Url(pos, url);
          return url;
        });
    }
  }
});
</script>

<style module>
.editor {
  z-index: 0 !important;
}
</style>
