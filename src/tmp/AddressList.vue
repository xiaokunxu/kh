<template>
    <div class="layout">
        <the-title title="管理收货地址"/>
        <div class="container">
            <div class="address-list">
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
            </div>
        </div>
    </div>
</template>

<script>
import TheTitle from 'components/TheTitle.vue'

const addressList = [
    {
        username: "张三",
        usermobile: "13810086100",
        pic: require('../assets/images/ic_Positioning.png'),
        detailaddress: "深圳市福田区深南大道6029号世纪豪庭大厦9楼凯华技术有限公司",
    },
    {
        username: "张三",
        usermobile: "13810086100",
        pic: require('../assets/images/ic_Positioning.png'),
        detailaddress: "深圳市福田区深南大道6029号世纪豪庭大厦9楼凯华技术有限公司",
    },
    {
        username: "张三",
        usermobile: "13810086100",
        pic: require('../assets/images/ic_Positioning.png'),
        detailaddress: "深圳市福田区深南大道6029号世纪豪庭大厦9楼凯华技术有限公司",
    },
    {
        username: "张三",
        usermobile: "13810086100",
        pic: require('../assets/images/ic_Positioning.png'),
        detailaddress: "深圳市福田区深南大道6029号世纪豪庭大厦9楼凯华技术有限公司",
    },
    {
        username: "张三",
        usermobile: "13810086100",
        pic: require('../assets/images/ic_Positioning.png'),
        detailaddress: "深圳市福田区深南大道6029号世纪豪庭大厦9楼凯华技术有限公司",
    },
    {
        username: "张三",
        usermobile: "13810086100",
        pic: require('../assets/images/ic_Positioning.png'),
        detailaddress: "深圳市福田区深南大道6029号世纪豪庭大厦9楼凯华技术有限公司",
    }
]
export default {
    components: {
        TheTitle
    },
    data(){
        return{
            addressList,
        }
    },
    methods: {
        toAddressEdit(){
            this.$router.push('./addressEdit')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .layout{
        background #f3f3f3
    }
    .container{
        padding-top 50px
        padding-bottom 44px
        .address-list{
            .address-item{
                padding 0 10px
                margin-bottom 10px
                background #fff
                font-size 15px
                color #000
                .flex{
                    display flex
                    justify-content space-between
                }
                span{
                    line-height 22px
                }
                .userinfo{
                    padding-top 15px
                    font-size 16px
                }
                .detail-addresss{
                    text-align left 
                    padding 15px 0
                    img{
                        width 20px
                        height 20px
                        margin-right 8px
                    }
                }
                .address-bottom{
                    align-items center
                    padding 10px 0
                    border-top 1px solid #eee
                    .address-btn span{
                        display inline-block
                        padding 4px 20px
                        margin-left 20px
                        border 1px solid #ccc
                        border-radius 4px
                    }
                }
            }
        }
        .add-address{
            position fixed
            bottom 0
            left 0
            right 0
            padding 0 10px
            button{
                width 100%
                height 44px
                line-height 44px
                border none 
                background #FF3947
                border-radius 30px
                font-size 17px
                color #fff
            }
        }
    }
</style>

