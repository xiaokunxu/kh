<template>
    <div class="detail layout">
        <div class="detail-wrapper">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <header class="detail-header">
                    <div class="backicon">
                        <img @click="toBack" src="../assets/images/commodity/details-ic-back@3x.png" alt="">
                    </div>
                </header>
                <div class="section detail-section detail-swiper">
                    <div class="swiper">
                        <!-- <img src="../assets/images/recommend1.jpg" alt=""> -->
                        <van-swipe :autoplay="3000" @change="onChangeSwiper">
                            <van-swipe-item v-for="(image, index) in swiperImg" :key="index">
                                <img v-lazy="image" />
                            </van-swipe-item>
                            <div class="custom-indicator swiper-indicator" slot="indicator">
                                {{ current }}/{{swiperImg.length}}
                            </div>
                        </van-swipe>
                    </div>
                </div>
                <div class="section section-detail">
                    <div class="product_info_insurance choose">
                        <img class="parameter-left" src="../assets/images/commodity/details-label@3x.png" alt="">
                        <div class="parameter-right">
                            <span>国任保险承保，最高赔付654654元</span>
                            <img src="../assets/images/commodity/idetails-ic-Jump-w@3x.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="section section-detail">
                    <div class="product_info_product_name">
                        <div class="goods-name">{{CommodityName}}</div>
                        <div class="goods-brief">{{Subheading}}</div>
                        <div class="goods-price">￥ {{SupplyMoney}}</div>
                    </div>
                </div>
                <div class="section section-detail">
                    <div class="product_info_choose_version">
                        <div class="choose choose-parameter" @click="onParameter">
                            <div class="parameter-left">商品参数</div>
                            <div class="parameter-right">查看<img class="more" src="../assets/images/commodity/idetails-ic-Jump-g@3x.png" alt=""></div>
                        </div>
                        <div class="choose" @click="onSku">
                            <div class="parameter-left">选择 商品类型</div>
                            <div class="parameter-right"><img class="more" src="../assets/images/commodity/idetails-ic-Jump-g@3x.png" alt=""></div>
                        </div>
                        <div class="choose">
                            <div class="parameter-left choose-item">
                                <div class="choose-serve">
                                    <img src="../assets/images/commodity/details-ic-ditch@3x.png" alt="">
                                    <span>无忧退货</span>
                                </div>
                                <div class="choose-serve">
                                    <img src="../assets/images/commodity/details-ic-refund@3x.png" alt="">
                                    <span>快速退款</span>
                                </div>
                                <div class="choose-serve">
                                    <img src="../assets/images/commodity/details-ic-postage@3x.png" alt="">
                                    <span>免费包邮</span>
                                </div>
                            </div>
                            <div class="parameter-right"><img class="more" src="../assets/images/commodity/idetails-ic-Jump-g@3x.png" alt=""></div>
                        </div>
                    </div>
                </div>
                <!-- <div class="section section-detail">
                    <div class="product_info_introduction introduction_txt">
                        <div class="introduction-title">商品介绍</div>
                        <div class="introduction">{{commodityDetailList.CommodityName}}</div>
                    </div>
                </div> -->
                <div class="section section-detail">
                    <div class="hot_recommend introduction_txt">
                        <div class="introduction-title">热销推荐</div>
                        <div class="hot-box">
                            <div class="hot-item">
                                <div class="hot-pic"><img src="../assets/images/recommend2.jpg" alt=""></div>
                                <div class="hot-title">路易威登经单肩包</div>
                                <div class="hot-sub-title">nano speedy包</div>
                                <div class="hot-price">￥ 17870.00</div>
                            </div>
                            <div class="hot-item">
                                <div class="hot-pic"><img src="../assets/images/recommend2.jpg" alt=""></div>
                                <div class="hot-title">路易威登经单肩包</div>
                                <div class="hot-sub-title">nano speedy包</div>
                                <div class="hot-price">￥ 17870.00</div>
                            </div>
                            <div class="hot-item">
                                <div class="hot-pic"><img src="../assets/images/recommend2.jpg" alt=""></div>
                                <div class="hot-title">路易威登经单肩包</div>
                                <div class="hot-sub-title">nano speedy包</div>
                                <div class="hot-price">￥ 17870.00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-detail">
                    <div class="detail-pic">
                        <lazy-component>
                            <img v-for="(img, index) in imageList" v-lazy="img" :key="index">
                        </lazy-component>
                    </div>
                </div>
                <div class="precaution">
                    <div class="precaution-title">注意事项</div>
                    <div class="matter">
                        <div class="question"><span class="point"></span>下单后如何支付？</div>
                        <div class="answer">正品汇所有商品采用货到付款形式，到货后消费者使用“正品汇”APP扫码支付即可。</div>
                    </div>
                    <div class="matter">
                        <div class="question"><span class="point"></span>使用什么快递发货？</div>
                        <div class="answer">默认使用顺分快递发货（个别商品使用其他快递），配送范围覆盖全国大部分地区（港澳台地区除外）。</div>
                    </div>
                    <div class="matter">
                        <div class="question"><span class="point"></span>如何申请退货？</div>
                        <div class="answer">1、自收到商品之日起30日之内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不用，预计1~5个工作日到账；</div>
                        <div class="answer">2、自收到商品之日起30日之内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不用，预计1</div>
                    </div>
                </div>
            </van-pull-refresh>
            <div class="footer-btn">
                <div class="footer-bar">
                    <div class="customer-service footer-item">
                        <img src="../assets/images/commodity/details-ic-service@3x.png" alt="">
                        <span>客服</span>
                    </div>
                    <div class="shopicon footer-item">
                        <img src="../assets/images/commodity/details-ic-shopcart@3x.png" alt="">
                        <span>购物车</span>
                    </div>
                    <div class="btn-bar btn-pos-left">
                        <span class="btn-title">加入购物车</span>
                    </div>
                     <div class="btn-bar btn-pos-right">
                        <span class="btn-title">立即购买</span>
                    </div>
                </div>
            </div>
            <van-popup v-model="isShow" position="bottom" title="标题">
                <div class="parameter-popup">
                    <span class="parameter-popup-left">商品编号</span>
                    <span class="parameter-popup-right">{{CommodityCode}}</span>
                </div>
                <div class="parameter-popup">
                    <span class="parameter-popup-left">品牌</span>
                    <span class="parameter-popup-right">{{BrandName}}</span>
                </div>
                <div class="parameter-popup">
                    <span class="parameter-popup-left">生产许可证</span>
                    <span class="parameter-popup-right">{{ProductionLicense}}</span>
                </div>
                <div class="parameter-popup">
                    <span class="parameter-popup-left">产品标准号</span>
                    <span class="parameter-popup-right">{{StandardNumber}}</span>
                </div>
                <div class="parameter-popup">
                    <span class="parameter-popup-left">生产厂家</span>
                    <span class="parameter-popup-right">{{Manufacturer}}</span>
                </div>
            </van-popup>

            <!-- <div class="ui-mask" v-show="showMask"></div> -->
            <SKU 
                :showSKU="showSKU"
                :productData="productData"
                @close="closeSKU"
            />
        </div>
    </div>
