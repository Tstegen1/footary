import Vue from 'vue'
import App from './App.vue'
import Diary from './pages/Diary.vue';
import Home from './pages/Home.vue';
import Authentication from './pages/Authentication';
import Header from './pages/Header.vue';
import User from './pages/User.vue';
import Target from './pages/Target.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false

Vue.component('Diary', Diary);
Vue.component('Home', Home);
Vue.component('Authentication', Authentication);
Vue.component('Header', Header);
Vue.component('User', User);
Vue.component('Target', Target);



new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
