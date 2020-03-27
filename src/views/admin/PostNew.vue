<template>
  <v-container>
    <mavon-editor language="ja" v-model="value"></mavon-editor>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import "@/plugins/mavon-editor";

export default Vue.extend({
  data: () => ({
    value: ""
  })
});
</script>
