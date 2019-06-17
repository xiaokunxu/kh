<template>
    <div class="app-view-wrapper">
        <header>
            <the-title title="我的订单"></the-title>
        </header>
        <div class="container">
            <div class="status">
                <div 
                    v-for="(tabList, index) in tabs" 
                    :key="index" 
                    :class="{'tab_active':curIndex == tabList.val}" 
                    class="tab-item"
                    @click="changeTab(tabList.val)">
                    <span>{{tabList.statu}}</span>
                </div>
            </div>
            <transition-group class="page-wrap" tag="div" :name="transitionName">
                <div 
                    v-for="(order, index) in orderList" 
                    :key="index" 
                    class="order"
                    @click="toOrderDetail(order)"
                >
                    <!-- v-show="index == curIndex"> -->
                    <div class="order-top">
                        <span class="num">订单编号: {{order.DealNumber}}</span>
                        <span class="order-statu">{{type}}</span>
                    </div>
                    <div class="order-list" 
                        v-for="product in order.listObj" 
                        :key="product.id">
                        <div class="commodity-left">
                            <img v-lazy="product.FilePath" alt="">
                        </div>
                        <div class="commodity-right">
                            <p class="commodity-name">{{product.CommodityName}}</p>
                            <p class="commodity-option">{{product.DealSum}}</p>
                            <p class="commodity-price">￥{{product.SupplyMoney}}</p>
                        </div>
                    </div>
                    <div class="order-bottom">
                        <span class="total-price">应付金额：￥{{order.DealMoney}}</span>
                        <div class="order-statu"><button>{{statuName}}</button></div>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
import Order from '../api/order'
import TheTitle from 'components/TheTitle.vue'

const tabs = [
    {
        val: '8',
        statu: '全部'
    },
    {
        val: '2',
        statu: '待发货'
    },
    {
        val: '3',
        statu: '待收货'
    },
    {
        val: '5',
        statu: '已完成'
    },
    {
        val: '7',
        statu: '已取消'
    }
]
export default {
    components: {
        TheTitle
    },
    data(){
        return{
            tabs,
            orderList: [],
            type: '',
            statuName: '',
            curIndex: 0,
            transitionName: '',
        }
    },
    created(){
        this.curIndex = this.$route.query.statu
        this.getList(this.$route.query.statu)
    },
    computed: {
        statu(){
            console.log(this.orderList)
            switch (this.orderList.DealStatus){
                case 1:
                    return '未支付'
                case 2:
                    return '未发货'
                case 3:
                    return '待收货'
                case 4:
                    return '已收货'
                case 5:
                    return '已确认'
            }
        }
    },
    // beforeRouteEnter (to, from, next) {
        // console.log(from)
        // if(from.name){
        //     Order.UserOrderTable({
        //         "SOURCE": "TEST",
        //         "CREDENTIALS": "0",
        //         "ADDRESS": "192.168.1.195",
        //         "TERMINAL": "0",
        //         "INDEX": "20170714",
        //         "METHOD": "UserOrderTable",
        //         "UserAccount": "test001",
        //         "Num": "10",
        //         "Sum": "1",
        //         "Status": "8"
        //     }).then(res => {
        //         next(vm => vm.setList(res))
        //     })
        // }else{
        //     next(vm => vm.getList())
        // }
    // },
    methods: {
        getList(val){
            this.orderList = []
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
                }else if(list[i].DealStatus === '3'){
                    this.type = '待收货'
                    this.statuName = '查看物流'
                }else if(list[i].DealStatus === '4'){
                    this.type = '已收货'
                    this.statuName = '查看物流'
                }else if(list[i].DealStatus === '5'){
                    this.type = '交易成功'
                    this.statuName = '再次购买'
                }else if(list[i].DealStatus === '7'){
                    this.type = '交易关闭'
                    this.statuName = '删除订单'
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
                this.orderList.push({
                    ConfirmTime: list[i].ConfirmTime,
                    DealMoney: list[i].DealMoney,
                    DealNumber: list[i].DealNumber,
                    ConfirmTime: list[i].ConfirmTime,
                    DealStatus: list[i].DealStatus,
                    listObj: listArr
                })
            }
            console.log(this.orderList)
        },
        changeTab(val, index){
            document.querySelector('.page-wrap').scrollTo(0, 0)
            this.transitionName = index > this.curIndex ? 'page-left' : 'page-right'
            this.curIndex = val
            let toIndex = 0
            console.log(val)
            this.getList(val)
        },
        toOrderDetail(val){
            this.$router.push({name: 'OrderDetail', query: {statu: val.DealStatus, DealNumber: val.DealNumber}})
        }
    }
}
</script>

<style scoped lang="stylus">
    .app-view-wrapper{
        width 100%
        height 100vh
        background #eee
    }
    .container{
        padding-top 50px
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
                position relative
                text-align left
                margin-left 14px
                margin-right 8px
                padding-top 5px
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
                    bottom 5px
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

