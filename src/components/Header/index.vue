<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: DCW
 * @Date: 2021-02-02 16:59:04
 * @LastEditors: DCW
 * @LastEditTime: 2021-02-22 09:34:48
-->
<template>
    <div class="header">
        <a href="/home">
            <img src="@/assets/logo.png" class='logo'>
            <span class='title'>XXX用户管理系统</span>
        </a>

        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-edit" command="changePassword">修改密码</el-dropdown-item>
                <el-dropdown-item icon="el-icon-s-fold" command="logout">退出系统</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
import {logout} from '@/api/login'
    export default {
        data() {
            return {
                username:JSON.parse(sessionStorage.getItem("userinfo")).name
            }
        },

        components: {},

        methods: {
            handleCommand(command) {
                switch(command){
                    case 'changePassword' : break;
                    case 'logout' :
                        logout(sessionStorage.getItem("token")).then(res => {
                            const data = res.data;
                            console.log(res)
                            if(data.flag){
                                sessionStorage.removeItem("token");
                                sessionStorage.removeItem("userinfo");
                                this.$message({
                                    message:data.message,
                                    type:'success'
                                })
                                this.$router.push('/index')
                            }else {
                                this.$message({
                                    message:data.message,
                                    type:'warning'
                                })
                            }
                        })
                        break;
                    default : break;
                }
            }
        }
    }
</script>

<style scoped>
    .logo {
        width: 30px;
        vertical-align: middle;
        padding: 0 10px 0 40px;
    }

    .title {
        color: white;
        font-size: 23px;
    }

    a {
        text-decoration: none;
    }

    .el-dropdown {
        float: right;
        margin-right: 40px;
    }

    .el-dropdown-link {
        color: white;
        cursor: pointer;
        font-size: 20px;
    }
</style>