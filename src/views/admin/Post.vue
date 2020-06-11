<template>
  <v-container>
    <v-data-table :headers="headers" :items="posts">
      <template v-slot:item.title="{ item }">
        <router-link :to="{ name: 'AdminPostEdit', params: {id: item.id} }">{{ item.title }}</router-link>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { db } from "@/plugins/firebase";
import { PostData } from "@/types/post";

export type DataType = {
  posts: PostData[];
  headers: object[];
};

export default Vue.extend({
  name: "Post",
  data(): DataType {
    return {
      posts: [],
      headers: [
        {
          text: "title",
          value: "title"
        },
        {
          text: "category",
          value: "category"
        }
      ]
    };
  },
  created() {
    db.collection("posts")
      .orderBy("createdAt", "desc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const post: PostData = doc.data() as PostData;
          post.id = doc.id;
          this.posts.push(post);
        });
      });
  }
});
</script>
