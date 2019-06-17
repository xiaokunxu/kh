<template>
    <div class="app-view-wrapper">
        <header>
            <the-title :title="msg"></the-title>
        </header>
        <div class="container">
            <label class="tel">
                <span>+86</span>
                <input type="number" placeholder="请输入验证码" autocomplete="off" v-model.trim="code">
            </label>
            <label class="code">
                <span>验证码</span>
                <input type="number" placeholder="请输入验证码" autocomplete="off" v-model.trim="code">
                <a class="sms_code" @click="getCode">{{codeMsg}}</a>
            </label>
            <div class="tip">
                <p class="tip-title">温馨提示：</p>
                <p>手机号码修改成功后需要使用新的手机号码进行登录</p>
            </div>
            <div class="btn">
                <button @click="submit">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
import TheTitle from 'components/TheTitle.vue'

export default {
    components: {
        TheTitle
    },
    data(){
        return{
            msg: '修改手机',
            codeMsg: '获取验证码',
            countdown: 60,
            timer: null,
            code: ''
        }
    },
    methods: {
        submit(){
            this.$router.push('./userinfo')
        },
        getCode(){
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
    }
}
</script>

<style scoped>
    .app-view-wrapper{
        width: 100%;
        height: 100vh;
        background: #F3F3F4;
        overflow: hidden;
    }
    .container{
        margin-top: 70px;
    }
    .container .tel{
        display: flex;
        align-items: center;
        padding: 0 14px;
        background: #fff;
        border-bottom: 1px solid #eee;
        color: #000;
    }
    .container .tel input{
        margin-left: 20px;
    }
    .container .code{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 14px;
        background: #fff;
        text-align: left;
        color: #000;
    }
    .container .code input{
        width: 150px;
    }
    .sms_code{
        padding: 8px 16px;
        background: #FF3947;
        border-radius: 30px;
        font-size: 14px;
        color: #fff;
    }
    .container .tip{
        margin: 16px 14px;
        text-align: left;
        font-size: 12px;
        color: #939393;
    }
    .container .tip .tip-title{
        line-height: 26px;
        color: #FF3947;
    }
    .btn{
        padding: 80px 14px 0 14px;
    }
    .btn button{
        width: 100%;
        padding: 14px 0;
        border: none;
        background: #FF3947;
        border-radius: 60px;
        font-size: 20px;
        color: #fff;
        letter-spacing: 8px;
    }
</style>

