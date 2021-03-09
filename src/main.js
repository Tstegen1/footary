import Vue from 'vue'
import App from './App.vue'
import Diary from './pages/Diary.vue';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Navbar from './pages/Navbar.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false

Vue.component('Diary', Diary);
Vue.component('Home', Home);
Vue.component('Login', Login);
Vue.component('Navbar', Navbar);



new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
