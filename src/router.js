import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Signup from './pages/Signup.vue';
import Login from './pages/Login.vue';
import Diary from './pages/Diary.vue';
import Top from './pages/AAA.vue';
import firebase from './plugins/firebase';

//vue-routerを適用する
Vue.use(Router)
  
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      let user = firebase.auth().currentUser;
      if (user) {
        next();
      } else {
        next({
          name: "Login"
        });
      }
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/diary',
    name: 'Diary',
    component: Diary
  },
  {
    path: '/top',
    name: 'Top',
    component: Top
  },
];

const router = new Router({
  mode: 'history',
  routes
})

export default router