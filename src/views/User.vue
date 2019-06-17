<template>
    <div class="app-view-wrapper">
        <div class="content app-view">
            <header class="hd">
                <div class="user">
                    <div class="not-login" v-if="isLogin">
                        <h2 class="username">{{userInfo.UserAccount}}</h2>
                        <p>{{userInfo.UserAddress}}</p>
                    </div>
                    <div class="user-left" v-else>
                        <button class="login-btn" @click="toLogin">登录</button>
                        <button class="register-btn">注册</button>
                    </div>
                    <div class="user-right" @click="toUserInfo">
                        <img v-if="isLogin" class="avatar" :src="userInfo.UserAvatar" alt="">
                        <img v-else class="avatar" src="../assets/images/user/my_avatar@3x.png" alt="">
                        <img src="../assets/images/commodity/idetails-ic-Jump-w@3x.png" alt="">
                    </div>
                </div>
            </header>
            <div class="container">
                <!-- <div class="radius"></div> -->
                <div class="order">
                    <div class="order-title" @click="toAllOrder">
                        <span>我的订单</span>
                        <div class="all-order">
                            <span>查看全部订单</span>
                            <img src="../assets/images/commodity/idetails-ic-Jump-g@3x.png" alt="">
                        </div>
                    </div>
                    <ul class="items">
                        <li class="order-statu" v-for="(item, index) in orderStatus" :key="index" @click="onStatu(item.statu)">
                            <img :src="item.img" alt="">
                            <p>{{item.val}}</p>
                        </li>
                    </ul>
                </div>
                <div class="user-item" @click="toAddress">
                    <div class="address item-left">
                        <img src="../assets/images/user/my_address@3x.png" alt="">
                        <span>地址管理</span>
                    </div>
                    <div class="right-icon">
                        <img src="../assets/images/commodity/idetails-ic-Jump-g@3x.png" alt="">
                    </div>
                </div>
                <div class="user-item">
                    <div class="about item-left">
                        <img src="../assets/images/user/my_on@3x.png" alt="">
                        <span>关于我</span>
                    </div>
                    <div class="right-icon">
                        <img src="../assets/images/commodity/idetails-ic-Jump-g@3x.png" alt="">
                    </div>
                </div>
                <div class="user-item">
                    <div class="loginout item-left">
                        <img src="../assets/images/user/my_quit@3x.png" alt="">
                        <span>退出账号</span>
                    </div>
                    <div class="right-icon">
                        <img src="../assets/images/commodity/idetails-ic-Jump-g@3x.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <the-footer />
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import TheFooter from 'components/TheFooter.vue'

const orderStatus = [
    {
        img: require('../assets/images/user/my_ship@3x.png'),
        statu: 2,
        val: '待发货'
    },
    {
        img: require('../assets/images/user/my_receipt@3x.png'),
        statu: 3,
        val: '待收货'
    },
    {
        img: require('../assets/images/user/my_cancel@3x.png'),
        statu: 7,
        val: '已取消'
    },
    {
        img: require('../assets/images/user/my_aftersale@3x.png'),
        statu: 6,
        val: '售后服务'
    },
]
export default {
    components: {
        TheFooter
    },
    data(){
        return {
            orderStatus
        }
    },
    computed: {
        ...mapState(['userInfo']),
        ...mapGetters(['isLogin'])
    },
    methods: {
        toUserInfo(){
            this.$router.push('./user/info')
        },
        toLogin(){
            this.$router.push('./login')
        },
        toAllOrder(){
            this.$router.push({
                name: 'Order',
                query: {statu: "8"}
            })
        },
        onStatu(statu){
            if(statu === 6){
                this.$router.push({
                    name: 'SalesServiceList',
                    query: {statu: "6"}
                })
            }else{
                this.$router.push({
                    name: 'Order',
                    query: {statu: statu}
                })
            }
            console.log(statu)
        },
        toAddress(){
            this.$router.push('./address/list')
        }
    }
}
</script>

<style scoped lang="stylus">
    .hd{
        background url('../assets/images/user/my_bg.png') center no-repeat
        background-size cover
        height 100%
    }
    .user{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 14px 80px;
        .user-right{
            display flex
            align-items center
            img{
                width 10px
            }
            .avatar{
                width 70px
                height 70px
                margin-right 10px
                border-radius 50%
            }
        }
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
    // .container .radius{
    //     position: absolute;
    //     top: -20px;
    //     width: 100%;
    //     height: 50px;
    //     background: #fff;
    //     border-radius: 30px;
    // }
    .container{
        .item-left{
            display flex
            align-items center
            img{
                width 20px
                margin-right 10px
            }
        }
        img{
            width: 8px;
        }
        
    }
    .container .order-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding 0 14px 5px
    }
    .container .all-order{
        display flex
        align-items center
        font-size 14px
        color #939393
    }
    .container .order-title img{
        margin-left: 10px;
        vertical-align: middle;
    }
    .order .items{
        display: flex;
        // justify-content: space-around;
        padding: 0 5px;
        font-size: 13px;
        color: #666;
    }
    .order .items .order-statu{
        flex 1
        padding-top: 24px;
        padding-bottom: 24px;
    }
    .order .items img{
        width: 46px;
        margin-bottom: 6px;
    }
    .user-item{
        display: flex;
        justify-content: space-between;
        padding: 14px;
    }
</style>
