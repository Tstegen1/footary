<template>
  <div>
    <v-toolbar-title>
    {{ currentUser.displayName }}
    </v-toolbar-title>
    <v-btn @click="logout">
      ログアウト
    </v-btn>
  </div>
</template>

<script>
import firebase from '../plugins/firebase'

export default {
  computed: {
    currentUser() {
      // stateにアクセスする
      return this.$store.state.user;
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
  }
}
</script>

