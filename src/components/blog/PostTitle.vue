<template>
  <div :class="$style.title">
    <router-link :to="{ name: 'BlogShow', params: { id: post.id } }" tag="div">
      <div :class="$style.caption">
        <span class="overline">{{ formatedDate }}</span>
        <span class="overline">{{ post.category }}</span>
      </div>
      <h3 class="title">{{ post.title }}</h3>
      <div :class="$style.tags">
        <v-chip x-small v-for="tag in post.tags" :key="tag">{{ tag }}</v-chip>
      </div>
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
.title {
  margin-bottom: 50px;
  padding: 0 10px;
}

.caption span {
  margin-right: 10px;
}

.tags > span {
  margin-right: 5px;
}
</style>
