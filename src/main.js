import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store';
import routes from './Router/routes';

Vue.config.productionTip = false;

// Use declarations
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
