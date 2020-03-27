<template>
  <v-container>
    <v-simple-table>
      <thead>
        <tr>
          <th>test</th>
          <th>test2</th>
        </tr>
      </thead>
      <tbody v-for="post in posts" :key="post.id">
        <tr>
          <td>{{ post.id }}</td>
          <td>{{ post.content }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Post",
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    }
  },
  created() {
    if (this.$store.state.posts.posts.length == 0) {
      this.$store.dispatch("posts/getPosts");
    }
  }
});
</script>
