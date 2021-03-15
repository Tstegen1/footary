<!-- 共通のナビゲーション画面 -->
<template>
  <v-app>
    <v-app-bar absolute app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Footary</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" absolute>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="primary--text">
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
    <v-footer color="primary" dark app>
      Footary 
    </v-footer>
  </v-app>  
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
