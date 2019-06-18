import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './route';
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'hash',
  routes: [{
    path: '/',
    component: App,
    children: routes
  }]
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})