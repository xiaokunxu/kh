<template>
    <div class="app-view-wrapper">
        <header>
            <the-title :title="msg"></the-title>
        </header>
        <div class="container">
            <label class="pwd">
                <span>旧密码</span>
                <input type="password" placeholder="请输入旧的密码" autocomplete="off" v-model.trim="oldpwd">
            </label>
            <label class="pwd">
                <span>新密码</span>
                <input type="password" placeholder="请输入新密码" autocomplete="off" v-model.trim="newpwd">
            </label>
            <label class="pwd">
                <span>再次输入</span>
                <input type="password" placeholder="请再次输入新密码" autocomplete="off" v-model.trim="newpwdagain">
            </label>
            <div class="btn">
                <button @click="submit">完成</button>
            </div>
        </div>
    </div>
</template>
<script>
import TheTitle from 'components/TheTitle.vue'
import User from '../../api/user'
import { Toast } from 'vant'

export default {
    components: {
        TheTitle,
        [Toast.name]: Toast,
    },
    data(){
        return{
            msg: '修改密码',
            oldpwd: '',
            newpwd: '',
            newpwdagain: ''
        }
    },
    methods: {
        submit(){
            User.UpdatePasswd({
                "SOURCE": "TEST",
                "CREDENTIALS": "0",
                "ADDRESS": "192.168.1.195",
                "TERMINAL": "0",
                "INDEX": "20170714",
                "METHOD": "UpdatePasswd",
                "UserAccount": "test001",
                "OldPasswd": this.oldpwd,
                "NewPasswd": this.newpwdagain
            }).then(res => {
                console.log(res)
                if(res.DATA[0] === 1){
                    Toast.success('修改成功')
                    setTimeout(() => {
                        this.$router.push('../../user')
                    }, 2000)
                }else{
                    Toast.fail('修改失败')
                }
            })
        }
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
    .container .pwd{
        display: flex;
        align-items: center;
        padding: 0 14px;
        background: #fff;
        border-top: 1px solid #eee;
        text-align: left;
        color: #000;
    }
    .container .pwd:first-child{
        border-top: none;
    }
    .container .pwd input{
        margin-left: 20px;
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

