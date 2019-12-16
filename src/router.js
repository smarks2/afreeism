import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Afreeist_Handbook from '@/views/Explore.vue';
import Newsletter from '@/views/Newsletter.vue';
import Blog from '@/views/Blog.vue';
import JoinUs from '@/views/JoinUs.vue';
import Who_Are_We from '@/views/Who_Are_We.vue';
import Contents from '@/views/Topics/Contents';
import Illusion from '@/views/Topics/Illusion';
import Contents2 from '@/views/Topics/Contents2';
import Basics from '@/views/Topics/Basics';
import Policy from '@/views/Topics/Policy';
import Personal from '@/views/Topics/Personal';
import AfreeistHandbook from '@/views/AfreeistHandbook';
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Explore',
      name: 'Explore',
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
    {
      path: '/Who_Are_We',
      name: 'Who_Are_We',
      component: Who_Are_We,
    },
    {
      path: '/Topics/Contents',
      name: 'Contents',
      component: Contents,
    },
    {
      path: '/Topics/Basics',
      name: 'Basics',
      component: Basics,
    },
    {
      path: '/Topics/Policy',
      name: 'Policy',
      component: Policy,
    },
    {
      path: '/Topics/Personal',
      name: 'Personal',
      component: Personal,
    },
    {
      path: '/WebTutorial/Illusion',
      name: 'Illusion',
      component: Illusion,
    },
    {
      path: '/WebTutorial/Contents2',
      name: 'Contents2',
      component: Contents2,
    },
    {
      path: '/AfreeistHandbook',
      name: 'AfreeistHandbook',
      component: AfreeistHandbook,
    },
  ],
});
