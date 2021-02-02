<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: DCW
 * @Date: 2020-08-27 15:19:54
 * @LastEditors: DCW
 * @LastEditTime: 2021-02-02 11:44:02
-->
<template>
  <div ref="layout">
    <!-- <app-header></app-header>
    <app-navbar></app-navbar> -->
    <app-main></app-main>
  </div>
</template>

<script>
// import appHeader from "./Header";
import appMain from "./Main";
// import appNavbar from "./Navbar";
export default {
  data() {
    return {};
  },

  components: { appMain },

  mounted() {},
};
</script>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
}
</style>
