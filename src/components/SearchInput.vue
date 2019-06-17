<template>
    <div class="layout">
        <div class="search-header">
            <div class="returnicon">
                <img src="../assets/images/search/search-ic-back@3x.png" alt="" @click="toBack">
            </div>
            <div class="search-ipt">
                <img class="searchicon" src="../assets/images/search/search_ic_searh_r@3x.png" alt="">
                <input type="search" placeholder="大家都在搜：百年金酱" autofocus v-model="inputVal">
            </div>
            <span class="cancel" @click="toCancel">取消</span>
        </div>
        <div class="hot-key-list" v-if="active_search">
            <search-list></search-list>
        </div>
    </div>
</template>
<script>
import SearchList from 'components/SearchList.vue'
export default {
    components: {
        SearchList
    },
    data(){
        return{
            active_search: false,
            inputVal: '',
        }
    },
    methods: {
        toBack(){
            this.$router.push('./')
        },
        toCancel(){
            if(this.inputVal){
                this.active_search = false
                this.inputVal = ''
            }else{
                this.$router.push('./')
            }
        }
    },
    watch: {
        inputVal(newVal, oldVal){
            if(this.inputVal){
                this.active_search = true
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
        width: 20px;
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
    .hot-key-list{
        background: #fff;
        position: absolute;
        z-index: 999;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>

