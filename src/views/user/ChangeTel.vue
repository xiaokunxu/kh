<template>
    <div class="app-view-wrapper">
        <header>
            <the-title :title="msg"></the-title>
        </header>
        <div class="container">
            <div class="txt">
                <p>本次操作需要短信验证</p>
                <p>请输入 {{tel}} 收到的短信验证码</p>
            </div>
            <div class="code">
                <span>验证码</span>
                <input type="number" placeholder="请输入验证码" autocomplete="off" v-model.trim="code">
                <a class="sms_code" @click="getCode">{{codeMsg}}</a>
            </div>
            <div class="tip">
                <p class="tip-title">温馨提示：</p>
                <p>手机号码修改成功后需要使用新的手机号码进行登录</p>
            </div>
            <div class="btn">
                <button @click="toNewTel">下一步</button>
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
            tel: '',
            codeMsg: '获取验证码',
            countdown: 60,
            timer: null,
            code: ''
        }
    },
    created(){
        this.tel = 13522877978
    },
    methods: {
        toBack(){
            this.$router.back(-1)
        },
        toNewTel(){
            this.$router.push('../userInfo/newtel')
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
        padding-top: 50px;
    }
    .container .txt{
        margin: 40px 0;
        font-size: 15px;
        color: #000;
    }
    .container .txt p{
        line-height: 28px;
    }
    .container .code{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 14px;
        background: #fff;
        border-bottom: 1px solid #ddd;
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
        letter-spacing: 4px;
    }
</style>
