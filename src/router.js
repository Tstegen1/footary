import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Diary from './pages/Diary.vue';
import Navbar from './pages/Navbar.vue';
// import store from './store/store';


//vue-routerを適用する
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Navbar',
    component: Navbar,
    children: [
      { path: 'home', name: 'Home', component: Home},
      { path: 'login', name: 'Login', component: Login},
      { path: 'diary', component: Diary}
    ],  
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home,
  //   // beforeEnter: (to, from, next) => {
  //   //   if (store.getters.isAuthenticated) {
  //   //     next();
  //   //   } else {
  //   //     next('/login');
  //   //   }
  //   // }
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login
  // },
  // {
  //   path: '/diary',
  //   name: 'Diary',
  //   component: Diary
  // },
];

const router = new Router({
  mode: 'history',
  routes
})
export default router