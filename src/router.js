import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Afreeist_Handbook from '@/views/Afreeist_Handbook.vue';
import Newsletter from '@/views/Newsletter.vue';
import Blog from '@/views/Blog.vue';
import JoinUs from '@/views/JoinUs.vue';
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
      path: '/Home',
      name: 'home',
      component: Home,
    },{
      path: '/Afreeist_Handbook',
      name: 'Afreeist_Handbook',
      component: Afreeist_Handbook,
    },
    {
      path: '/Newsletter',
      name: 'Newsletter',
      component: Newsletter,
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/JoinUs',
      name: 'JoinUs',
      component: JoinUs,
    },
  ],
});
