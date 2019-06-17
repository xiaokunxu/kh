<template>
    <div class="layout">
        <header>
            <div class="app-view-header">
                <p>提交成功</p>
            </div>
        </header>
        <div class="app-view-wrap">
            <div class="container">
                <div class="success">
                    <img src="../../assets/images/circle_success.png" alt="">
                    <p class="success-txt">售后申请提交成功</p>
                </div>
                <div class="btn">
                    <button class="view-order" @click="onViewOrder">查看记录</button>
                    <button class="go-home" @click="goHome">回到首页</button>
                </div>
            </div>
            <div class="tips">
                <p class="tips-title">温馨提示:</p>
                <p><span></span>商品寄回地址将在审核通过后以短信形式告知，或在申请记录中查询。</p>
                <p><span></span>提交服务单后，售后专员可能与您电话沟通，请保持手机畅通。</p>
                <p><span></span>退货处理成功后退款金额将原路返回到您的支持账户中。</p>
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
            this.$router.push('./recordDetail')
        },
        goHome(){
            this.$router.push('../home')
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
            padding-bottom 20px
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
        span{
                display inline-block
                width 5px
                height 5px
                margin-right 5px
                background #939393
                border-radius 50%
            }
    }
</style>

