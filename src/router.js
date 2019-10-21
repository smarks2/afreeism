import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Faq from '@/views/Faq.vue';
import 00A-Contents from '@/views/Handbook/00A-Contents.vue';
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
      path: '/Handbook/00A-Contents',
      name: '00A-Contents',
      component: 00A-Contents,
    },
  ],
});

