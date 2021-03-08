<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Hello Vuetify World!</h1>
        <h1>{{ currentUser.displayName }}</h1>
      </v-col>
    </v-row>   
    <v-btn text v-if="user" @click="logout">
      ログアウト
    </v-btn>
    <v-btn text v-if="user" @click="diary">
      go footary
    </v-btn>
  </v-container>     
</template>

<script>
import firebase from '../plugins/firebase';
 
export default {
  data() {
    return {
      user: null
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  computed: {
    //stateを取得する
    currentUser() {
      return this.$store.state.user;
    },
    //stateの状態を取得
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
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
    diary() {
      this.$router.push({ name: "Diary" });
    }
  },    

}
</script>