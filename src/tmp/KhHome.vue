<template>
    <div class="layout">
        <div class="app-view-wrapper">
            <header class="header">
                <div class="app-header-wrapper clearfix">
                    <div class="app-header-middle">
                        <div class="app-header-title">
                            <span class="title">正品汇</span>
                        </div>
                    </div>
                    <div class="app-header-right">
                        <div class="app-header-item">
                            <img class="seachbtn" src="../assets/images/searchlogo.png" alt="" @click="toSearch">
                            <img src="../assets/images/cartlogo.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="app-header-bg"></div>
            </header>
            <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="../assets/images/banner1.jpg" alt=""></div>
                    </div>
                </div>
            <div class="page-wrapper">
                <div class="bodys">
                    <div class="tips bodys-wrapper">
                        <div class="tips-msg">正品汇成为中国最大家电零售商!</div>
                        <div class="tips-detail">详情</div>
                    </div>
                    <div class="category bodys-wrapper">
                        <ul class="category-item">
                            <li><a href=""></a><img src="../assets/images/milogo.png" alt=""></li>
                            <li><a href=""></a><img src="../assets/images/milogo.png" alt=""></li>
                            <li><a href=""></a><img src="../assets/images/milogo.png" alt=""></li>
                            <li><a href=""></a><img src="../assets/images/milogo.png" alt=""></li>
                        </ul>
                    </div>
                    <div class="special-price bodys-wrapper">
                        <a href=""><img src="../assets/images/special-price.jpg" alt=""></a>
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
                    <div class="kinds">
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
                    </div>
                    <div class="kinds">
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
                    </div>
                </div>
            </div>
        </div>
        <the-footer />
    </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
import swiper from 'swiper'

export default {
    components: {
        TheFooter
    },
    data() {
        return {
            
        }
    },
    methods: {
        toSearch(){
            this.$router.push('./search')
        }
    }
}
</script>
<style>
.header{
    /* position: fixed;
    top: -1px;
    left: 0;
    right: 0;
    z-index: 99; */
    position: relative;
    padding: 10px 10px;
    background: #ff3948;
    font-size: 16px;
    color: #fff;
}
.app-header-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.app-header-middle{
    flex: 2;
    margin-left: 30px;
    letter-spacing: 2px;
    font-weight: bold;
}
.app-header-bg{
    position: absolute;
    left: 0;
    width: 100%;
    height: 110px;
    background: #ff3948;
    z-index: -99;
}
.app-header-item img{
    width: 20px;
}
.app-header-item .seachbtn{
    margin-right: 10px;
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
.page-wrapper .tips{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 18px 8px;
}
.page-wrapper .tips .tips-msg{
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
    font-size: 0;
}
.page-wrapper .category-item li img{
    width: 50px;
}
.page-wrapper .special-price img{
    width: 100%;
    margin-top: 18px;
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
.good-stuff-bg img{
    width: 100%;
}
.kinds-title .left-title{
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
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.kinds-items .kinds-pic img{
    width: 138px;
    border-radius: 8px;
}
.list-txt{
    width: 55%;
    margin-right: 8px;
    text-align: left;
    font-size: 14px;
    color: #000;
    line-height: 20px;
}
.list-txt .kinds-sub-title{
    color: #ccc;
}
.list-txt .kinds-price{
    padding-top: 4px;
    color: #ff3948;
}
.list-txt .remaining{
    text-align: right;
}
.list-txt .remaining span{
    display: inline-block;
    padding: 2px 15px;
    background: #ff3948;
    border-radius: 15px;
    font-size: 12px;
    color: #fff;
}
</style>
