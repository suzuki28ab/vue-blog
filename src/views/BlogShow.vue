<template>
  <div>
    <Appbar></Appbar>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex lg2>
            {{ message }}
            <p>
              <button @click="increment">UP</button>
            </p>
            <h1>Count:{{ count }}</h1>
          </v-flex>
          <v-flex lg10 sm12>
            <p>show id = {{ this.$route.params["id"] }}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Appbar from "@/components/Appbar";

export default Vue.extend({
  name: "BlogShow",
  methods: {
    increment: function() {
      this.$store.commit("test/increment");
    }
  },
  computed: {
    message: function() {
      return this.$store.state.test.message;
    },
    count: function() {
      return this.$store.state.test.count;
    }
  },
  components: {
    Appbar
  }
});
</script>
