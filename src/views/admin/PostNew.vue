<template>
  <v-container>
    <PostInput
      :title.sync="title"
      :id.sync="id"
      :content.sync="content"
      :category.sync="category"
      :tags.sync="tags"
    ></PostInput>
    <v-btn @click="save" :class="$style.save">save</v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import "@/plugins/mavon-editor";
import { db } from "@/plugins/firebase";

import PostInput from "@/components/admin/PostInput.vue";

export type DataType = {
  title: string;
  id: string;
  content: string;
  category: string;
  tags: string[];
};

export default Vue.extend({
  name: "PostNew",
  data(): DataType {
    return {
      title: "",
      id: "",
      content: "",
      category: "",
      tags: [],
    };
  },
  methods: {
    save: function () {
      db.collection("posts")
        .add({
          title: this.title,
          id: this.id,
          content: this.content,
          category: this.category,
          tags: this.tags,
          createdAt: new Date(),
        })
        .then(function () {
          alert("Document successfully written!");
        })
        .catch(function (error) {
          alert(error);
        });
    },
  },
  components: {
    PostInput,
  },
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
