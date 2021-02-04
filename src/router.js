/*
 * @Description: 
 * @Version: 2.0
 * @Autor: DCW
 * @Date: 2020-08-27 15:19:54
 * @LastEditors: DCW
 * @LastEditTime: 2021-02-04 11:29:03
 */
import Vue from "vue";
import Router from "vue-router";
import Login from './views/Login';
import Index from './views/Index';
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
      path: "/index",
      name: "Index",
      component: Index
    },
    {
      path: "/",
      name: "layout",
      component: Layout ,
      redirect:'/index',
      children:[
        {
          path: "/home",
          name: "home",
          component: () =>
            import("@/views/Home"),
          meta:{title:['首页']}
        },
        
      ]
    },
    {
      path: "/member",
      component: Layout,
      children:[{
        path: "/",
        name: "member",
        component: () =>
          import("@/views/Member"),
        meta:{title:['会员管理']}
      }]
    },
    {
      path: "/goods",
      component: Layout,
      children:[{
        path: "/",
        name: "goods",
        component: () =>
          import("@/views/Goods"),
        meta:{title:['商品管理']}
      }]
    },
    {
      path: "/staff",
      component: Layout,
      children:[{
        path: "/",
        name: "staff",
        component: () =>
          import("@/views/Staff"),
        meta:{title:['员工管理']}
      }]
    },
    {
      path: "/supplier",
      component: Layout,
      children:[{
        path: "/",
        name: "supplier",
        component: () =>
          import("@/views/Supplier"),
        meta:{title:['供应商管理']}
      }]
    },
    
    
  ]
});
