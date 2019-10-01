import Vue from "vue";
import Router from "vue-router";
import Register from "./components/HelloWorld";
import Login from "./components/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
