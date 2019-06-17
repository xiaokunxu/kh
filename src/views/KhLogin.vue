<template>
    <div class="layout">
        <header class="app-view-header">
            <div v-show="!isSmsLogin" class="back">
                <img @click="goBack" src="../assets/images/search/ic-back-b@3x.png" alt="">
            </div>
            <div v-show="isSmsLogin" class="close">
                <img @click="onClose" src="../assets/images/login/login_closed@3x.png" alt="">
            </div>
        </header>
        <div class="header_tit">
            <em class="khlogo"><img src="../assets/images/login/logo@3x.png" alt=""></em>
        </div>
        <div>
            <!-- 输入框 -->
            <!-- <label v-show="isSmsLogin" class="login_user">
                <input type="text" class="item_account" autocomplete="off" placeholder="账号或手机号">
            </label> -->
            <label class="login_user">
                <div v-show="!isSmsLogin" class="country_list">
                    <div class="countrycode_selector">
                        <span class="country_code">
                            <tt class="countrycode-value">+86</tt>
                            <i class="icon_arrow_down"></i>
                        </span>
                    </div>
                    <img src="../assets/images/commodity/idetails-ic-Jump-g@3x.png" alt="">
                </div>
                <img class="usericon" v-show="isSmsLogin" src="../assets/images/login/login_ic_account@3x.png" alt="">
                <input type="text" class="item_account" autocomplete="off" :placeholder="placeholderTxt" v-model.trim="username">
            </label>
            <label v-show="isSmsLogin" class="pwd_panel">
                <img class="usericon" src="../assets/images/login/login_ic_password@3x.png" alt="">
                <input type="password" class="item_account" placeholder="密码" autocomplete="off" v-model.trim="pwd">
                <!-- <i class="eye pwd_eye">eye</i> -->
            </label>
            <label v-show="!isSmsLogin" class="pwd_panel">
                <input type="number" class="item_account" placeholder="短信验证码" autocomplete="off" v-model.trim="code">
                <a href="javascript:;" class="sms_code" @click="getCode">{{codeMsg}}</a>
            </label>
            <div class="panel">
                <div class="registered" v-show="isSmsLogin">快速注册</div>
                <div class="code-login" @click="changeBtn">{{changeLogin}}</div>
            </div>
            <!-- 错误信息 -->
            <div v-show="errMsg" class="err_tip">
                <!-- <em class="icon_error">err</em> -->
                <span class="error-con">* {{errMsg}}</span>
            </div>
            <div class="btns_bg">
                <button class="btnadpt" @click="submit">登录</button>
                <!-- <input type="button" class="btnadpt" value="登录"> -->
            </div>
            <div class="other_panel" v-show="isSmsLogin">
                <a class="outer-link" @click="onForgetPwd">忘记密码？</a>
            </div>
        </div>
    </div>
</template>

<script>
import User from '../api/user'

