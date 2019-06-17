<template>
    <div class="app-shell">
        <the-title title="填写订单"/>
        <div class="app-view-wrapper">
            <div class="checkout">
                <div class="page-wrap">
                    <div class="address">
                        <div class="address-piece piece" @click="toAddressList">
                            <div class="item-left">
                                <div class="address-info">
                                    <span>张三</span>
                                    <span>13800860086</span>
                                    <span class="defult-address">默认</span>
                                </div>
                                <div class="address-detail">
                                    <span>深圳市</span>
                                    <span>福田区</span>
                                    <span>深南大道6029号实际豪庭大厦</span>
                                </div>
                            </div>
                            <div class="item-right">
                                <img src="../../assets/images/commodity/idetails-ic-Jump-g@3x.png" alt="">
                            </div>
                        </div>
                        <!-- <div class="address-bg">
                            <img src="../../assets/images/cart/order_bg_r@3x.png" alt="">
                        </div> -->
                    </div>
                    <div class="commondity-list piece">
                        <ul>
                            <li class="items" v-for="(item, index) in checkoutList" :key="index">
                                <div class="item-left">
                                    <img :src="item.listObj[0].FilePath" alt="">
                                </div>
                                <div class="item-right">
                                    <p>{{item.listObj[0].CommodityName}}</p>
                                    <p class="option">{{item.listObj[0].CommodityCode}}</p>
                                    <p class="univalent">￥ {{item.listObj[0].SupplyMoney}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- <div class="pay-tips">
                        <p>订单仅支持货到付款，您尚未开卡，</p>
                        <p>建议您提前在新支付APP中开卡以便确认收货时付款！</p>
                    </div> -->
                    <div class="total-invoice">
                        <div class="commondity-price piece">
                            <div class="layout-left">
                                <span>商品合计</span>
                            </div>
                            <div class="layout-right">
                                <span>￥{{$route.query.totalPrice}}</span>
                            </div>
                        </div>
                        <div class="freight piece">
                            <div class="layout-left">
                                <span>运费</span>
                            </div>
                            <div class="layout-right">
                                <span class="freight-tip">满88元包邮</span>
                                <span>￥{{freight}}</span>
                            </div>
                        </div>
                        <div class="invoice piece" @click="toInvoice">
                            <div class="layout-left">
                                <span>发票信息</span>
                            </div>
                            <div class="layout-right">
                                <span>不开发票</span>
                                <img src="../../assets/images/commodity/idetails-ic-Jump-g@3x.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="pay-type piece">
                        <div class="layout-left">
                            <span>支付方式</span>
                        </div>
                        <div class="layout-right">
                            <span>货到付款</span>
                            <van-checkbox class="checkbox" @click="changeType" v-model="checked" checked-color="#ff3948"></van-checkbox>
                            <!-- <img src="../../assets/images/cart/ic_check_air@3x.png" alt="" /> -->
                        </div>
                    </div>
                    <div class="tips">
                        <span>* 需使用新支付APP支持，建议您提前下载</span>
                    </div>
                </div>
                <div class="app-view-bottom">
                    <span class="bottom-left">应付金额 :￥ {{$route.query.totalPrice}}</span>
                    <button class="sub" @click="onSubmit">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TheTitle from 'components/TheTitle.vue'
import Order from '../../api/order'
import { Checkbox } from 'vant'

export default {
    components: {
        TheTitle,
        [Checkbox.name]: Checkbox
    },
    data(){
        return{
            orderCheckoutList: {
                DealNumber: [],
                CommodityCode: [],
                CommodityName: [],
                DealSum: [],
                SupplyMoney: [],
            },
            checked: true,
            freight: 0,
            checkoutList: [],
            univalent: 6546
        }
    },
    watch: {
        // $route: (to,from) {
        //     console.log(to, from);
        // }
        $route: {
            deep: true,
            handler(val, oldval){
                console.log(val, oldval)
            }
        }
    },
    created(){
        this.checkoutList = JSON.parse(sessionStorage.getItem('checkout'))
        console.log(this.checkoutList)
    },
    methods: {
        toInvoice(){
            this.$router.push('./invoice')
        },
        changeType(){
            console.log(this.checked)
        },
        onSubmit(){
            this.checkoutList.forEach(item => {
                this.orderCheckoutList.DealNumber.push(item.listObj[0].DealNumber)
                this.orderCheckoutList.CommodityCode.push(item.listObj[0].CommodityCode)
                this.orderCheckoutList.CommodityName.push(item.listObj[0].CommodityName)
                this.orderCheckoutList.DealSum.push(item.listObj[0].DealSum)
                this.orderCheckoutList.SupplyMoney.push(item.listObj[0].SupplyMoney)
            })
            let payStatus = this.checked ? 0:1
            let postData = '[["CommodityCode","CommodityName","Num","SupplyMoney","UserName","UserMobile","UserAddress","ConsigneePostalcode","InvoicesInfo","OrderEquipment","PayStatus"],["'+this.orderCheckoutList.CommodityCode+'","'+this.orderCheckoutList.CommodityName+'","'+this.orderCheckoutList.DealSum+'","'+this.orderCheckoutList.SupplyMoney+'","'+UserName+'","'+UserMobile+'","'+UserAddress+'","'+ConsigneePostalcode+'","'+InvoicesInfo+'","1","'+payStatus+'"]]'
            console.log(this.orderCheckoutList)
            // Order.UserOrder({
            //     "SOURCE": "TEST",
            //     "CREDENTIALS": "0",
            //     "ADDRESS": "192.168.1.195",
            //     "TERMINAL": "0",
            //     "INDEX": "20170714",
            //     "METHOD": "UserOrder",
            //     "UserAccount": "test001",
            //     "DATA": encodeURI(postData)
            // }).then(res => {
            //     console.log(res)
            // })
            // this.$router.push('../order/success')
        },
        toAddressList(){
            this.$router.push('../address/list')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .app-shell{
        width 100%
        height 100vh
        background #eee
        .page-wrap{
            padding-bottom 64px
            padding-top 50px
        }
        .piece{
            display flex
            justify-content space-between
            font-size 14px
            color #000
        }
        .address-piece, .total-invoice, .pay-type, .commondity-list>ul{
            margin 10px 10px 0 10px
            padding 16px 10px
            background #fff
            border-radius 4px
        }
        .commondity-list>ul{
            width 100%
        }
        .address-bg img{
            padding 0 10px
        }
        .address-piece{
            padding 20px 10px
            align-items center
            span{
                padding-right 10px
            }
            .item-left{
                text-align left 
                .address-info{
                    padding-bottom 12px
                    .defult-address{
                        display inline-block
                        padding 2px 6px
                        background rgba(255, 57, 72, .1)
                        border 1px solid #FF3947
                        border-radius 10px
                        font-size 13px
                        color #FF3947
                    }
                }
            }
            .item-right img{
                width 8px
            }
        }
        .commondity-list{
            .items{
                display flex
                padding-bottom 14px
                .item-left{
                    border-radius 5px
                    img{
                        width 120px
                        height 120px
                        border-radius 6px
                    }
                }
                .item-right{
                    padding-left 14px
                    text-align left 
                    font-size 14px
                    position relative
                    p{
                        line-height 20px
                    }
                    .option{
                        margin-top 10px
                        color #939393
                    }
                    .univalent{
                        position absolute
                        bottom 0
                        left 14px
                        font-size 16px
                        color #FF3947
                    }
                }
            }
            .items:last-child{
                padding-bottom 0
            }
        }
        .freight{
            padding 14px 0
            .freight-tip{
                display inline-block
                height 15px
                line-height 16px
                padding 0 8px
                margin-right 10px
                border 1px solid #FF3947
                border-radius 10px
                font-size 12px
                color #FF3947
            }
        }
        .invoice{
            .layout-right{
                display flex
                align-items center
            }
            img{
                width 8px
                margin-left 10px
                vertical-align middle
            }
        }
        .pay-type{
            .layout-right{
                display flex
                align-items center
            }
            .checkbox{
                margin-left 10px
            }
            img {
                width 16px
                margin-left 10px
            }
        }
    }
    .tips{
        text-align right 
        margin-right 10px
        margin-top 10px
        font-size 12px
        color #939393
        letter-spacing 1px
    }
    .app-view-bottom{
        position fixed
        bottom 0
        left 0
        right 0
        display flex
        justify-content space-between
        align-items center
        height 50px
        padding 0 10px
        background #fff
        border-top 1px solid #ddd
        font-size 16px
        color #FF3947
        .sub{
            height 36px
            padding 0 40px
            border none 
            background #FF3947
            border-radius 20px
            color #fff
        }
    }
</style>

