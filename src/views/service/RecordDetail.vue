<template>
    <div class="app-view-wrapper">
        <header>
            <the-title title="记录详情"></the-title>
        </header>
        <div class="container">
            <div class="cell1 record-cell">
                <p>服务单号: {{detailInfo.ServiceNumber[0]}}</p>
                <p>申请时间: {{detailInfo.ApplyTime[0]}}</p>
            </div>
            <div class="cell2 record-cell">
                <div class="review-progress" @click="toCheckProgress">
                    <span>审核进度: <span>您的服务单{{detailInfo.ServiceNumber[0]}}已收到</span></span>
                    <img src="../../assets/images/commodity/idetails-ic-Jump-g@3x.png" alt="">
                </div>
                <div class="progress">
                    <van-steps 
                        :active="active"
                        active-color="#FF3948"
                    >
                        <van-step>提交申请</van-step>
                        <van-step>申请审核</van-step>
                        <van-step>售后收货</van-step>
                        <van-step>进行退款</van-step>
                        <van-step>处理完成</van-step>
                    </van-steps>
                </div>
            </div>
            <div class="express-delivery record-cell">
                <p class="record-title">退货信息</p>
                <p>快递公司: <span class="font-gray">顺丰</span></p>
                <p>快递单号: <span class="font-gray">46566+6</span></p>
            </div>
            <div class="question record-cell">
                <p class="record-title">问题描述</p>
                <p class="font-gray">{{detailInfo.RefundReason[0]}}</p>
            </div>
            <div class="checkout record-cell">
                <p class="record-title">审核留言</p>
                <p class="font-gray">{{detailInfo.PlatformReply[0]}}</p>
                <div class="user-info">
                    <p class="font-gray">收货地址：广东省深圳市正品汇售后服务部</p>
                    <p class="font-gray">联系姓名：正品汇</p>
                    <p class="font-gray">邮政编码：518000</p>
                </div>
            </div>
            <div class="tips">
                <p class="tips-title">温馨提示：</p>
                <p><span></span>商品寄回地址将在审核通过后以短信形式告知，或在申请记录中查询。</p>
                <p><span></span>提交服务单后，售后专员可能与您电话沟通，请保持手机畅通。</p>
                <p><span></span>退货处理成功后退款金额将原路返回到您的支持账户中。</p>
            </div>
        </div>
    </div>
</template>

<script>
import Order from '../../api/order'
import TheTitle from 'components/TheTitle.vue'
import { Step, Steps } from 'vant'

export default {
    components: {
        [Step.name]: Step,
        [Steps.name]: Steps,
        TheTitle
    },
    data() {
        return {
            active: null,
            detailInfo: [],
            num: ''
        }
    },
    created(){
        this.num = this.$route.query.DealNumber
        this.setRecordDetail(this.num)
    },
    methods: {
        toCheckProgress(){
            this.$router.push({name: 'CheckProgress', query: {num: this.num}})
        },
        setRecordDetail(val){
            console.log(val)
            Order.RecordInfo({
                "SOURCE": "TEST",
                "CREDENTIALS": "0",
                "ADDRESS": "192.168.1.195",
                "TERMINAL": "0",
                "INDEX": "20170714",
                "METHOD": "RecordInfo",
                "UserAccount": "test001",
                "DealNumber": val
            }).then(res => {
                this.detailInfo = res.DATA[0]
                console.log(this.detailInfo)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container{
        padding-top 50px
        background #f3f3f3
        .record-cell{
            margin-bottom 10px
            padding 12px 10px
            background #fff
            text-align left 
            font-size 14px
            color #000
            line-height 22px
        }
        .record-title{
            margin-bottom 10px
        }
        .font-gray{
            color #939393
        }
        .cell1{
            font-size 16px
        }
        .cell2{
            .review-progress{
                display flex
                justify-content space-between
                align-items center
                img{
                    width 8px
                }
            }
            .progress{
                margin-top 20px
            }
        }
        .user-info{
            padding-top 20px
        }
        .tips{
            padding 0 10px 10px 10px
            text-align left 
            font-size 13px
            color #939393
            line-height 22px
            .tips-title{
                color #FF3948
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
    }
</style>

<style lang="stylus">
    .progress{
        .van-step--horizontal.van-step--process .van-icon{
            font-size 20px
        }
        .van-step__circle{
            width 8px
            height 8px
        }
        .van-step--finish .van-step__circle, .van-step--finish .van-step__line{
            background-color #FF3948
        }
        .van-step--horizontal .van-step__line{
            top 32px
        }
        .van-step--horizontal .van-step__title{
            padding-bottom 10px
        }
    }
    
</style>

