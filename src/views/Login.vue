<template>
  <v-content>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="6">
          <v-text-field label="email" v-model="email"></v-text-field>
          <v-text-field
            label="password"
            type="password"
            v-model="password"
          ></v-text-field>
          <v-btn @click="login">login</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from "vue";
import { auth } from "@/plugins/firebase";

export default Vue.extend({
  name: "Login",
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    login: function() {
      auth.signInWithEmailAndPassword(this.email, this.password).then(
        user => {
          this.$router.push("/admin");
        },
        err => {
          alert(err.message);
        }
      );
    }
  }
});
</script>
