// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Route from './routes.js';
import 'vuetify/dist/vuetify.min.css';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
  routes: Route,
  mode: 'history'
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router: router
});
