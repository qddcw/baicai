<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: DCW
 * @Date: 2021-02-02 16:59:04
 * @LastEditors: DCW
 * @LastEditTime: 2021-02-08 17:18:56
-->
<template>
  <div class="navbar">
    <el-menu
      :default-active="path"
      class="el-menu-vertical-demo"
      :router="true"
      background-color="#6e8b99"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
    >
      <template v-for="item in menuList">
        <el-submenu
          v-if="item.hasChildren && item.children.length > 0"
          :index="item.path"
        >
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(subitem, subIndex) in item.children"
              :key="subIndex"
              :index="subitem.path"
            >
              <i :class="subitem.icon"></i>
              <span>{{ subitem.title }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="item.path" v-if="!item.hasChildren">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { getMenu } from "@/api/login";
export default {
  data() {
    return {
      path: "/home",
      menuList: [],
    };
  },

  components: {},

  methods: {},
  created() {
    this.path = this.$route.path;
    getMenu(JSON.parse(localStorage.getItem("token"))).then((res) => {
      this.menuList = res.data.data.menu;
    });
  },
};
</script>

<style scoped lang="scss">
div::-webkit-scrollbar {
  width: 0;
}
::v-deep .el-menu {
  border: 0px;
  .el-menu-item-group__title {
    padding: 0;
  }
  .el-submenu__title i {
    color: #fff;
  }
  .el-menu-item,
  .el-submenu__title {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
  }
  i {
    color: #fff;
  }
  .el-submenu {
    .el-menu-item {
      height: 45px;
      line-height: 45px;
      font-size: 16px;
    }
  }
}
</style>
