<!-- ログイン画面 -->
<template>
  <v-main>
    <h1>認証画面です</h1>
      <!-- v-if="userStatus" -->
      <!-- <v-btn text @click="logout">
        ログアウト
      </v-btn> -->
      <!-- v-else -->
      <!-- <v-btn text @click="login">
        ログイン
      </v-btn> -->    
  </v-main>
</template>

<script>
// import firebase from '../plugins/firebase';
// import { mapActions } from 'vuex';

export default {
  // computed: {
  //   userStatus() {
  //   // ログインするとtrue
  //     return this.$store.getters.isAuthenticated;
  //   }
  // },  
  // methods: {
  //   // setUser読み込み
  //   ...mapActions(['setUser']),
  //   logout() {
  //     firebase.auth().signOut()
  //     .then(() => {
  //       this.$store.state.user = null;
  //       this.$router.push({ name: "Login" });
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     })
  //   },
  //   login() {
  //     const provider = new firebase.auth.GoogleAuthProvider();
  //     firebase.auth().signInWithPopup(provider)
  //     .then((result) => {
  //       this.setUser(result.user);
  //       this.$router.push({ name: "Home" });
  //     }).catch((error) => {
  //       alert(error);
  //     })
  //   }    
  // }, 
  // mounted() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if(user) {
  //       this.setUser(user)
  //     }
  //   })
  // },  
};
</script>