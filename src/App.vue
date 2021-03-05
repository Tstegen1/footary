<template>
  <v-app>
    <!-- <DiaryNavbar></DiaryNavbar> -->
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app color="primary" dark class="justify-center">
      footary
    </v-footer>
  </v-app>
</template>

<script>
// import DiaryNavbar from './pages/DiaryNavbar';

// export default {
//   name: "App",
//   components: {
//     DiaryNavbar
//   }
// };
</script>