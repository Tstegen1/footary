<!-- 共通のナビゲーション画面 -->
<template>
  <div>
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon v-if="userStatus" @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Footary</v-toolbar-title>
      <!-- v-if="userStatus" -->
      <v-btn v-if="userStatus" text @click="logout">
        ログアウト
      </v-btn>
      <!-- v-else -->
      <v-btn text v-else @click="login">
        ログイン
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute >
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title><router-link to="/home">Home</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-book</v-icon>
            </v-list-item-icon>
            <v-list-item-title><router-link to="/diary">Diary</router-link></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </div>  
</template>

<script>
import firebase from '../plugins/firebase';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      drawer: false,
      group: null,
    }
  },
  computed: {
    userStatus() {
    // ログインするとtrue
      return this.$store.getters.isAuthenticated;
    }
  },  
  methods: {
    // setUser読み込み
    ...mapActions(['setUser']),
    logout() {
      firebase.auth().signOut()
      .then(() => {
        this.$store.state.user = null;
        this.$router.push({ name: "Login" });
      })
      .catch((error) => {
        alert(error);
      })
    },
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then((result) => {
        this.setUser(result.user);
        this.$router.push({ name: "Home" });
      }).catch((error) => {
        alert(error);
      })
    }    
  }, 
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setUser(user)
      }
    })
  },  
}
//   mounted() {
//     firebase.auth().onAuthStateChanged((user) => {
//       if(user) {
//         this.setUser(user)
//       }
//     })
//   },
</script>
