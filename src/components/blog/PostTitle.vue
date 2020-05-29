<template>
  <div :class="$style.post_title">
    <router-link :to="{ name: 'BlogShow', params: { id: post.id } }" tag="div">
      <div :class="$style.post_caption">
        <span class="overline">{{ formatedDate }}</span>
        <span class="overline">{{ post.category }}</span>
      </div>
      <h3 class="title">{{ post.title }}</h3>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { formatTimeStamp } from "@/plugins/firebase";

export default Vue.extend({
  name: "PostTitle",
  props: ["post"],
  computed: {
    formatedDate() {
      return formatTimeStamp(this.post.createdAt);
    }
  }
});
</script>

<style module>
.post_title {
  margin-bottom: 40px;
  padding: 0 10px;
}

.post_caption span {
  margin-right: 10px;
}
</style>
