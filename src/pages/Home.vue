<template>
  <v-container>
    <Navbar />
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Hello Vuetify World!</h1>
      </v-col>
    </v-row>   
    <v-btn @click="logout">
      ログアウト
    </v-btn>
    <router-link to="/Diary">Diary</router-link>
  </v-container>     
</template>

<script>
import firebase from '../plugins/firebase';
import Navbar from '../pages/Navbar'


export default {
  components: {
    Navbar
  },
  // data() {
  //   return {
  //     user: null
  //   }
  // },
  // created() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.user = user;
  //     } else {
  //       this.user = null;
  //     } 
  //   });
  // },
  // computed: {
  //   //stateを取得する
  //   currentUser() {
  //     return this.$store.state.user;
  //   },
  //   //stateの状態を取得
  //   isAuthenticated() {
  //     return this.$store.getters.isAuthenticated;
  //   }
  // },
  methods: {
    logout() {
      firebase.auth().signOut()
      .then(() => {
        console.log('out')
        this.$router.push({ name: "Login" });
      })
      .catch((error) => {
        alert(error);
      })
    },
  },   
}
</script>