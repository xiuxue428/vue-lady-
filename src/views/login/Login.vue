<template>
    <div class="login-wrapper">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="login-content">
            <h3>XX客户关系管理系统</h3>
            <el-form-item  prop="username" >
                <el-input type="text" v-model="ruleForm2.username" auto-complete="off" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
                <el-input type="password" v-model="ruleForm2.pwd" auto-complete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="login-btn" type="primary" @click="loginFn()">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                ruleForm2:{},
                rules2: {
                    username: [
                        {required:true ,message:'请输入账号' , trigger: 'blur' }
                    ],
                    pwd: [
                        {required:true ,message:'请输入密码' , trigger: 'blur' }
                    ],
                }
            }
        },
        methods:{
            loginFn(){},
        }
    }
</script>

<style lang="less" scoped>

        .login-wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            background: #ccc;
            height: 100%;
            .login-content{
                width: 320px;
                height: 240px;
                h3{
                    text-align: center;
                    height: 45px;
                    line-height: 45px;
                    color: #662506;
                }
                .login-btn{
                    width: 100%;
                }
            }

        }


</style>