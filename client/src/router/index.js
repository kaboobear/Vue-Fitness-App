import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Excercise from '../views/Excercise.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/excercise',
    component: Excercise,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
