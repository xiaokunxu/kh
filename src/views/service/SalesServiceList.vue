<template>
    <div class="app-view-wrapper">
        <header>
            <the-title title="售后服务"></the-title>
        </header>
        <div class="container">
            <div class="status">
                <div 
                    v-for="(tabList, index) in tabs" 
                    :key="index" 
                    :class="{'tab_active':curIndex == tabList.statu}" 
                    class="tab-item"
                    @click="changeTab(tabList.statu, index)">
                    <span>{{tabList.val}}</span>
                </div>
            </div>
            <transition-group class="page-wrap" tag="div" :name="transitionName">
                <div 
                    v-for="(order, index) in setRecordDetail" 
                    :key="index" 
                    class="order">
                    <!-- v-show="index == curIndex"> -->
                    <div class="order-top">
                        <span class="num" v-if="order.DealStatus === '6'">订单编号: {{order.DealNumber}}</span>
                        <span class="num" v-else>服务单号: {{order.DealNumber}}</span>
                        <!-- <span class="order-statu">{{statu}}</span> -->
                    </div>
                    <div class="order-list" v-for="product in order.listObj" :key="product.id">
                        <div class="commodity-left">
                            <img v-lazy="product.FilePath" alt="">
                        </div>
                        <div class="commodity-right">
                            <p class="commodity-name">{{product.CommodityName}}</p>
                            <p class="commodity-option">{{product.CommodityName}}</p>
                            <p class="commodity-price">￥{{product.DealMoney}}</p>
                            <p class="application-btn" v-if="order.DealStatus === '6'" @click="onServiceStatu(order)">申请退货{{serviceStatu}}</p>
                            <p class="application-btn" v-else @click="onServiceStatu(order)">已完成{{serviceStatu}}</p>
                        </div>
                    </div>
                    <div class="order-bottom">
                        <span class="total-price" v-if="order.DealStatus === '6'">下单时间：{{order.ConfirmTime}}</span>
                        <span class="total-price" v-else>申请时间：{{order.ConfirmTime}}</span>
                        <!-- <div class="order-statu"><button>取消订单</button></div> -->
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
import Order from '../../api/order'
import TheTitle from 'components/TheTitle.vue'
const tabs = [
    {
        statu: '6',
        val: '全部'
    },
    {
        statu: '1',
        val: '申请记录'
    }
]

