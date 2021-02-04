<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: DCW
 * @Date: 2020-08-27 15:19:54
 * @LastEditors: DCW
 * @LastEditTime: 2021-02-04 11:09:28
-->
<template>
    <div class="main">
        <bread-crumb></bread-crumb>
        <router-view></router-view>
    </div>
</template>

<script>
import breadCrumb from "./breadcrumb"
export default {
  data () {
    return {
    }
  },

  components: {breadCrumb},

  methods: {}
}
</script>

<style scoped>

</style>