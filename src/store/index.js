import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
     cartDetails: {
         count: localStorage.getItem('cartCount')
     }
 },
 getters: {
     cartCount: state => {
         return state.cartDetails.count
     }
 },
 mutations: {
     cartCount (state, payload) {
         state.cartDetails.count = payload;
     }
 },
 actions: {}
});