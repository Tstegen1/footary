<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
        <h1>Hello Vuetify World!</h1>
        <h1>{{ currentUser }}</h1>
      </v-col>
    </v-row>   
    <v-btn text v-if="user" @click="logout">
      ログアウト
    </v-btn>
    <v-btn text v-if="user" @click="note">
      go note
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
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  computed: {
    currentUser() {
      // stateにアクセスする
      return this.$store.state.user
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
    note() {
      this.$router.push({ name: "Diary" });

    }
  }
}
</script>