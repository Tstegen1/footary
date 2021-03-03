import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
import Diary from './components/Diary.vue';
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
];

const router = new Router({
  mode: 'history',
  routes
})

export default router