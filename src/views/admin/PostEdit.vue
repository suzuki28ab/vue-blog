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
import { PostData } from "@/types/post";

import PostInput from "@/components/admin/PostInput.vue";

export type DataType = {
  title: string;
  id: string;
  content: string;
  category: string;
  tags: string[];
  post: PostData;
};

export default Vue.extend({
  name: "PostEdit",
  data(): DataType {
    return {
      title: "",
      id: "",
      content: "",
      category: "",
      tags: [],
      post: {} as PostData,
    };
  },
  created() {
    db.collection("posts")
      .doc(this.$route.params.id)
      .get()
      .then((doc) => {
        const post = doc.data() as PostData;
        post.id = doc.id;
        this.post = post;
        this.title = post.title;
        this.id = post.id;
        this.content = post.content;
        this.category = post.category;
        this.tags = post.tags;
      });
  },
  methods: {
    save: function () {
      db.collection("posts")
        .doc(this.$route.params.id)
        .update({
          title: this.title,
          id: this.id,
          content: this.content,
          category: this.category,
          tags: this.tags,
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