</template>

<script src="./Detail.js"></script>

<script>
import Commodity from '../api/commodity'
import { Swipe, SwipeItem , PullRefresh, Popup, Sku } from 'vant'
import SKU from 'components/SKU.vue'

export default {
    components: {
        SKU,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [PullRefresh.name]: PullRefresh,
        [Popup.name]: Popup
    },
    data(){
        return{
            current: 1,
            isShow: false,
            isLoading: false,
            showSKU: false,
            productData: '',
            commodityDetailList: {},
            swiperImg: [], // 轮播图
            imageList: [], // 商品详情图
            CommodityName: '',
            Subheading: '',
            SupplyMoney: '',
            CommodityCode: '',
            BrandName: '',
            ProductionLicense: '',
            StandardNumber: '',
            Manufacturer: '',
        }
    },
    created(){
        this.getCommodityDetail(this.$route.query.AttributeGroup, this.$route.query.ItemNum)
    },
    methods: {
        getCommodityDetail(AttributeGroup, ItemNum){
            this.productData = '555'
            let postData = '[["AttributeGroup","ItemNum"],["'+AttributeGroup+'","'+ItemNum+'"]]'
            Commodity.CommodityInfo({
                "SOURCE": "TEST",
                "CREDENTIALS": "0",
                "ADDRESS": "192.168.1.195",
                "TERMINAL": "0",
                "INDEX": "20170714",
                "METHOD": "CommodityInfo",
                "UserAccount": "qw123456",
                "DATA": encodeURI(postData)    
            }).then(res => {
                console.log(res)
                this.commodityDetailList = res.DATA[0]
                
                let swiperImg = this.commodityDetailList.FilePath[0].split(',')
                let CommodityProfile = this.commodityDetailList.CommodityProfile[0].split(',')
                swiperImg.forEach((item, index, arr) => {
                    this.swiperImg.push(arr[0]+(arr[index+1]))
                })
                CommodityProfile.forEach((item, index, arr) => {
                    this.imageList.push(arr[0]+(arr[index+1]))
                })
                this.swiperImg = this.swiperImg.slice(0, -1)
                this.imageList = this.imageList.slice(0, -1)
                // this.getImg(swiperImg)
                // this.getImg(CommodityProfile)
                this.CommodityName = this.commodityDetailList.CommodityName[0]
                this.SupplyMoney = this.commodityDetailList.SupplyMoney[0]
                this.Subheading = this.commodityDetailList.Subheading[0]
                this.CommodityCode = this.commodityDetailList.CommodityCode[0]
                this.BrandName = this.commodityDetailList.BrandName[0]
                this.ProductionLicense = this.commodityDetailList.ProductionLicense[0]
                this.StandardNumber = this.commodityDetailList.StandardNumber[0]
                this.Manufacturer = this.commodityDetailList.Manufacturer[0]
            })
        },
        onSku(){
            this.showSKU = true
        },
        closeSKU () {
            // this.showMask = false
            this.showSKU = false
        },
        getImg(img){
            console.log(img)
            // img.forEach((item, index, arr) => {
            //     this.imageList.push(arr[0]+(arr[index+1]))
            // })
            // this.imageList = this.imageList.slice(0, -1)
        },
        onParameter(){
            this.isShow = true
        },
        toBack(){
            this.$router.back(-1)
        },
        onChangeSwiper(index){
            this.current = index
        },
        onRefresh() {
            setTimeout(() => {
                this.swiperImg = []
                this.imageList = []
                this.getCommodityDetail(this.$route.query.AttributeGroup, this.$route.query.ItemNum)
                this.$toast('刷新成功')
                this.isLoading = false
            }, 500)
        },
    }
}
</script>
<style scoped lang="stylus">
    .detail-wrapper{
        padding-bottom 66px
        background #eee
    }
    .backicon{
        position absolute
        top 10px
        left 10px
        z-index 10
    }
    .detail-header .backicon img{
        /* position: absolute;
        top: 10px;
        left: 10px; */
        width 32px
        z-index 2
    }
    .section{
        background #fff
    }
    .swiper{
        .van-swipe-item{
            font-size 0
        }
        img{
            width 100%
            height 220px
        }
        .swiper-indicator{
            position absolute 
            bottom 10px
            right 10px
            height 17px
            line-height 17px
            padding 0 10px
            background rgba(0, 0, 0, .5)
            border-radius 30px
            font-size 12px
            color #fff
        }
    }
    .product_info_product_name{
        padding: 15px 50px;
    }
    .product_info_product_name .goods-name{
        line-height: 25px;
        font-weight: bold;
    }
    .product_info_product_name .goods-brief{
        padding: 14px 0;
        font-size: 14px;
        color: #939393;
    }
    .product_info_product_name .goods-price{
        font-size: 20px;
        color: #ff3948;
    }
    .more{
        width: 10px;
        margin-left: 10px;
        vertical-align: middle;
    }
    .product_info_choose_version,
    .hot_recommend{
        margin-top: 16px;
        margin-bottom: 16px;
    }
    .choose{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 14px;
        border-bottom: 1px solid #eee;
        font-size: 15px;
        color: #000;
        .choose-item{
            display flex
        }
        .choose-serve{
            display flex
            img{
                width 18px
                height 18px
            }
            span{
                padding-right 15px
                padding-left 5px
                color #939393
            }
        }
    }
    .product_info_insurance{
        padding 8px 14px
        background #ff3948
        .parameter-left{
            width 80px
            box-shadow 0 5px 8px 5px rgba(0, 0, 0, .2)
            font-size 0
        }
        .parameter-right{
            img{
                width 10px
                margin-left 10px
                vertical-align middle
            }
            span{
                font-size 13px
                color #fff
            }
        }
    }
    .choose:last-child{
        border-bottom: none;
    }
    .parameter-right{
        color: #939393;
    }
    .introduction_txt{
        padding: 14px;
        text-align: left;
        font-size: 15px;
        color: #000;
    }
    .product_info_introduction .introduction{
        padding-top: 10px;
        line-height: 18px;
        font-size: 13px;
        color: #333;
    }
    .hot-box{
        display: flex;
        margin-top: 14px;
        overflow-x: auto;
    }
    .hot-item{
        border: 1px solid #ccc;
        border-radius: 6px;
        margin-right: 8px;
        text-align: center;
        font-size: 14px;
        color: #000;
        line-height: 18px;
    }
    .hot-item .hot-pic img{
        width: 120px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    .hot-item .hot-sub-title{
        font-size: 12px;
        color: #939393;
    }
    .hot-item .hot-price{
        padding-top: 8px;
        padding-bottom: 8px;
        color: #ff3948;
    }
    .product-detail{
        padding: 14px;
        background: #fff;
    }
    .product-detail .detail-pic img{
        width: 100%;
    }
    .precaution{
        margin-top: 16px;
        padding: 14px;
        background: #fff;
        text-align: left;
        font-size: 12px;
        color: #666;
        line-height: 20px;
    }
    .precaution .precaution-title{
        font-size: 15px;
        color: #000;
        font-weight: bold;
    }
    .point{
        display: inline-block;
        margin-right: 6px;
        width: 7px;
        height: 7px;
        background: #ff3948;
        border-radius: 50%;
    }
    .matter{
        padding-top: 12px;
    }
    .footer-btn{
        position: fixed;
        bottom: 0;
        width 100%
    }
    .footer-bar{
        display: flex;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #fff;
        box-shadow: 0 3px 14px 2px rgba(0, 0, 0, .12);
    }
    .footer-item img{
        width: 22px;
        height: 22px;
    }
    .footer-item{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        white-space: nowrap;
        width: 90px;
        /* padding-left: 16px;
        padding-right: 16px; */
        font-size: 12px;
        color: #939393;
    }
    .shopicon{
        border-left: 1px solid #eee;
    }
    .footer-item span{
        line-height: 18px;
    }
    .btn-bar{
        width: 50%;
        height: 50px;
        line-height: 50px;
        color: #fff;
    }
    .btn-pos-left{
        background: #000;
    }
    .btn-pos-right{
        background: #ff3948;
    }
    .parameter-popup{
        height 50px
        line-height 50px
        text-align left
        // border 1px solid #939393
        font-size 14px
        color #939393
        .parameter-popup-left{
            display inline-block
            width 100px
            margin-left 10px
        }
    }
    .ui-mask{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.5);
        z-index: 100;
    }
</style>

<style>
.van-sku-container{
    text-align: left;
}
</style>

