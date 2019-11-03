import Vue from "vue";
import App from "./App.vue";
import Menu from "./components/Menu";
import SampleMenu from "./components/SampleMenu";
import router from "./router";
import store from "./store";
import axios from 'axios';
import {securedAxiosInstance, plainAxiosInstance,API_URL} from "./backend/axios/api";
import VueAxios from "vue-axios";
import vuetify from "./plugins/vuetify";


Vue.use(VueAxios, axios,{
  secured: securedAxiosInstance,
  plain: plainAxiosInstance,
},API_URL);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  securedAxiosInstance,
  plainAxiosInstance,
  render: h => h(App,SampleMenu)
}).$mount("#app");
