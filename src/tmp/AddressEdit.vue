<template>
    <div class="layout">
        <header>
            <the-title title="编辑收货地址"/>
            <span class="save" @click="onSave">保存</span>
        </header>
        <div class="app-view-wrap">
            <label for="" class="panel">
                <span>收货人</span>
                <input type="text" placeholder="请填写收货人">
            </label>
            <label for="" class="panel">
                <span>联系方式</span>
                <input type="text" placeholder="请填写手机号">
            </label>
            <label for="" class="panel">
                <span>所在地区</span>
                <input type="text" placeholder="请填写收货人">
            </label>
            <label for="" class="panel detail">
                <span>详细地址</span>
                <textarea type="text" placeholder="请填写详细地址"></textarea>
            </label>
        </div>
    </div>
</template>

<script>
import TheTitle from 'components/TheTitle.vue'

export default {
    components: {
        TheTitle
    },
    data() {
        return {
            
        }
  },
    methods: {
        onSave(){

        }, 
    }
}
</script>

<style lang="stylus">
    .layout{
        height 100vh
        background #f3f3f3
    }
    header{
        height 51px
    }
    .save{
        position absolute
        right 10px
        line-height 50px
    }
    .app-view-wrap{
        background #fff
    }
    .panel{
        display flex
        align-items center
        margin-left 10px
        border-bottom 1px solid #eee
        font-size 15px
        color #000
        input{
            width 70%
            margin-left 20px
        }
        &:last-child{
            border-bottom none
        }
        textarea{
            width 70%
            margin-left 20px
            padding 0
            border none
            resize none
        }
    }
    .detail{
        align-items flex-start
        padding-top 20px
        padding-bottom 20px
    }
</style>