export default {
    components: {
        TheTitle
    },
    data(){
        return{
            tabs,
            setRecordDetail: [],
            statuName: [],
            curIndex: 0,
            transitionName: '',
            serviceStatu: ''
        }
    },
    created(){
        this.curIndex = this.$route.query.statu
        this.getList(this.$route.query.statu)
        // this.$fetch('GetRecordDetail').then(res => {
        //     this.GetRecordDetail = res
        //     this.GetRecordDetail.forEach(item => {
        //         this.statuName.push(item.Status)
        //         if(item.Status === 1){
        //             this.serviceStatu = '申请退货'
        //         }else if(item.Status === 2){
        //             this.serviceStatu = '已完成'
        //         }
        //         console.log(item.Status)
        //     })
        // })
    },
    computed: {
        statu(){
            switch (this.statuName){
                case 1:
                    return '待发货'
                case 2:
                    return '该商品已申请过售后服务'
                case 3:
                    return '已完成'
                case 4:
                    return '已取消'
            }
        },
        // serviceStatu(){
        //     switch (this.statuName){
        //         case 1:
        //             return '申请退货'
        //         case 2:
        //             return '已完成'
        //         case 3:
        //             return '待审核'
        //         case 4:
        //             return '审核不通过'
        //         case 5:
        //             return '审核通过'
        //         case 6:
        //             return '待退款'
        //     }
        // }
    },
    methods: {
        getList(val){
            this.setRecordDetail = []
            Order.UserOrderTable({
                "SOURCE": "TEST",
                "CREDENTIALS": "0",
                "ADDRESS": "192.168.1.195",
                "TERMINAL": "0",
                "INDEX": "20170714",
                "METHOD": "UserOrderTable",
                "UserAccount": "test001",
                "Num": "10",
                "Sum": "1",
                "Status": val
            }).then(res => {
                this.setList(res)
            })
        },
        setList(res){
            let list = res.DATA
            for(let i = 0; i<list.length; i++){
                let listData = list[i].CommodityCode[0]
                let listArr = []
                if(list[i].DealStatus === '1'){
                    this.type = '未支付'
                    this.statuName = '取消订单'
                }else if(list[i].DealStatus === '2'){
                    this.type = '待发货'
                    this.statuName = '取消订单'
                }
                for(let j=0; j<listData.CommodityCode.length; j++){
                    listArr.push({
                        CommodityCode: listData.CommodityCode[j],
                        CommodityName: listData.CommodityName[j],
                        ConfirmTime: listData.ConfirmTime[j],
                        DealMoney: listData.DealMoney[j],
                        DealNumber: listData.DealNumber[j],
                        DealStatus: listData.DealStatus[j],
                        DealSum: listData.DealSum[j],
                        DetailedAddress: listData.DetailedAddress[j],
                        FilePath: listData.FilePath[j].split(',')[0]+listData.FilePath[j].split(',')[1],
                        SupplyMoney: listData.SupplyMoney[j],
                        UserAccount: listData.UserAccount[j]
                    })
                }
                this.setRecordDetail.push({
                    ConfirmTime: list[i].ConfirmTime,
                    DealMoney: list[i].DealMoney,
                    DealNumber: list[i].DealNumber,
                    ConfirmTime: list[i].ConfirmTime,
                    DealStatus: list[i].DealStatus,
                    listObj: listArr
                })
            }
            console.log(this.setRecordDetail)
        },
        setRecord(){
            this.setRecordDetail = []
            Order.UserOrderTable({
                "SOURCE": "TEST",
                "CREDENTIALS": "0",
                "ADDRESS": "192.168.1.195",
                "TERMINAL": "0",
                "INDEX": "20170714",
                "METHOD": "Information",
                "UserAccount": "test001",
                "Num": "10",
                "Sum": "1"
            }).then(res => {
                let list = res.DATA
                console.log(list)
                for(let i = 0; i<list.length; i++){
                    let listData = list[i].CommodityCode[0]
                    let listArr = []
                    if(list[i].DealStatus === '1'){
                        this.type = '未支付'
                        this.statuName = '取消订单'
                    }else if(list[i].DealStatus === '2'){
                        this.type = '待发货'
                        this.statuName = '取消订单'
                    }
                    for(let j=0; j<listData.CommodityCode.length; j++){
                        listArr.push({
                            CommodityCode: listData.CommodityCode[j],
                            CommodityName: listData.CommodityName[j],
                            ConfirmTime: listData.ConfirmTime[j],
                            DealMoney: listData.DealMoney[j],
                            DealNumber: listData.DealNumber[j],
                            DealStatus: listData.DealStatus[j],
                            DealSum: listData.DealSum[j],
                            DetailedAddress: listData.DetailedAddress[j],
                            FilePath: listData.FilePath[j].split(',')[0]+listData.FilePath[j].split(',')[1],
                            SupplyMoney: listData.SupplyMoney[j],
                            UserAccount: listData.UserAccount[j]
                        })
                    }
                    this.setRecordDetail.push({
                        ConfirmTime: list[i].ConfirmTime,
                        DealMoney: list[i].DealMoney,
                        DealNumber: list[i].DealNumber,
                        ConfirmTime: list[i].ConfirmTime,
                        DealStatus: list[i].DealStatus,
                        ServiceNumber: list[i].ServiceNumber,
                        listObj: listArr
                    })
                }
            })
        },
        changeTab(val, index){
            document.querySelector('.page-wrap').scrollTo(0, 0)
            this.transitionName = index > this.curIndex ? 'page-left' : 'page-right'
            this.curIndex = val
            let toIndex = 0
            console.log(index)
            index === 0 ? this.getList(val):this.setRecord()
            // if(index === 0){
            //     this.getList(val)
            // }else{
            //     this.setRecord()
            // }
            // val === "6" ? this.getList():this.setRecord()
        },
        onServiceStatu(list){
            list.DealStatus === "6" ? this.$router.push({name: 'ApplicationForReturn', query: {DealNumber: list.DealNumber}}):this.$router.push({name: 'RecordDetail', query: {DealNumber: list.DealNumber}})
        }
    }
}
</script>

<style scoped lang="stylus">
    .app-view-wrapper{
        width 100%
        height 100vh
        background #f3f3f3
    }
    .container{
        padding-top 50px
        // background #f3f3f3
    }
    .container .status{
        display flex
        justify-content space-around
        background #fff
    }
    .container .status .tab-item{
        width auto !important
        padding 8px 10px
        span{
            font-size 14px
            color #333
        }
        &.tab_active span{
            padding-bottom 6px
            border-bottom 2px solid #FF3947
            color #FF3947
        }
    }
    .order{
        margin 10px
        padding 0 10px
        background #fff
        border-radius 5px
        font-size 14px
        color #000;
        .order-top{
            display flex
            justify-content: space-between
            padding 12px 0
            border-bottom 1px solid #eee
            .order-statu{
                color #FF3947
            }
        }
        .order-list{
            display flex
            height 120px
            padding 10px 0
            img{
                width 120px 
                height 120px   
                border-radius 8px  
            }
            .commodity-right{
                width 100%
                position relative
                text-align left
                margin-left 14px
                margin-right 8px
                // padding-top 5px
                line-height 20px
                font-size 15px
                color #000;
                .commodity-option{
                    margin-top 5px
                    font-size 14px
                    color #939393
                }
                .commodity-price{
                    position absolute
                    bottom 0
                    left 0
                    color #ff3948
                }
                 .application-btn{
                    position absolute
                    bottom 0
                    right 0
                    padding 4px 12px 
                    border 1px solid #ff3948
                    border-radius 4px
                    font-size 13px
                    color #ff3948
                }
            }
        }
        .order-bottom{
            display flex
            justify-content space-between
            align-items center
            padding 12px 0
            border-top 1px solid #eee
            button{
                padding 6px 12px
                border 1px solid #ccc
                background none
                border-radius 4px
                font-size 13px
            }
        }
    }
    
</style>

