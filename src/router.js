/*
 * @Description:
 * @Version: 2.0
 * @Autor: DCW
 * @Date: 2020-08-27 15:19:54
 * @LastEditors: DCW
 * @LastEditTime: 2021-02-20 15:37:32
 */
import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login";
import Index from "./views/Index";
import Layout from "@/components/layout.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/index",
      name: "Index",
      component: Index,
    },
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect: "/index",
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/Home"),
          meta: { title: ["控制台"] },
        },
      ],
    },
    {
      path: "/release",
      component: Layout,
      children: [
        {
          path: "/release/addSale",
          name: "member",
          component: () => import("@/views/Member"),
          meta: { title: ["会员管理"] },
        },
      ],
    },
  ],
});
