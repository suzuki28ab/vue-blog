<template>
  <div :class="$style.title">
    <router-link :to="{ name: 'BlogShow', params: { id: post.id } }" tag="div">
      <div :class="$style.caption">
        <span class="caption font-weight-medium">{{ formatedDate }}</span>
        <span class="caption font-weight-medium">{{ post.category }}</span>
      </div>
      <h3 class="headline font-weight-bold">{{ post.title }}</h3>
      <div :class="$style.tags">
        <v-chip small class="font-weight-medium" v-for="tag in post.tags" :key="tag">{{ tag }}</v-chip>
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
  cursor: pointer;
  margin-bottom: 50px;
}

.caption > span {
  margin-right: 10px;
}

.tags {
  margin-top: 5px;
}
.tags > span {
  margin-right: 5px;
}
</style>
