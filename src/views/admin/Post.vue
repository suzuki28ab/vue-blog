<template>
  <v-container>
    <v-simple-table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody v-for="post in posts" :key="post.id">
        <tr>
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.category }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { db } from "@/plugins/firebase";
import { PostData } from "@/types/post";

export type DataType = {
  posts: PostData[];
};

export default Vue.extend({
  name: "Post",
  data(): DataType {
    return {
      posts: []
    };
  },
  created() {
    db.collection("posts")
      .orderBy("createdAt", "asc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const post: PostData = doc.data() as PostData;
          this.posts.push(post);
        });
      });
  },
});
</script>
