<template>
  <v-app>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer v-if="isAuthenticated" app color="primary" dark class="justify-center">
      footary
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
}
</script>