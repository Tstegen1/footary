import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Diary from './pages/Diary.vue';


//vue-routerを適用する
Vue.use(Router)
  
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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