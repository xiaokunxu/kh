<template>
    <div class="layout">
        <header>
            <the-title title="发票信息"/>
            <img src="../../assets/images/cart/invoice_ic_doubt@3x.png" alt="" @click="toHelp">
        </header>
        <div class="page-wrap">
            <div class="invoice-type block">
                <p class="type-title">发票类型</p>
                <div class="type-tab">
                    <span class="type-tab-item" :class="{active:activeIndex == index}" v-for="(item, index) in tabs" :key="index" @click="changeTab(index)">{{item.content}}</span>
                    <!-- <div class="electronic" @click="changeTab(true)">
                        <span class="type-tab-item">电子普通发票</span>
                    </div>
                    <div class="paper" @click="changeTab(false)">
                        <span class="type-tab-item">纸质普通发票</span>
                    </div> -->
                </div>
                <p class="type-txt">电子发票即电子增值税发票，是税局认可的有效凭证，其法律效力、基本用途及使用规定同纸质发票。</p>
            </div>
            <div class="invoice-block block">
                <div class="invoice-item">
                    <label>
                        <span><span class="point">* </span>发票抬头: </span>
                        <input type="text" placeholder="请填写发票抬头">
                    </label>
                </div>
                <div class="invoice-item">
                    <label>
                        <span><span class="point">* </span>发票抬头: </span>
                        <input type="text">
                    </label>
                </div>
            </div>
            <div class="invoice-block block" v-if="temp">
                <div class="invoice-item">
                    <label>
                        <span><span class="point">* </span>收票人手机: </span>
                        <input type="number" placeholder="请输入收票人手机">
                    </label>
                </div>
                <div class="invoice-item">
                    <label>
                        <span><span class="point">* </span>收票人邮箱: </span>
                        <input type="text" placeholder="请输入收票人邮箱">
                    </label>
                </div>
            </div>
            <div class="save-btn">
                <button @click="onSave">保存</button>
            </div>
            <div class="tips">
                <p class="tips-title">发票须知:</p>
                <p>1.开票金额为用户实际支付金额(不含礼品卡)；</p>
                <p>2.电子发票可在确认收货后，在“订单详情“查看；</p>
                <p>3.未随箱寄出的纸质发票会在发货后15-30个工作日单独寄出；</p>
                <p>4.单笔订单只支持开具一种发票类型，如需增值税专用发票请联系客服处理；</p>
                <p>5.年购订单发票随每期子单寄出。</p>
            </div>
        </div>
    </div>
</template>

<script>
import TheTitle from 'components/TheTitle.vue'

const tabs = [
    {content: '电子普通发票'},
    {content: '纸质普通发票'}
]
export default {
    components: {
        TheTitle
    },
    data(){
        return{
            tabs,
            temp: true,
            activeIndex: 0
        }
    },
    methods: {
        changeTab(index){
            index === 0 ? this.temp = true : this.temp = false
            this.activeIndex = index
        },
        toHelp(){
            this.$router.push('./invoiceHelp')
        },
        onSave(){
            this.$router.back(-1)
        }
    }
}
</script>

<style lang="stylus" scoped>
    header{
        position relative
        img{
            position fixed
            top 13px
            right 10px
            width 24px
            z-index 10
        }
    }
    .page-wrap{
        padding-top 50px
        background #f6f6f6
        text-align left 
        font-size 14px
        color #000
        .block{
            margin-top 10px
            background #fff
        }
        .point{
            color #FF3947
        }
    }
    .invoice-type{
        padding 0 10px
        .type-title{
            padding 16px 0
        }
        .type-tab{
            display flex
            justify-content space-between
            text-align center
            span.active{
                background rgba(255, 57, 72, .1) 
                border 1px solid #FF3947
                color #FF3947
            }
            .type-tab-item{
                width 47%
                display inline-block
                padding 10px 0
                background #fff
                border 1px solid #939393
                border-radius 6px
                color #939393
            }
        }
        .type-txt{
            padding 16px 0
            line-height 25px
            font-size 13px
            color #939393
        }
    }
    .invoice-block{
        .invoice-item{
            padding 0 10px
            border-bottom 1px solid #ddd
            input{
                margin-left 20px
            }
            &:last-child{
                border-bottom none
            }
        }
    }
    .save-btn{
        padding 0 10px
        button{
            width 100%
            margin 40px 0 30px 0
            padding 12px 0
            border none 
            background #FF3947
            border-radius 30px
            font-size 18px
            color #fff
        }
    }
    .tips{
        padding 0 10px 10px 10px
        p{
            font-size 13px
            line-height 22px
            color #939393
        }
        .tips-title{
            color #FF3947
        }
    }
</style>

