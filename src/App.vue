<template>
<!-- <router-view></router-view> -->
  <v-app>
    <DiaryNavbar />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <v-footer app color="primary" dark class="justify-center">
      Vue Firebase Auth
    </v-footer>
  </v-app>
</template>

<script>
import DiaryNavbar from './components/DiaryNavbar';

export default {
  name: "App",

  components: {
    DiaryNavbar
  }
};
</script>