<template>
    <div class="layout">
        <header>
            <div class="title">
                <span>购物车</span>
                <img @click="deleteCart" class="delete" src="../assets/images/search/search-ic-delete@3x.png" alt="">
            </div>
        </header>
        <!-- <the-title title="购物车"></the-title> -->
        <div class="cart-list">
            <div class="tips">
                <div class="tips-left">
                    <img src="../assets/images/home/home_ic_notice@3x.png" alt="">
                    <span>自营商品单笔订单金额满88元可免邮费</span>
                </div>
                <div class="tips-right">
                    <img src="../assets/images/cart/shoppingcart_ic_Jump_r@3x.png" alt="">
                </div>
            </div>
            <div v-if="cartList&&cartList.length>0">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <!-- <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                > -->
                <ul>
                    <li v-for="(list, index) in cartList" :key="list.DealNumber" class="item">
                    <!-- <li class="item"> -->
                        <div class="ui-flex align-center justify-center">
                            <div class="choose">
                                <van-checkbox v-model="list.checked" @click="changeCart(list, index)" checked-color="#ff3948"></van-checkbox>
                                <!-- <img class="selected" src="../assets/images/cart/ic_check_air@3x.png" alt=""> -->
                            </div>
                            <div class="img-product" @click="toDetail"><img v-lazy="list.listObj[0].FilePath" alt=""></div>
                            <div class="info">
                                <p class="name">{{list.listObj[0].CommodityName}}</p>
                                <p class="option">黑色</p>
                                <div class="info-bottom">
                                    <p class="price">￥{{list.listObj[0].SupplyMoney}}</p>
                                    <div class="num flex">
                                        <img class="input-sub" @click="cartEdit(list, -1)" src="../assets/images/cart/shoppingcart_ic_less@3x.png" alt="">
                                        <div class="input-num">
                                            <span>{{list.listObj[0].DealSum}}</span>
                                        </div>
                                        <img class="input-add" @click="cartEdit(list, 1)" src="../assets/images/cart/shoppingcart_ic_plus@3x.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- </van-list> -->
            </van-pull-refresh>
            </div>
            <div v-else class="empty">
                <img src="../assets/images/empty/default_empty_shopping_cart@3x.png" alt="">
                <p>购物车还是空的，去挑选商品吧...</p>
            </div>
        </div>
        <div class="bottom-submit box-flex">
            <div class="check">
                <van-checkbox class="selected" @click="onCheckAll" v-model="checkAll" checked-color="#ff3948"></van-checkbox>
                <!-- <img class="selected" src="../assets/images/cart/ic_check_air@3x.png" alt=""> -->
                <span>全选</span>
            </div>
            <div class="price-box">
                <span>合计:<span class="total-price">￥{{totalPrice}}</span></span>
                <button @click="toOrderCheckout">结算</button>
            </div>
            
        </div>
        <the-footer />
    </div>
</template>

<script>
import TheFooter from 'components/TheFooter.vue'
import TheTitle from 'components/TheTitle.vue'
import { PullRefresh, Checkbox, Toast } from 'vant'
import Order from '../api/order'
import Cart from '../api/cart'

