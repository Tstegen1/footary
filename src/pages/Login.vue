<!-- ログイン -->
<template>
  <v-container>
    <Navbar />
    <v-card-actions>
      <v-btn class="primary" @click="login">ログイン</v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import firebase from "../plugins/firebase";
import { mapActions } from 'vuex';
import Navbar from './Navbar'


export default {
  name: "Login",
  components: {
    Navbar
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