<template>
    <div class="layout">
        <header>
            <div class="app-view-header">
                <p>完成</p>
            </div>
        </header>
        <div class="app-view-wrap">
            <div class="container">
                <div class="success">
                    <img src="../../assets/images/circle_success.png" alt="">
                    <p class="success-txt">订单提交成功</p>
                </div>
                <div class="success-tip">
                    <p>请在收到货后用新支付APP扫描二维码支付</p>
                    <p>支付金额: <span>￥{{price}}</span></p>
                </div>
                <div class="btn">
                    <button class="view-order" @click="onViewOrder">查看订单</button>
                    <button class="go-home" @click="goHome">回到首页</button>
                </div>
            </div>
            <div class="tips">
                <p class="tips-title">温馨提示:</p>
                <p>正品汇不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            price: '4554'
        }
    },
    methods: {
        onViewOrder(){
            this.$router.push('./order')
        },
        goHome(){
            this.$router.push('./home')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .layout{
        height 100vh
        background #f3f3f3
    }
    .app-view-header{
        height 50px
        background #fff
        line-height 50px
        font-size 20px
        color #000
        font-weight bold
        letter-spacing 2px
    }
    .container{
        margin 10px
        background #fff
        border-radius 8px
        p{
            line-height 22px
            font-size 14px
            color #000
        }
        .success{
            padding 40px 0
            img{
                width 60px
            }
            .success-txt{
                padding-top 8px
                font-size 16px
                color #FF3947
                letter-spacing 1px
            }
        }
        .success-tip{
            padding-bottom 20px
            border-bottom 1px solid #eee
            span{
                color #FF3947
            }
        }
        .btn{
            display flex
            justify-content space-around
            padding 20px 0
            button{
                padding 10px 25px
                background none
                border none 
                border-radius 25px
                color #fff
            }
            .view-order{
                background #FF3947
            }
            .go-home{
                background #000
            }
        }
    }
    .tips{
        padding 10px 
        text-align left 
        font-size 13px
        color #939393
        p{
            line-height 22px
        }
        .tips-title{
            color #FF3947
        }
    }
</style>

