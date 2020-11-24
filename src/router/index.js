import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Donate from '../views/Donate.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import HowToListen from '../views/HowToListen.vue';
import ProgramSchedule from '../views/ProgramSchedule.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate,
  },
  {
    path: '/how-to-listen',
    name: 'HowToListen',
    component: HowToListen,
  },
  {
    path: '/program-schedule',
    name: 'ProgramSchedule',
    component: ProgramSchedule,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
