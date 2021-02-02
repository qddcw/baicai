/*
 * @Description: 
 * @Version: 2.0
 * @Autor: DCW
 * @Date: 2020-08-27 15:19:54
 * @LastEditors: DCW
 * @LastEditTime: 2021-02-02 11:41:34
 */
import Vue from "vue";
import Router from "vue-router";
import Login from './views/Login';
import Layout from "@/components/layout.vue"
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "layout",
      component: Layout ,
      redirect:'/home',
      children:[
        {
          path: "/home",
          name: "home",
          component: () =>
            import("@/views/Home"),
          meta:{title:['首页']}
        }
      ]
    },
    
    
  ]
});
