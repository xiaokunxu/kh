<template>
    <div class="layout">
        <div class="app-view-wrapper">
            <header class="header">
                <div class="home-header">
                    <div class="app-header-wrapper clearfix">
                        <div class="app-header-middle">
                            <div class="app-header-title">
                                <span class="title">正品汇</span>
                            </div>
                        </div>
                        <div class="app-header-right">
                            <div class="app-header-item">
                                <img class="seachbtn" src="../assets/images/home/home_ic_search@3x.png" alt="" @click="toSearch">
                                <img @click="toCart" src="../assets/images/home/home_ic_shopcart@3x.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="app-header-bg"></div>
            </header>
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="home-swiper">
            <!-- <div class="swiper-container"> -->
                    <!-- <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(img, index) in imgList" :key="index">
                            <img :src="img.img" alt="">
                        </div>
                    </div> -->
                    <van-swipe :autoplay="3000" @change="onChangeSwiper">
                        <van-swipe-item v-for="(image, index) in swiperImg" :key="index">
                            <img v-lazy="image" />
                        </van-swipe-item>
                        <!-- <div class="custom-indicator home-swiper-indicator" slot="indicator">
                            {{ current + 1 }}/4
                        </div> -->
                    </van-swipe>
                </div>
            <div class="page-wrapper">
                <div class="bodys">
                    <div class="tips bodys-wrapper">
                        <div class="tips-msg">
                            <img src="../assets/images/home/home_ic_notice@3x.png" alt="">
                            <span>正品汇成为中国最大家电零售商!</span>
                        </div>
                        <div class="tips-detail">详情</div>
                    </div>
                    <div class="category bodys-wrapper">
                        <ul class="category-item">
                            <li v-for="(item, index) in logo" :key="index" @click="onCategory(item.name)">
                                <img :src="item.img" alt="">
                                <span>{{item.name}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="special-price bodys-wrapper">
                        <a @click="toCommodityList"><img v-lazy="specialPriceImg" ></a>
                    </div>
                    <div class="category_group bodys-wrapper">
                        <div class="cells">
                            <a class="exposure" href=""><img src="../assets/images/recommend1.jpg" alt=""></a>
                            <a class="exposure" href=""><img src="../assets/images/recommend2.jpg" alt=""></a>
                        </div>
                        <div class="cells">
                            <a class="exposure" href=""><img src="../assets/images/recommend1.jpg" alt=""></a>
                            <a class="exposure" href=""><img src="../assets/images/recommend2.jpg" alt=""></a>
                        </div>
                    </div>
                    <div class="good-stuff">
                        <div class="kinds-title">
                            <div class="good-stuff-left">
                                <span class="left-title">新鲜好物</span>
                                <span class="left-sub">进口爆款新鲜看</span>
                            </div>
                            <div class="good-stuff-more">
                                <span>更多好物</span>
                            </div>
                        </div>
                        <div class="good-stuff-bg">
                            <img src="../assets/images/banner2.jpg" alt="">
                            <div class="good-stuff-wrapper">
                            <div class="good-stuff-items">
                                <div class="good-stuff-container">
                                    <a href="">
                                        <img src="../assets/images/recommend2.jpg" alt="">
                                        <div class="items-txt">
                                            <p class="items-title">路易威登经典单肩包</p>
                                            <p class="items-title-sub">nano speedy包</p>
                                            <p class="items-price">￥18990</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="good-stuff-container">
                                    <a href="">
                                        <img src="../assets/images/recommend2.jpg" alt="">
                                        <div class="items-txt">
                                            <p class="items-title">路易威登经典单肩包</p>
                                            <p class="items-title-sub">nano speedy包</p>
                                            <p class="items-price">￥18990</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="good-stuff-container">
                                    <a href="">
                                        <img src="../assets/images/recommend2.jpg" alt="">
                                        <div class="items-txt">
                                            <p class="items-title">路易威登经典单肩包</p>
                                            <p class="items-title-sub">nano speedy包</p>
                                            <p class="items-price">￥18990</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="good-stuff-container">
                                    <a href="">
                                        <img src="../assets/images/recommend2.jpg" alt="">
                                        <div class="items-txt">
                                            <p class="items-title">路易威登经典单肩包</p>
                                            <p class="items-title-sub">nano speedy包</p>
                                            <p class="items-price">￥18990</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    <div class="kinds" v-for="(list, index) in classifyList" :key="index">
                        <div class="kinds-title">
                            <div class="good-stuff-left">
                                <span class="left-title">{{list}}</span>
                                <span class="left-sub">爽口一夏</span>
                            </div>
                            <div class="good-stuff-more">
                                <span>更多好物</span>
                            </div>
                        </div>
                        <div class="kinds-container">
                            <ul class="kinds-items">
                                <li v-for="(item, index) in commodityList" :key="index" @click="toDetail(item)">
                                    <!-- <a href=""> -->
                                        <div class="kinds-wrapper">
                                            <div class="kinds-pic">
                                                <img v-lazy="item.FilePath" alt="">
                                            </div>
                                            <div class="list-txt">
                                                <p>{{item.CommodityName}}</p>
                                                <p class="kinds-sub-title">{{item.Subheading}}</p>
                                                <p class="kinds-price">￥{{item.SupplyMoney}}</p>
                                                
                                            </div>
                                            <div class="remaining">
                                                    <span>还剩{{item.StockSum}}件</span>
                                                </div>
                                        </div>
                                    <!-- </a> -->
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- <div class="kinds">
                        <div class="kinds-title">
                            <div class="good-stuff-left">
                                <span class="left-title">饮食酒水</span>
                                <span class="left-sub">爽口一夏</span>
                            </div>
                            <div class="good-stuff-more">
                                <span>更多好物</span>
                            </div>
                        </div>
                        <div class="kinds-container">
                            <ul class="kinds-items">
                                <li>
                                    <a href="">
                                        <div class="kinds-wrapper">
                                            <div class="kinds-pic">
                                                <img src="../assets/images/recommend1.jpg" alt="">
                                            </div>
                                            <div class="list-txt">
                                                <p>【直营】 法国拉菲传奇波尔多进口干红酒葡萄酒6支装整箱</p>
                                                <p class="erskinds-y">2019</p>
                                                <p class="kinds-sub-title">法国进口国内现货</p>
                                                <p class="kinds-price">￥1000.00</p>
                                                <div class="remaining">
                                                    <span>还剩50件</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div class="kinds-wrapper">
                                            <div class="kinds-pic">
                                                <img src="../assets/images/recommend1.jpg" alt="">
                                            </div>
                                            <div class="list-txt">
                                                <p>【直营】 法国拉菲传奇波尔多进口干红酒葡萄酒6支装整箱</p>
                                                <p class="erskinds-y">2019</p>
                                                <p class="kinds-sub-title">法国进口国内现货</p>
                                                <p class="kinds-price">￥1000.00</p>
                                                <div class="remaining">
                                                    <span>还剩50件</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> -->
                </div>
            </div>
            </van-pull-refresh>
        </div>
        <the-footer />
    </div>
</template>

<script>
import Home from '../api/home'
import { Swipe, SwipeItem, PullRefresh } from 'vant'
import TheFooter from 'components/TheFooter.vue'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
const logo = [
    {img: require('../assets/images/home/home-ic-sort@3x.png'), name: '全部商品'},
    {img: require('../assets/images/home/home_ic_Drink@3x.png'), name: '饮食酒水'},
    {img: require('../assets/images/home/home_ic_milkpowder@3x.png'), name: '进口奶粉'},
    {img: require('../assets/images/home/home_ic_oil@3x.png'), name: '食用油'},
]

export default {
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [PullRefresh.name]: PullRefresh,
        TheFooter,
    },
    data() {
        return {
            logo,
            classifyList: [],
            commodityList: [],
            imgList: null,
            isLoading: false,
            current: 0,
            swiperImg: [
                require('../assets/images/recommend1.jpg'),
                require('../assets/images/recommend2.jpg'),
                require('../assets/images/recommend1.jpg'),
                require('../assets/images/recommend2.jpg'),
            ],
            specialPriceImg: require('../assets/images/home/home_specialprice@3x.png'),
        }
    },
    beforeRouteEnter (to, from, next) {
        if(from.name){
            let postData = '[["UserAccount","Status","IndustryName"],["0","0","0"]]'
            Home.IndustryInfo({
                "SOURCE": "TEST",
                "CREDENTIALS": "0",
                "ADDRESS": "192.168.1.195",
                "TERMINAL": "0",
                "INDEX": "20170714",
                "METHOD": "IndustryInfo",
                "DATA": encodeURI(postData)
            }).then(res => {
                next(vm => vm.setHomeList(res))
            })
        }else{
            next(vm => vm.getHomeList())
        }
        // next(vm => vm.getImg())
    },
    created(){
        // this.setHomeList()
    },
    methods: {
        getHomeList(){

        },
        setHomeList(data){
            this.classifyList = data.DATA[0].IndustryName
            console.log(data.DATA[0].IndustryName)
            // for(let j = 0; j<this.classifyList.length;j++){
            this.classifyList.forEach(item => {
                let postData = `[["IndustryNameOne","Sum","Num"],["${item}","1","5"]]`
                Home.GetCommodityTable({
                    "SOURCE": "TEST",
                    "CREDENTIALS": "0",
                    "ADDRESS": "192.168.1.195",
                    "TERMINAL": "0",
                    "INDEX": "20170714",
                    "METHOD": "GetCommodityTable",
                    "UserAccount": "qw123456",
                    "DATA": encodeURI(postData)
                }).then(res => {
                    console.log(res.DATA)
                    let commodityArr = res.DATA
                    this.commodityList = []
                    for(let i = 0; i<commodityArr[0].CommodityCode.length; i++){
                        this.commodityList.push({
                            AttributeGroup: commodityArr[0].AttributeGroup[i],
                            BUserAccount: commodityArr[0].BUserAccount[i],
                            BrandName: commodityArr[0].BrandName[i],
                            CommodityCode: commodityArr[0].CommodityCode[i],
                            CommodityName: commodityArr[0].CommodityName[i],
                            FilePath: commodityArr[0].FilePath[i].split(',')[0]+commodityArr[0].FilePath[i].split(',')[1],
                            ItemNum: commodityArr[0].ItemNum[i],
                            SalesSum: commodityArr[0].SalesSum[i],
                            StockSum: commodityArr[0].StockSum[i],
                            Subheading: commodityArr[0].Subheading[i],
                            SupplyMoney: commodityArr[0].SupplyMoney[i],
                        })
                    }
                    console.log(this.commodityList)
                })
            })
        },
        getImg(){
            this.$fetch('getImg', {'aaaa':'111'}).then(res => {
                this.imgList = res.data
                this.$nextTick(() => {
                    new Swiper('.swiper-container', {
                        pagination: {
                            el: '.swiper-pagination'
                        },
                        loop: true,
                        autoplay: {
                            delay: 2000,
                        },
                    })
                })
            })
        },
        onCategory(name){
            this.$router.push({name: 'CommodityList', query: {categoryName: name}})
        },
        toSearch(){
            this.$router.push('./search')
        },
        toCommodityList(){
            this.$router.push('./CommodityList')
        },
        toDetail(item){
            this.$router.push({name: 'KhDetail', query: {ItemNum: item.ItemNum, AttributeGroup: item.AttributeGroup}})
        },
        toCart(){
            this.$router.push('./cart')
        },
        onChangeSwiper(index){
            this.current = index
        },
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功')
                this.isLoading = false
            }, 500);
        },
    }
}
</script>
<style lang="stylus">
.header{
    /* position: fixed;
    top: -1px;
    left: 0;
    right: 0;
    z-index: 99; */
    position: relative;
    /* padding: 12px 10px; */
    font-size: 18px;
    .home-header{
        position: fixed;
        top: 0;
        width: 100%;
        background: #ff3948;
        color: #fff;
        z-index: 100;
    }
}
.app-header-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding-right: 10px
    .app-header-item{
        font-size 0
    }
}
.app-header-middle{
    flex: 2;
    margin-left: 54px;
    letter-spacing: 2px;
    font-weight: bold;
}
.app-header-bg{
    position: absolute;
    left: 0;
    top 50px
    width: 100%;
    height: 110px;
    background: #ff3948;
    z-index: -99;
}
.app-header-item img{
    width: 20px;
}
.app-header-item .seachbtn{
    margin-right: 14px;
}
.swiper-container{
    padding: 0 8px;
}
.swiper-slide img{
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 20px 4px rgba(0, 0, 0, .1);
}
.page-wrapper .bodys{
    padding-bottom: 52px;
    background: #fff;
    overflow: hidden;
}
.bodys-wrapper{
    padding: 0 8px;
}
.home-swiper{
    padding 0 8px
    margin-top 50px
    img{
        width 100%
        height 180px
        border-radius: 10px;
        // box-shadow: 0 10px 20px 4px rgba(0, 0, 0, .1);
    }
    .home-swiper-indicator{
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
.page-wrapper .tips{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 18px 8px;
}
.page-wrapper .tips img{
    width: 18px;
    padding-right: 10px;
    vertical-align: middle;
}
.page-wrapper .tips .tips-msg{
    display: flex;
    align-items: center;
    color: #ff3948;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1px;
}
.page-wrapper .tips .tips-detail{
    padding: 4px 10px;
    background: #facc0f;
    border-radius: 6px;
    box-shadow: 0 5px 16px 2px rgba(0, 0, 0, .15);
    font-size: 12px;
    color: #fff;
}
.page-wrapper .category-item{
    display: flex;
    justify-content: space-between;
    li{
        // flex 1
        display flex
        align-items center
        flex-flow column
        font-size 14px
        color #000
        img{
            width 58px
            padding-bottom 10px
        }
    }
}
.special-price{
    font-size 0
    img{
        width: 100%;
        margin-top: 18px;
    }
}
.category_group .cells{
    display: flex;
    justify-content: space-between;
    margin-top: 6px;
}
.category_group .cells .exposure{
    font-size: 0;
}
.category_group .cells img{
    width: 98%;
    height: 120px;
}
.category_group .cells img{
    border-radius: 10px;
}
.kinds-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin-top: 22px;
    margin-bottom: 14px;
}
.good-stuff{
    padding-bottom 150px
}
.good-stuff-bg img{
    width: 100%;
}
.good-stuff-bg{
    // background url('../assets/images/banner2.jpg') center no-repeat
}
.kinds-title .left-title{
    color #000
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
}
.kinds-title .left-sub{
    margin-left: 10px;
    font-size: 12px;
    color: #b2b2b2;
    letter-spacing: 1px;
}
.good-stuff-more span{
    display: inline-block;
    padding: 4px 8px;
    border: 1px solid #ff3948;;
    border-radius: 15px;
    font-size: 12px;
    color: #ff3948;
}
.good-stuff-bg{
    position relative
}
.good-stuff-wrapper{
    position absolute
    width 100%
    top 100px
}
.good-stuff-items{
    display: flex;
    padding: 0 12px;
    overflow-x: auto;
}
.good-stuff-items .good-stuff-container{
    margin-right: 4px;
    border: 1px solid #eee;
    border-radius: 8px;
    font-size: 14px;
}
.good-stuff-items .good-stuff-container img{
    width: 130px;
    border-bottom: 1px solid #eee;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
.good-stuff-items .good-stuff-container .items-title{
    padding-top: 4px;
    color: #666;
}
.good-stuff-items .good-stuff-container .items-title-sub{
    padding: 6px 0 10px;
    font-size: 12px;
    color: #ccc;
}
.good-stuff-items .good-stuff-container .items-price{
    padding-bottom: 12px;
    font-size: 14px;
    color: #ff3948;
}
.kinds-container{
    padding: 6px 6px 0;
    background: #eee;
    overflow: hidden;
}
.kinds-items li{
    padding: 6px;
    margin-bottom: 8px;
    background: #fff;
    border-radius: 8px;
}
.kinds-items .kinds-wrapper{
    position relative
    display: flex;
    align-items: center;
    .kinds-pic{
        font-size 0
    }
}
.kinds-items .kinds-pic img{
    width: 140px;
    height 140px
    border-radius: 8px;
}
.list-txt{
    position relative
    height 140px
    margin-right: 8px;
    margin-left 12px
    text-align: left;
    font-size: 14px;
    color: #000;
    line-height: 20px;
    
}
.remaining{
    span{
        position absolute
        right 0
        bottom 0
        display: inline-block;
        padding: 5px 15px;
        background: #ff3948;
        border-radius: 15px;
        font-size: 12px;
        color: #fff;
    }
}
.list-txt .kinds-sub-title{
    color: #ccc;
}
.list-txt .kinds-price{
    padding-top: 4px;
    color: #ff3948;
}
</style>
