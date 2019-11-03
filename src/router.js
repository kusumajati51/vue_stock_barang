import Vue from "vue";
import Router from "vue-router";
import Register from "./components/Register";
import Login from "./components/Login";
import Category from "./components/Category"
import Product from "./components/Product";
import Menu from "./components/Menu";
import SampleMenu from "./components/SampleMenu";
import Order from './components/Order';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path:"/category",
      name: "category",
      component: Category
    },
    {
      path:"/product",
      name: "product",
      component: Product
    },
    {
      path:"/menu",
      name: "menu",
      component: Menu
    },{
      path:"/sample",
      name:"sample",
      component: SampleMenu,
      children:[
        {
          path:"/child1",
          name: "child1",
          component: Product
        },
        {
          path:"/child2",
          name: "child2",
          component: Category
        },
        {
          path:"/child3",
          name: "child3",
          component: Order
        }
      ]
    }
  ],
  mode: 'history'
});
