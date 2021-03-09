<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>
      footary
    </v-toolbar-title>
    <v-toolbar-title>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
import firebase from "../plugins/firebase";
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['setUser'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setUser(user)
      }
    })
  },
}
</script>