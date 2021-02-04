<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: DCW
 * @Date: 2020-08-27 15:19:54
 * @LastEditors: DCW
 * @LastEditTime: 2021-02-04 11:13:42
-->
<template>
  <div ref="layout">
    <app-header></app-header>
    <app-main></app-main>
    <app-navbar></app-navbar>
    
  </div>
</template>

<script>
import appHeader from "./Header";
import appMain from "./Main";
import appNavbar from "./Navbar";
export default {
  data() {
    return {};
  },

  components: { appMain ,appHeader,appNavbar},

  mounted() {},
};
</script>

<style scoped>
.header {
  position: absolute;
  line-height: 75px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #2d3a4b;
}
.navbar {
  position: absolute;
  width: 12vw;
  background-color: #545c64;
  top: 75px;
  left: 0;
  bottom: 0;
  overflow-y: auto;
}
.main {
  position: absolute;
  width: 88vw;
  padding: 10px;
  background-color: #ddd;
  top: 75px;
  left: 12vw;
  bottom: 0;
  overflow-y: auto;
  box-sizing: border-box;
}
</style>
