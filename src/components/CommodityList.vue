<template>
    <div class="commodity-list">
        <ul>
            <li class="items" v-for="(item, index) in DATA" :key="index" @click="toDetail">
                    <div class="commodity-wrapper">
                        <div class="commodity-pic">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="commodity-txt">
                            <p class="title">{{item.title}}</p>
                            <p class="sub-title">{{item.subTitle}}</p>
                            <p class="commodity-price">￥{{item.price}}</p>
                        </div>
                    </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Home from '../api/home'

const DATA = [
    {
        img: require('../assets/images/recommend1.jpg'),
        title: '泰国进口休闲零食品 小老板脆紫菜炸海苔片 多口味网红紫菜',
        subTitle: '香脆可口 不含色素 好吃',
        price: 20,
    },
    {
        img: require('../assets/images/recommend1.jpg'),
        title: '泰国进口休闲零食品 小老板脆紫菜炸海苔片 多口味网红紫菜',
        subTitle: '香脆可口 不含色素 好吃',
        price: 20,
    },
    {
        img: require('../assets/images/recommend1.jpg'),
        title: '泰国进口休闲零食品 小老板脆紫菜炸海苔片 多口味网红紫菜',
        subTitle: '香脆可口 不含色素 好吃',
        price: 20,
    }

]
export default {
    components: {
        
    },
    data() {
        return {
            DATA
        }
    },
    created(){
        console.log(this.$route.query.categoryName)
        let postData = `[["IndustryNameOne","Sum","Num"],["${this.$route.query.categoryName}","1","5"]]`
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
            console.log(res)
        })
    },
    methods: {
        toDetail(){
            this.$router.push('./detail')
        }
    }
}
</script>
<style scoped>
    .commodity-list .items{
        border-top: 1px solid #eee;
    }
    .commodity-list .items:last-child{
        border-bottom: 1px solid #eee;
    }
    .commodity-list .commodity-wrapper{
        display: flex;
        padding: 10px;
    }
    .commodity-list .commodity-pic{
        font-size: 0;
    }
    .commodity-list .commodity-pic img{
        width: 120px;
        height: 120px;
        border-radius: 6px;
    }
    .commodity-list .commodity-txt{
        height: 120px;
        margin-left: 15px;
        margin-right: 5px;
        text-align: left;
        font-size: 15px;
        color: #333;
    }
    .commodity-list .commodity-txt p{
        line-height: 22px;
    }
    .sub-title{
        padding-top: 8px;
        padding-bottom: 20px;
        font-size: 12px;
        color: #939393;
    }
    .commodity-price{
        font-size: 20px;
        color: #ff3948;
    }
</style>

