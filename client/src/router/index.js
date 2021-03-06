import Vue from 'vue';
import VueRouter from 'vue-router';
import Activities from '../views/Activities.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/:itemId?',
    name: 'activities',
    component: Activities,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
