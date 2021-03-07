<template>
<v-container>
  aaaaaaaaaaaaaaaa
</v-container>
</template>

<script>
import firebase from "../plugins/firebase";
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['setUser']),
  },   
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setUser(user);
      }
    })
  },
}
</script>