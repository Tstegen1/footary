<!--  ナビゲーション専用コンポーネント -->
<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>
      footary
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text v-if="!user" :to="{ name: 'Signup' }">
        新規登録
      </v-btn>
      <v-btn text v-if="!user" :to="{ name: 'Login' }">
        ログイン
      </v-btn>
      <v-btn text v-if="user">
        {{ user.displayName }}
      </v-btn>
      <v-btn text v-if="user" @click="logout">
        ログアウト
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import firebase from "../plugins/firebase";
export default {
  name: "DiaryNavbar",
  data() {
    return {
      user: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        console.log(user.displayName)
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    }
  }
};
</script>