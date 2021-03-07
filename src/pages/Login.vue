<template>
  <v-card-actions>
    <v-btn class="primary" v-on:click="login">ログイン</v-btn>
  </v-card-actions>
</template>

<script>
import firebase from "../plugins/firebase";
import { mapActions } from 'vuex';


export default {
  name: "Login",
  data() {
    return {
    };
  },
  methods: {
    // setUser読み込み
    ...mapActions(['setUser']),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        this.setUser(result.user);
        this.$router.push({ name: "Home" });
      }).catch((error) => {
        alert(error);
      })
    }
  }
};
</script>