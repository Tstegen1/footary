<template>
  <v-card-actions>
    <v-btn class="primary" v-on:click="login">ログイン</v-btn>
  </v-card-actions>
</template>

<script>
import firebase from "../plugins/firebase";

export default {
  name: "Login",
  data() {
    return {
    };
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        this.$router.push({ name: "Home" });
      }).catch((error) => {
        alert(error);
      })
    }
  }
};
</script>