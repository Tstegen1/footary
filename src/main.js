import Vue from 'vue'
import App from './App.vue'
import Diary from './pages/Diary.vue';
import Home from './pages/Home.vue';
import Signup from './pages/Signup.vue';
import Login from './pages/Login.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store/store';
import Top from './pages/Top.vue';

Vue.config.productionTip = false

Vue.component('Diary', Diary);
Vue.component('Home', Home);
Vue.component('Signup', Signup);
Vue.component('Login', Login);
Vue.component('Top', Top);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
