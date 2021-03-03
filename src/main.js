import Vue from 'vue'
import App from './App.vue'
import Diary from './components/Diary.vue';
import Home from './components/Home.vue';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import firebase from './plugins/firebase';

Vue.config.productionTip = false

Vue.component('Diary', Diary);
Vue.component('Home', Home);
Vue.component('Signup', Signup);
Vue.component('Login', Login);

let app = null
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
