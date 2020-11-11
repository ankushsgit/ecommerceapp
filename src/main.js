import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import { routes } from './routes';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from "./components/Navbar.vue";

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.component('Navbar',Navbar);
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
