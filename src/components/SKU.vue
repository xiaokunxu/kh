<template>
    <div class="pop" v-show="showSKU">
        <div class="sku">
            <div class="pop-top">
                <div class="pic">
                    <img src="../assets/images/recommend1.jpg" alt="">
                </div>
                <div class="info">
                    <p class="price">￥100</p>
                    <p class="stock">库存100件</p>
                    <p class="select">请选择</p>
                </div>
                <div class="close" @click="closeSKU">
                    <van-icon name="close" color="#939393"/>
                </div>
            </div>
            <div class="option">
                <ul>
                    <li class="option-title">
                        <p class="title">颜色</p>
                        <ul>
                            <li class="options-item">
                                <span :class="{active:active}">白色</span>
                                <span>黑色</span>
                            </li>
                        </ul>
                    </li>
                    <li class="option-title">
                        <p class="title">尺寸</p>
                        <ul>
                            <li class="options-item">
                                <span>165/74A165/74A</span>
                                <span>170/78A</span>
                                <span>165/74A</span>
                                <span>170/78A</span>
                                <span>165/74A</span>
                                <span>170/78A</span>
                                <span>165/74A</span>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="buy-num">
                    <p class="title">购买数量</p>
                    <div class="num">
                        <img @click="decrease" src="../assets/images/cart/shoppingcart_ic_less@3x.png" alt="">
                        <span>{{current}}</span>
                        <img @click="increase" src="../assets/images/cart/shoppingcart_ic_plus@3x.png" alt="">
                    </div>
                </div>
            </div>
            <div class="pop-footer">
                <button class="pop-btn">确定</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from 'vant'

export default {
    name: 'sku',
    components: {
        [Icon.name]: Icon
    },
    props: {
        showSKU: {
            type: Boolean,
            default: false,
            required: true
        },
        productData: {
            required: true
        }
    },
    data(){
        return{
            active: true,
            current: 1
        }
    },
    created(){
        this.init()
    },
    methods: {
        init(){
            console.log(this.productData)
        },
        closeSKU(){
            this.$emit('close')
        },
        decrease(){
            if(this.current < 2) return
            this.current --
        },
        increase(){
            this.current ++
        }
    }
}
</script>

<style lang="stylus" scoped>
    .pop{
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        background rgba(0, 0, 0, .5)
        text-align left
        color #000
        .sku{
            background #fff
            position absolute
            left 0
            bottom 0
            right 0
            border-top-left-radius 10px
            border-top-right-radius 10px
        }
        .pop-top{
            display flex
            align-items flex-end
            margin 10px
            .pic{
                font-size 0
                img{
                    width 120px
                    height 120px
                    border-radius 5px
                    margin-right 10px
                }
            }
            .info{
                text-align left
                line-height 20px
                font-size 13px
                color #000
                letter-spacing 2px
                .price{
                    font-size 16px
                    letter-spacing 0
                    color #ff3948
                }
                .stock{
                    color #939393
                }
            }
            .close{
                position absolute
                right 10px
                top 10px
            }
        }
        .option{
            padding 10px
            .option-title{
                padding-top 12px
                // padding-bottom 12px
                border-bottom 1px solid #f6f6f6
                .title{
                    margin-bottom 12px
                }
                .options-item{
                    span{
                        display inline-block
                        padding 8px 12px
                        margin-right 12px
                        margin-bottom 12px
                        background #f6f6f6
                        border-radius 5px
                        border 1px solid #f6f6f6
                        font-size 13px
                    }
                    &:last-child{
                        margin-bottom 0
                    }
                    .active{
                        background rgba(255, 57, 71, .05)
                        color #ff3948
                        border 1px solid #ff3948
                    }
                }
            }
            .buy-num{
                display flex
                justify-content space-between
                align-items center
                padding-top 12px
                img{
                    width 20px
                    vertical-align middle
                }
                span{
                    padding 0 12px
                }
            }
        }
        .pop-footer{
            text-align center
            padding 5px 10px 10px
            button{
                width 100%
                height 38px
                background #ff3948
                border none
                outline none
                border-radius 30px
                font-size 16px
                color #fff
                letter-spacing 4px
            }
        }
    }
</style>