export default {
    components: {
        TheFooter,
        TheTitle,
        [PullRefresh.name]: PullRefresh,
        [Checkbox.name]: Checkbox,
        [Toast.name]: Toast
    },
    data(){
        return {
            cartList: [],
            isLoading: false,
            loading: false,
            finished: false,
            checkAll: false,
            totalPrice: 0,
            checkoutList: [],
            orderCheckoutList: {
                DealNumber: [],
                CommodityCode: [],
                CommodityName: [],
                DealSum: [],
                SupplyMoney: [],
            },
        }
    },
    created(){
        this.getCartList()
    },
    watch: {
        cartList: {
            deep: true,
            handler (val){
                let price = 0
                this.checkoutList = []
                val.forEach((list, index, arr) => {
                    if(list.checked){
                        console.log(list)
                        this.checkoutList.push(list)
                        // this.orderCheckoutList.DealNumber = list.listObj[0].DealNumber
                        // this.orderCheckoutList.DealNumber.push(list.listObj[0].DealNumber)
                        // this.orderCheckoutList.CommodityCode.push(list.listObj[0].CommodityCode)
                        // this.orderCheckoutList.CommodityName.push(list.listObj[0].CommodityName)
                        // this.orderCheckoutList.DealSum.push(list.listObj[0].DealSum)
                        // this.orderCheckoutList.SupplyMoney.push(list.listObj[0].SupplyMoney)
                        // console.log(this.orderCheckoutList)
                        sessionStorage.setItem('checkout', JSON.stringify(this.checkoutList))
                        price += list.listObj[0].DealSum * list.listObj[0].SupplyMoney
                    }
                    if(arr[index].checked === true){
                        this.checkAll = true
                    }else if(arr[index].checked === false){
                        this.checkAll = false
                    }
                })
                this.totalPrice = price
            }
        }
    },
    // beforeRouteEnter (to, from, next) {
    //     if(from.name){
    //         Cart.CartInfo({

    //         }).then()
    //     }  
    // },
    methods: {
        getCartList(){
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
                "Status": "0"
            }).then(res => {
                if(res.DATA){
                    this.setCartList(res)
                }
                // this.cartList = res.DATA.map(item => this.$set(item, 'select', true))
            })
        },
        setCartList(res){
            let list = res.DATA
            for(let i = 0; i<list.length; i++){
                let listData = list[i].CommodityCode[0]
                let listArr = []
                for(let j=0; j<listData.CommodityCode.length; j++){
                    listArr.push({
                        CommodityCode: listData.CommodityCode[j],
                        CommodityName: listData.CommodityName[j],
                        ConfirmTime: listData.ConfirmTime[j],
                        DealMoney: listData.DealMoney[j],
                        DealNumber: listData.DealNumber[j],
                        DealStatus: listData.DealStatus[j],
                        DealSum: parseInt(listData.DealSum[j]),
                        DetailedAddress: listData.DetailedAddress[j],
                        FilePath: listData.FilePath[j].split(',')[0]+listData.FilePath[j].split(',')[1],
                        SupplyMoney: listData.SupplyMoney[j],
                        UserAccount: listData.UserAccount[j]
                    })
                }
                this.cartList.push({
                    ConfirmTime: list[i].ConfirmTime,
                    DealMoney: list[i].DealMoney,
                    DealNumber: list[i].DealNumber,
                    ConfirmTime: list[i].ConfirmTime,
                    DealStatus: list[i].DealStatus,
                    checked: false, // 添加复选框状态
                    listObj: listArr
                })
                // this.num = parseInt(this.cartList[i].listObj[0].DealSum)
            }
            console.log(this.cartList)
        },
        onCheckAll(){
            if(this.checkAll){
                this.checkAll = true
                this.cartList.forEach(item => {
                    item.checked = true
                })
            }else{
                this.checkAll = false
                this.cartList.forEach(item => {
                    item.checked = false
                })
            }
        },
        changeCart(val){
            
        },
        toDetail(){
            this.$router.push('./detail')
        },
        cartEdit(list, num){
            let item = list.listObj[0]
            if(num < 0 && num === 1) return
            // if(num > 0 && list.num == list.listObj[0].DealSum) return
            let consumption = num > 0 ? 0 : 1
            let DealNumber = num > 0 ? 0 : item.DealNumber
            let postData = '[["DealNumber","CommodityCode","CommodityName","Num","SupplyMoney"],["'+DealNumber+'","'+item.CommodityCode+'","'+item.CommodityName+'","1","'+item.SupplyMoney+'"]]'
            Cart.CartManage({
                "SOURCE": "TEST",
                "CREDENTIALS": "0",
                "ADDRESS": "192.168.1.195",
                "TERMINAL": "0",
                "INDEX": "20170714",
                "METHOD": "CartManage",
                "UserAccount": "test001",
                "DATA": encodeURI(postData),
                "Status": consumption.toString()
            }).then(res => {
                if(res.DATA){
                    if(res.DATA[0]){
                        // this.num += num
                        item.DealSum += num
                    }
                }
            })
        },
        deleteCart(){
            this.cartList.forEach(list => {
                if(list.checked === true){
                    this.orderCheckoutList.DealNumber.push(list.listObj[0].DealNumber)
                    this.orderCheckoutList.CommodityCode.push(list.listObj[0].CommodityCode)
                    this.orderCheckoutList.CommodityName.push(list.listObj[0].CommodityName)
                    this.orderCheckoutList.DealSum.push(list.listObj[0].DealSum)
                    this.orderCheckoutList.SupplyMoney.push(list.listObj[0].SupplyMoney)
                }
            })
            console.log(this.orderCheckoutList)
            let postData = '[["DealNumber","CommodityCode","CommodityName","Num","SupplyMoney"],["'+this.orderCheckoutList.DealNumber+'","'+this.orderCheckoutList.CommodityCode+'","'+this.orderCheckoutList.CommodityName+'","'+this.orderCheckoutList.DealSum+'","'+this.orderCheckoutList.SupplyMoney+'"]]'
            if(this.orderCheckoutList.CommodityName.length === 0){
                Toast('请选择要删除的商品')
            }else{
                // Cart.DeleteCart({
                //     "SOURCE": "TEST",
                //     "CREDENTIALS": "0",
                //     "ADDRESS": "192.168.1.195",
                //     "TERMINAL": "0",
                //     "INDEX": "20170714",
                //     "METHOD": "DeleteCart",
                //     "UserAccount": "test001",
                //     "DATA": encodeURI(postData),
                //     "Status": "1"
                // }).then(res => {
                //     console.log(res)
                // })
            }
            console.log(postData)
        },
        toOrderCheckout(){
            console.log(this.checkoutList)
            this.totalPrice === 0 ? Toast('请选择要结算的商品') : this.$router.push({name: 'OrderCheckout', query: {totalPrice: this.totalPrice}})
        },
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功')
                this.isLoading = false
            }, 500);
        },
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                // for (let i = 0; i < 10; i++) {
                //     this.list.push(this.list.length + 1);
                // }
                // // 加载状态结束
                // this.loading = false;

                // // 数据全部加载完成
                // if (this.list.length >= 40) {
                //     this.finished = true;
                // }
            }, 500);
        }
    },
    mounted(){

    }
}
</script>

