<template>
    <div class="app-view-wrapper">
        <div class="content app-view">
            <header class="hd">
                <div class="user">
                    <div class="not-login" v-if="false">
                        <h2 class="username">张三</h2>
                        <p>你好你好</p>
                    </div>
                    <div class="user-left">
                        <button class="login-btn">登录</button>
                        <button class="register-btn">注册</button>
                    </div>
                    <div class="user-right" @click="toUserInfo">
                        <img class="avatar" src="../assets/images/link.png" alt="">
                        <img src="../assets/images/link.png" alt="">
                    </div>
                </div>
            </header>
            <div class="container">
                <div class="radius"></div>
                <div class="order">
                    <div class="order-title">
                        <span>我的订单</span>
                        <span class="all-order">查看全部订单<img src="../assets/images/link.png" alt=""></span>
                    </div>
                    <ul class="items">
                        <li class="order-statu">
                            <img src="../assets/images/ic_Receipt_b.png" alt="">
                            <p>待发货</p>
                        </li>
                        <li class="order-statu">
                            <img src="../assets/images/ic_Receipt_b.png" alt="">
                            <p>待收货</p>
                        </li>
                        <li class="order-statu">
                            <img src="../assets/images/ic_Receipt_b.png" alt="">
                            <p>已取消</p>
                        </li>
                        <li class="order-statu">
                            <img src="../assets/images/ic_Receipt_b.png" alt="">
                            <p>售后服务</p>
                        </li>
                    </ul>
                </div>
                <div class="user-item">
                    <div class="address">
                        <img src="" alt="">
                        <span>地址管理</span>
                    </div>
                    <div class="right-icon">
                        <img src="../assets/images/link.png" alt="">
                    </div>
                </div>
                <div class="user-item">
                    <div class="about">
                        <img src="" alt="">
                        <span>关于我</span>
                    </div>
                    <div class="right-icon">
                        <img src="../assets/images/link.png" alt="">
                    </div>
                </div>
                <div class="user-item">
                    <div class="loginout">
                        <img src="" alt="">
                        <span>退出账号</span>
                    </div>
                    <div class="right-icon">
                        <img src="../assets/images/link.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <the-footer />
    </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'

export default {
    components: {
        TheFooter
    },
    methods: {
        toUserInfo(){
            this.$router.push('./userinfo')
        }
    }
}
</script>

<style scoped>
    .hd{
        width: 100%;
        background: #ff3948;
    }
    .user{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 14px 80px;
    }
    .not-login{
        text-align: left;
        color: #fff;
    }
    .not-login h2{
        font-size: 24px;
        letter-spacing: 5px;
        line-height: 12px;
    }
    .user .user-left button{
        padding: 8px 28px;
        margin-right: 14px;
        background: none;
        border: 1px solid #fff;
        border-radius: 6px;
        font-size: 15px;
        color: #fff;
        letter-spacing: 2px;
    }
    .container{
        position: relative;
        width: 100%;
        background: #fff;
        font-size: 16px;
        color: #000;
    }
    .container .radius{
        position: absolute;
        top: -20px;
        width: 100%;
        height: 50px;
        background: #fff;
        border-radius: 30px;
    }
    .container img{
        width: 8px;
    }
    .container .order-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 14px 14px;
    }
    .container .all-order{
        font-size: 14px;
        color: #666;
        text-align: bottom;
    }
    .container .order-title img{
        margin-left: 10px;
        vertical-align: middle;
    }
    .order .items{
        display: flex;
        justify-content: space-around;
        padding: 0 5px;
        font-size: 12px;
        color: #666;
    }
    .order .items .order-statu{
        padding-top: 24px;
        padding-bottom: 24px;
    }
    .order .items img{
        width: 46px;
        margin-bottom: 8px;
    }
    .user-item{
        display: flex;
        justify-content: space-between;
        padding: 14px;
    }
</style>
