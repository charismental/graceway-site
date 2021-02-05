import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Donate from '../views/Donate.vue';
import Blogs from '../views/Blogs.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import VerseDisplay from '../components/VerseDisplay.vue';
import HowToListen from '../views/HowToListen.vue';
import ProgramSchedule from '../views/ProgramSchedule.vue';
import SpeakerCalendar from '../views/Calendar.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        name: 'Verse',
        path: 'verse/:verseId',
        component: VerseDisplay,
        props: true,
        meta: {
          showModal: true,
        },
      },
    ],
  },
  {
    path: '/blog',
    name: 'Blogs',
    component: Blogs,
    children: [
      {
        path: ':blogSlug',
        name: 'Blog',
        component: Blog,
        props: true,
      },
    ],
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
    path: '/speaker-calendar',
    name: 'SpeakerCalendar',
    component: SpeakerCalendar,
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
