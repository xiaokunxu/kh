<template>
    <div class="search-list">
        <ul>
            <li class="item" v-for="(item, index) in KEY" :key="index">
                <a @click="toCommodityList">{{item.name}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
const KEY = [
    {
        name: '奶粉'
    },
    {
        name: '母婴用品'
    },
    {
        name: '零食'
    },
    {
        name: '手机'
    }
]
export default {
    name: 'searchList',
    data(){
        return{
            KEY
        }
    },
    methods: {
        toCommodityList(){
            this.$router.push('./commodityList')
        }
    }
}
</script>
<style scoped>
.search-list{
    padding: 0 10px;
    text-align: left;
}
    .search-list .item a{
        display: inline-block;
        width: 100%;
        border-bottom: 1px solid #eee;
        line-height: 36px;
        padding: 4px 0;
        color: #939393;
    }
</style>

