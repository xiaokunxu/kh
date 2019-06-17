<template>
    <div class="layout">
        <header class="app-view-header">
            <div class="back">
                <img @click="goBack" src="../assets/images/search/ic-back-b@3x.png" alt="">
            </div>
        </header>
        <div class="header_tit">
            <em class="khlogo"><img src="../assets/images/login/logo@3x.png" alt=""></em>
        </div>
        <div>
            <label class="login_user">
                <div class="country_list">
                    <div class="countrycode_selector">
                        <span class="country_code">
                            <tt class="countrycode-value">+86</tt>
                            <i class="icon_arrow_down"></i>
                        </span>
                    </div>
                    <img src="../assets/images/commodity/idetails-ic-Jump-g@3x.png" alt="">
                </div>
                <input type="text" class="item_account" autocomplete="off" placeholder="输入手机号" v-model.trim="username">
            </label>
            <label class="pwd_panel">
                <input type="number" class="item_account" placeholder="短信验证码" autocomplete="off" v-model.trim="code">
                <a href="javascript:;" class="sms_code" @click="getCode">{{codeMsg}}</a>
            </label>
            <label class="pwd_panel">
                <input type="password" class="item_account" placeholder="请输入新的密码" autocomplete="off" v-model.trim="pwd">
                <!-- <i class="eye pwd_eye">eye</i> -->
            </label>
            <!-- 错误信息 -->
            <div v-show="errMsg" class="err_tip">
                <!-- <em class="icon_error">err</em> -->
                <span class="error-con">* {{errMsg}}</span>
            </div>
            <div class="btns_bg">
                <button class="btnadpt" @click="submit">确认</button>
                <!-- <input type="button" class="btnadpt" value="登录"> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            codeMsg: '获取验证码',
            countdown: 60,
            timer: null,
            username: '',
            pwd: '',
            code: '',
            errMsg: '',
        }
    },
    methods: {
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
            if(!this.username){
                this.errMsg = '请输入手机号'
                return
            }
            this.$router.push('./login')
        },
        checkMobile(){
            if(this.username == ''){
                this.errMsg == '手机号不能为空'
                return
            }
            const reg = /^((1[3-8][0-9])+\d{8})$/
            return reg.test(this.username)
        },
        goBack(){
            this.$router.back(-1)
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
            width: 20px;
            margin-top 18px
        }
        .close{
            text-align right 
        }
        .back{
            text-align left 
        }
    } 
    .header_tit{
        padding: 30px 0 30px;
        text-align: center;
    }
    .khlogo{
        // width: 30px;
        // height: 30px;
        margin: 0 auto 15px;
        // display: block;
        // background-image: url(../assets/images/logo.png);
        img{
            width: 120px;
            // height: 100px;
        }
    }
    .login_user, .pwd_panel{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #d3d3d3;
    }
    .pwd_panel{
        justify-content: space-between;
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
        color: #9b9b9b;
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
        padding: 4px 0 4px 14px;
    }
    .btns_bg{
        padding-top: 24px;
    }
    .btnadpt{
        width: 100%;
        display: block;
        padding: 12px 0;
        margin-bottom: 24px;
        border: none;
        border-radius: 30px;
        background-color: #ff3948;
        text-align: center;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
    }
    .outer-link{
        padding: 0 9px;
        margin-top: 10px;
        color: #646464;
    }
    .sms_code{
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

