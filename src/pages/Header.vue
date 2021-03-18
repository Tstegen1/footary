<!-- 共通のナビゲーション画面 -->
<template>
  <header>
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon  class="hidden-md-and-up" dark  @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Footary</v-toolbar-title>
      <v-tabs class="hidden-sm-and-down">
        <v-tab to="/">Home</v-tab>
        <v-tab to="/user">User</v-tab>
        <v-tab to="/diary">Diary</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list nav dense>
        <v-list-item-group  active-class="primary--text">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title><router-link to="/">Home</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title><router-link to="/user">User</router-link></v-list-item-title>
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
  </header>  
</template>

<script>

export default {
  data() {
    return {
      drawer: false,
      group: null,
    }
  }, 
}
</script>

<style scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
</style>