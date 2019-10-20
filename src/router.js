import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Handbook from '@/views/Handbook.vue';
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq,
    },
    {
      path: '/handbook',
      name: 'Handbook',
      component: Handbook,
    },
  ],
});