export default {
    data(){
        return{
            isSmsLogin: true,
            codeMsg: '获取验证码',
            countdown: 60,
            timer: null,
            username: '',
            pwd: '',
            code: '',
            errMsg: '',
        }
    },
    computed: {
        placeholderTxt(){
            return this.isSmsLogin ? '账号或手机号' : '手机号'
        },
        changeLogin(){
            return this.isSmsLogin ? '手机验证码登录' : '用户名密码登录'
        },
    },
    watch:{
        $route(to,from){
            console.log(to.path);
        }
    },
    methods: {
        changeBtn(){
            this.isSmsLogin = !this.isSmsLogin
        },
        getCode(){
            if(!this.username){
                this.errMsg = '请输入手机号'
                return
            }
            if(!this.checkMobile()){
                this.errMsg = '手机号码格式不正确'
                return
            }
            if(this.countdown !== 60) return
            this.timer = setInterval(() => {
                this.codeMsg = `重新发送${this.countdown}`
                this.countdown --
                if(this.countdown === 0){
                    clearInterval(this.timer)
                    this.timer = null
                    this.countdown = 60
                    this.codeMsg = '获取验证码'
                }
            }, 1000)
        },
        submit(){
            // 校验
            if(this.isSmsLogin){
                if(!this.username){
                    this.errMsg = '请输入账号'
                    return
                }
                if(!this.pwd){
                    this.errMsg = '请输入密码'
                    return
                }
            }else{
                if(!this.username){
                    this.errMsg = '请输入手机号'
                    return
                }
                if(!this.checkMobile()){
                    this.errMsg = '手机号码格式不正确'
                    return
                }
                if(!this.code){
                    this.errMsg = '请输入短信验证码'
                    return
                }
            }
            // let data = {
            //     username: this.username
            // }
            // this.$fetch('UserInfo', {
            User.UserLogoin({
                "SOURCE": "TEST",
                "CREDENTIALS": "0",
                "ADDRESS": "192.168.1.195",
                "TERMINAL": "0",
                "INDEX": "20170714",
                "METHOD": "UserLogoin",
                "UserAccount": this.username,
                "UserPasswd": this.pwd,
                "LoginIP": "192.168.1.195"
            }).then(res => {
                console.log(res)
                if(res.DATA){
                    let statu = res.DATA[0]
                    if(statu === 0){
                        this.errMsg = '账号或密码错误'
                    }else if(statu === 1){
                        this.$store.commit('changeLoginStatu', res)
                        let path = this.$route.query.redirect || '/user'
                        this.$router.push(path)
                    }else if(statu === 2){
                        this.errMsg = '账号异常'
                    }
                }
            })
        },
        checkMobile(){
            if(this.username == ''){
                this.errMsg == '手机号不能为空'
                return
            }
            const reg = /^((1[3-8][0-9])+\d{8})$/
            return reg.test(this.username)
        },
        onForgetPwd(){
            this.$router.push('/forgetPwd')
        },
        goBack(){
            this.isSmsLogin = !this.isSmsLogin
        },
        onClose(){
            this.$router.push('./user')
        }
    }
}
</script>

<style scoped lang="stylus">
    .layout{
        padding: 0 28px;
        position: relative;
        box-sizing: border-box;
    }
    .app-view-header{
        img{
            width 20px
            margin-top 18px
        }
        .close{
            text-align right 
        }
        .back{
            text-align left 
        }
    } 
    .usericon{
        width 20px
        margin-right 10px 
    }
    .header_tit{
        padding: 30px 0 30px;
        text-align: center;
    }
    .khlogo{
        // width: 48px;
        // height: 48px;
        margin: 0 auto 15px;
        // display: block;
        // background-image: url(../assets/images/milogo.png);
        img{
            width 120px
            // height 100px
        }
    }
    .login_user, .pwd_panel{
        display flex
        align-items center
        position relative
        border-bottom 1px solid #d3d3d3
    }
    .pwd_panel{
        // justify-content: space-between;
    }
    .country_list{
        display flex
        align-items center
        padding: 1px 10px 1px 0;
        margin-right: 8px;
        color: #4a4a4a;
        // display: block;
        overflow: hidden;
        img{
            width 8px
            margin-left 6px
        }
    }
    .countrycode_selector{
        position: relative;
        animation: fade-in ease-in-out .5s;
    }
    @keyframes fade-in{
        0%{
            left: -100%;
        }
        100%{
            left: 0;
        }
    }
    .country_code{
        display: flex;
        align-items: center;
    }
    .countrycode-value{
        margin-right: 2px;
        color: #939393;
        font-size: 16px;
    }
    .panel{
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
        margin-bottom: 10px; 
        font-size: 14px;
    }
    .panel .registered{
        padding: 4px 14px 4px 0;
    }
    .panel .code-login{
        padding: 4px 0 4px 0;
    }
    .btns_bg{
        padding-top: 24px;
    }
    .btnadpt{
        width: 100%;
        display: block;
        padding: 12px 0;
        // margin-bottom: 24px;
        border: none;
        border-top-left-radius: 25px;
        border-bottom-right-radius: 25px;
        box-shadow: 0 5px 20px 4px rgba(255, 57, 72, .25);
        background-color: #ff3948;
        text-align: center;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
    }
    .outer-link{
        display inline-block
        padding: 0 9px;
        margin-top: 24px;
        color: #646464;
    }
    .sms_code{
        position absolute
        right 0
        padding: 6px 12px;
        background: #ff3948;
        border-radius: 15px;
        font-size: 14px;
        color: #fff;
    }
    .err_tip{
        margin-bottom: 5px;
        padding-top: 14px;
        color: #F66;
        text-align: left;
        font-size: 14px;
    }
</style>
