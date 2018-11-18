import Vue from 'vue';
import Router from 'vue-router';
import Top from './components/Top.vue';
import Page from './components/Page.vue';
import CallApiOnCreated from './components/CallApiOnCreated.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: Top },
  { path: '/page', component: Page },
  { path: '/callApiOnCreated', component: CallApiOnCreated }
];

const createRouter = () => {
  return new Router({
    mode: 'history',
    routes
  });
};

export { createRouter };
