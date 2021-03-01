import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Signup from './components/Signup.vue';
import Signin from './components/Signin.vue';
import Diary from './components/Diary.vue';

//vue-routerを適用する
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/diary',
      name: 'Diary',
      component: Diary
    },
  ]
})