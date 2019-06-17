<template>
    <div class="app-view-wrapper">
        <header>
            <the-title title="审核进度"></the-title>
        </header>
        <div class="container">
            <div class="service-num">
                <p>服务单号: {{detailInfo.ServiceNumber[0]}}</p>
                <p>申请时间: {{detailInfo.ApplyTime[0]}}</p>
            </div>
            <div class="progress-cell">
                <div class="progress-top">
                    <van-icon name="passed" class="passed"/>
                    <span>您的售后服务单已完成，感谢您的支持与理解！</span>
                </div>
                <div class="progress-content">
                    <van-steps 
                        direction="vertical" 
                        :active="active"
                        active-color="#FF3948"
                    >
                        <van-step>
                            <h3>【城市】物流状态1</h3>
                            <p>2016-07-12 12:40</p>
                        </van-step>
                        <van-step>
                            <h3>【城市】物流状态2</h3>
                            <p>2016-07-11 10:00</p>
                        </van-step>
                        <van-step>
                            <h3>快件已发货</h3>
                            <p>2016-07-10 09:30</p>
                        </van-step>
                        </van-steps>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Order from '../../api/order'
import TheTitle from 'components/TheTitle.vue'
import { Step, Steps, Icon } from 'vant'

export default {
    components: {
        [Step.name]: Step,
        [Steps.name]: Steps,
        [Icon.name]: Icon,
        TheTitle
    },
    data(){
        return{
            active: null,
            detailInfo: []
        }
    },
    created(){
        this.getAuditProgress(this.$route.query.num)
    },
    methods: {
        getAuditProgress(val){
            Order.AuditProgress({
                "SOURCE": "TEST",
                "CREDENTIALS": "0",
                "ADDRESS": "192.168.1.195",
                "TERMINAL": "0",
                "INDEX": "20170714",
                "METHOD": "AuditProgress",
                "UserAccount": "test001",
                "DealNumber": val
            }).then(res => {
                console.log(res.DATA[0])
                this.detailInfo = res.DATA[0]
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container{
        padding-top 50px
        text-align left 
        color #000
        .service-num{
            padding 12px 10px
            border-bottom 10px solid #f3f3f3
            line-height 22px
        }
        .progress-top{
            padding 14px 10px
            border-bottom 1px solid #eee
            font-size 14px
            .passed{
                margin-right 8px
                vertical-align middle
                font-size 16px
                color #FF3948
            }
        }
    }
</style>

<style lang="stylus">
    .progress-content{
        h3{
            margin: 5px 0
        }
        .van-step--vertical.van-step--process .van-icon{
            top 16px
            left -24px
            font-size 20px
        }
        .van-step__circle{
            width 8px
            height 8px
            left -18px
            top 20px
        }
        .van-step--vertical .van-step__line{
            left -14px
            top 20px
        }
    }
</style>


