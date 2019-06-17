<template>
    <div class="layout">
        <the-title title="管理收货地址"/>
        <div class="container">
            <!-- <div class="address-list">
                <ul>
                    <li class="address-item" v-for="(list, index) in addressList" :key="index">
                        <div class="address-info">
                            <div class="userinfo flex">
                                <span>{{list.username}}</span>
                                <span>{{list.usermobile}}</span>
                            </div>
                            <div class="detail-addresss flex">
                                <img :src="list.pic" alt="">
                                <span>{{list.detailaddress}}</span>
                            </div>
                            <div class="address-bottom flex">
                                <div class="select">
                                    <span>默认地址</span>
                                </div>
                                <div class="address-btn">
                                    <span>编辑</span>
                                    <span>删除</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="add-address">
                <button @click="toAddressEdit">添加新地址</button>
            </div> -->
            <van-address-list
                v-model="chosenAddressId"
                :list="addressList"
                @add="onAdd"
                @edit="onEdit"
                @select="onSelect"
                />
        </div>
    </div>
</template>

<script>
import TheTitle from 'components/TheTitle.vue'
import Address from '../api/address'
import areaList from '../assets/js/area'
import { AddressList, Toast } from 'vant'

export default {
    components: {
        [AddressList.name]: AddressList,
        [Toast.name]: Toast,
        TheTitle
    },
    data(){
        return{
            chosenAddressId: '',
            addressList: [],
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log(to, from)
        
        if(from.path === '/order/checkout'){

        }
        next()
    },
    watch: {
        // $route(to,from){
        //     console.log(to, from);
        // }
        $route: {
            deep: true,
            handler(val, oldval){
                console.log(val, oldval)
            }
        }
    },
    // beforeRouteEnter (to, from, next) {
        // if(from.name){
        //     Address.GetUserAddress({
        //         "SOURCE": "TEST",
        //         "CREDENTIALS": "0",
        //         "ADDRESS": "192.168.1.195",
        //         "TERMINAL": "0",
        //         "INDEX": "20170714",
        //         "METHOD": "GetUserAddress",
        //         "UserAccount": "test001"
        //     }).then(res => {
        //         next(vm => vm.getAddressList(res))
        //     })
        // }
    // },
    created(){
        this.init()
    },
    methods: {
        // getAddressList(res){
        //     console.log(res)
        // },
        init(){
            Address.GetUserAddress({
                "SOURCE": "TEST",
                "CREDENTIALS": "0",
                "ADDRESS": "192.168.1.195",
                "TERMINAL": "0",
                "INDEX": "20170714",
                "METHOD": "GetUserAddress",
                "UserAccount": "test001"
            }).then(res => {
                console.log(res.DATA[0])
                let address = []
                for(let i = 0; i < res.DATA[0].Address.length; i++){
                    if(res.DATA[0].ConsigneeStatus[i] === 0){
                        this.chosenAddressId = true
                    }
                    address.push({
                        id: i,
                        name: res.DATA[0].ConsigneeName[i],
                        tel: res.DATA[0].ConsigneeTel[i],
                        address: res.DATA[0].Address[i],
                        ConsigneeStatus: res.DATA[0].ConsigneeStatus[i],
                        ConsigneeProvince: res.DATA[0].ConsigneeProvince[i],
                        ConsigneeCity: res.DATA[0].ConsigneeCity[i],
                        ConsigneeCounty: res.DATA[0].ConsigneeCounty[i],
                        ConsigneeAddress: res.DATA[0].ConsigneeAddress[i],
                        ConsigneePostalcode: res.DATA[0].ConsigneePostalcode[i],
                        RegisterTime: res.DATA[0].RegisterTime[i],
                        addressID: res.DATA[0].ID[i]
                    })
                }
                this.addressList = address
                console.log(address)
            })
        },
        onAdd() {
            this.$router.push('./edit')
        },
        onEdit(item, index) {
            this.$router.push({
                name: 'AddressEdit',
                query: {
                    name: item.name,
                    tel: item.tel,
                    ConsigneeStatus: item.ConsigneeStatus,
                    address: item.address,
                    ConsigneeProvince: item.ConsigneeProvince,
                    ConsigneeCity: item.ConsigneeCity,
                    ConsigneeCounty: item.ConsigneeCounty,
                    ConsigneeAddress: item.ConsigneeAddress,
                    ConsigneeStatus: item.ConsigneeStatus,
                    ConsigneePostalcode: item.ConsigneePostalcode,
                    addressID: item.addressID
                }  
            })
            console.log(item)
        },
        onSelect(item, index){
            console.log(item)
            Address.SetDefaultAddress({
                "SOURCE": "TEST",
                "CREDENTIALS": "0",
                "ADDRESS": "192.168.1.195",
                "TERMINAL": "0",
                "INDEX": "20170714",
                "METHOD": "SetDefaultAddress",
                "UserAccount": "test001",
                "ID": item.addressID
            }).then(res => {
                console.log(res)
                if(res.DATA[0] === 1){
                    Toast.success('设置成功')
                    setTimeout(() => {
                        this.$router.push('../user')
                    }, 2000)
                }else {
                    Toast.success('设置失败')
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
    .layout{
        height 100vh
        background #f3f3f3
    }
    .container{
        padding-top 51px
        // padding-bottom 44px
        // .address-list{
        //     .address-item{
        //         padding 0 10px
        //         margin-bottom 10px
        //         background #fff
        //         font-size 15px
        //         color #000
        //         .flex{
        //             display flex
        //             justify-content space-between
        //         }
        //         span{
        //             line-height 22px
        //         }
        //         .userinfo{
        //             padding-top 15px
        //             font-size 16px
        //         }
        //         .detail-addresss{
        //             text-align left 
        //             padding 15px 0
        //             img{
        //                 width 20px
        //                 height 20px
        //                 margin-right 8px
        //             }
        //         }
        //         .address-bottom{
        //             align-items center
        //             padding 10px 0
        //             border-top 1px solid #eee
        //             .address-btn span{
        //                 display inline-block
        //                 padding 4px 20px
        //                 margin-left 20px
        //                 border 1px solid #ccc
        //                 border-radius 4px
        //             }
        //         }
        //     }
        // }
        // .add-address{
        //     position fixed
        //     bottom 0
        //     left 0
        //     right 0
        //     padding 0 10px
        //     button{
        //         width 100%
        //         height 44px
        //         line-height 44px
        //         border none 
        //         background #FF3947
        //         border-radius 30px
        //         font-size 17px
        //         color #fff
        //     }
        // }
    }
</style>

<style lang="stylus">
    .van-address-item__name{
        font-size 15px
        margin-bottom 7px
    }
    .van-address-item__address{
        font-size 13px
        line-height 18px
    }
    .van-button--danger{
        background #FF3947
        border 1px solid #FF3947
    }
    .van-address-list{
        padding-bottom 50px
    }
    .van-address-item{
        margin-bottom 10px
    }
</style>