<style lang="stylus" scoped>
    .layout{
        height 100vh
        background #eee
    }
    .flex{
        display flex
        justify-content space-around
        align-items  center
    }
    .title{
        position fixed
        top 0
        left 0
        right 0
        height 50px
        line-height 50px
        padding 0 14px
        background #fff
        font-size 18px
        color #000
        font-weight bold
        letter-spacing 2px
        z-index 10
        .delete{
            position absolute
            right 10px
            top 50%
            transform translateY(-50%)
            width 16px
        }
        &:after{
            display block
            content ''
            clear both
        }
    }
    .cart-list{
        background #eee
        padding-top 50px
        padding-bottom 100px
        .tips{
            display flex
            justify-content space-between
            align-items center
            padding 10px
            background #ffd9cd
            font-size 13px
            color #ff3948
            .tips-left{
                display flex
                align-items center
                img{
                    width 20px
                    margin-right 10px
                }
            }
            .tips-right{
                font-size 0
                img{
                    width 10px
                }
            }
        }
        .item{
            margin 10px
            padding 10px 8px
            background #fff
            border-radius 5px
            .align-center{
                display flex
                .choose{
                    display flex
                    align-items center
                    font-size 0
                    img{
                        margin-right 0
                    }
                }
                .img-product{
                    font-size 0
                    margin 0 8px
                    img{
                        width 110px
                        height 110px
                    }
                }
                .info{
                    position relative
                    width 100%
                    text-align left 
                    .option{
                        margin-top 10px
                        font-size 14px
                        color #ccc
                    }
                    .info-bottom{
                        position absolute
                        bottom 0
                        left 0
                        right 0
                        display flex
                        justify-content space-between
                        align-items  center
                        // text-align bottom
                        .price{
                            color #ff3948
                        }
                        .num{
                            // float right 
                            img{
                                width 22px
                            }
                            .input-num{
                                vertical-align middle
                                min-width 30px
                                padding 0 6px
                                text-align center
                            }
                        }
                    }
                }
            }
            
        }
        .empty{
            position absolute
            top 25%
            img{
                width 50%
            }
        }
    }
    .box-flex{
        display flex
        justify-content space-between
        align-items center
    }
    .bottom-submit{
        position fixed
        bottom 50px
        left 0
        right 0
        height 50px
        background #fff
        padding 0 10px
        font-size 16px
        color #000
        .check{
            display flex
            align-items center
            span{
                color #939393
            }
        }
        .price-box{
            .total-price{
                padding-left 8px
                color #ff3948
            }
        }
        button{
            height 34px
            padding 0 40px
            margin-left 10px
            border none 
            border-radius 20px
            background #ff3948
            color #fff
        }
    }
    .selected{
        width 20px
        vertical-align middle
        margin-right 10px
    }
</style>

