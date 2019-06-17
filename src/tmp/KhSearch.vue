<template>
    <div class="layout">
        <div class="search-box">
            <!-- <search-input></search-input> -->
            <div class="search-header">
                <div class="returnicon">
                    <img src="../assets/images/return.png" alt="" @click="toBack">
                </div>
                <div class="search-ipt">
                    <img class="searchicon" src="../assets/images/search.png" alt="">
                    <input type="search" placeholder="大家都在搜：百年金酱" autofocus v-model="inputVal">
                </div>
                <span class="cancel" @click="toCancel">取消</span>
            </div>
        </div>
        <div class="shortcut-wrapper" v-if="active_search">
            <div class="hot-key">
                <div class="title">热门搜索</div>
                <ul>
                    <li class="item" v-for="(item, index) in HOTKEY" :key="index">
                        <a @click="toCommodityList">{{item.name}}</a>
                    </li>
                </ul>
            </div>
            <div class="search-history">
                <div class="title">历史搜索</div>
                <search-list></search-list>
            </div>
            <div class="clearbtn">
                <button>清空历史记录</button>
            </div>
        </div>
        <!-- <confirm ref="confirm" @confirm="clearSearchHistory" text="是否清空所有搜索历史" confirmBtnText="清空"></confirm> -->
        <!-- <commodity-list v-else></commodity-list> -->
        <div class="hot-key-list" v-else>
            <!-- <ul>
                <li v-for="(item, index) in HOTKEY" :key="index" class="hot-key-txt">
                    <a href="">{{item.name}}</a>
                </li>
            </ul> -->
            <search-list></search-list>
        </div>
    </div>
</template>
<script>
import SearchInput from '@/components/SearchInput.vue'
import SearchList from '@/components/SearchList.vue'
import CommodityList from '@/components/CommodityList.vue'

const HOTKEY = [
    {
        name: '麻棉'
    },
    {
        name: '百年金酱'
    },
    {
        name: '香水'
    },
    {
        name: '麻棉'
    },
    {
        name: '百年金酱'
    },
    {
        name: '香水'
    }
]
export default {
    components: {
        SearchInput,
        SearchList,
        CommodityList
    },
    data(){
        return{
            active_search: true,
            HOTKEY,
            inputVal: ''
        }
    },
    methods: {
        toBack(){
            this.$router.push('./')
        },
        toCancel(){
            this.$router.push('./home')
        },
        toCommodityList(){
            this.$router.push('./commodityList')
        }
    },
    watch: {
        inputVal(newVal, oldVal){
            if(this.inputVal){
                this.active_search = false
            }
        }
    }
}
</script>
<style scoped>
    .search-header{
        display: flex;
        align-items: center;
        padding: 0 10px;
        margin: 8px 0;
    }
    .search-header .returnicon img{
        width: 10px;
        vertical-align: middle;
    }
    .search-ipt{
        position: relative;
        flex: 1;
        margin-left: 15px;
        margin-right: 15px;
    }
    .search-ipt .searchicon{
        width: 16px;
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
    }
    .search-ipt input {
        width: 100%;
        padding: 10px 10px 5px 34px;
        border: 1px solid #ff3948;
        border-radius: 20px;
        font-size: 14px;
    }
    .cancel{
        color: #939393;
    }
    .title{
        margin: 0 10px;
        line-height: 40px;
        font-size: 16px;
        color: #333;
    }
    .shortcut-wrapper .hot-key{
        text-align: left;
    }
    .shortcut-wrapper .hot-key ul{
        display: flex;
        white-space: nowrap;
        flex-wrap: wrap;
        margin: 0 10px 10px 10px;
    }
    .shortcut-wrapper .item{
        padding: 4px 15px;
        margin-right: 10px;
        margin-bottom: 8px;
        border: 1px solid #ccc;
        border-radius: 15px;
        font-size: 14px;
    }
    .shortcut-wrapper .item a{
        color: #939393;
    }
    .search-history{
        border-top: 12px solid #eee;
        /* padding: 0 10px; */
        text-align: left;
    }
    .clearbtn button{
        width: 80%;
        padding: 10px 0;
        margin-top: 30px;
        background: none;
        border: 1px solid #ccc;
        border-radius: 30px;
        font-size: 16px;
        color: #000;
    }
    .hot-key-list .hot-key-txt{
        height: 46px;
        line-height: 46px;
        padding-left: 20px;
        border-top: 1px solid #eee;
        text-align: left;
    }
    .hot-key-list .hot-key-txt:last-child{
        border-bottom: 1px solid #eee;
    }
    .hot-key-list .hot-key-txt a{
        color: #939393;
    }
</style>

