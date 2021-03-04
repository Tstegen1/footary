import Vue from 'vue'
import App from './App.vue'
import Diary from './pages/Diary.vue';
import Home from './pages/Home.vue';
import Signup from './pages/Signup.vue';
import Login from './pages/Login.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import firebase from './plugins/firebase';
// import store from './store/store';

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
      // store,
      render: h => h(App)
    }).$mount("#app");
  }
});
