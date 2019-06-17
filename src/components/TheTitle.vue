<template>
    <div class="app-view">
        <div class="top">
            <img src="../assets/images/return.png" alt="" @click="toBack">
            <span class="top-middle">{{title}}</span>
            <span></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'top',
    data(){
        return {

        }
    },
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    methods: {
        toBack(){
            this.$router.back(-1)
        }
    }
}
</script>
<style lang="stylus">
    .top{
        position fixed
        top 0
        left 0
        right 0
        display flex
        justify-content space-between
        align-items center
        height 50px
        padding 0 14px
        background #fff
        border-bottom 1px solid #ddd
        font-size 14px
        color #000
        z-index 100
    }
    .top img{
        width 10px
    }
    .top .top-middle{
        font-size 18px
        font-weight bold
        letter-spacing 2px
    }
</style>

