import Vue from 'vue'
import App from './App.vue'
import Diary from './components/Diary.vue';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false

Vue.component('Diary', Diary);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
