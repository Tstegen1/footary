import Vue from 'vue'
import App from './App.vue'
import Diary from './components/Diary.vue';
import Home from './components/Home.vue';
import Signup from './components/Signup.vue';
import Signin from './components/Signin.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import firebase from './plugins/firebase.js'


Vue.config.productionTip = false

Vue.component('Diary', Diary);
Vue.component('Home', Home);
Vue.component('Signup', Signup);
Vue.component('Signin', Signin);

new Vue({
  vuetify,
  router,
  firebase,
  render: h => h(App)
}).$mount('#app')