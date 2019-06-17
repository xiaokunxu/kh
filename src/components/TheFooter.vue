<template>
    <footer class="app-bottom-navigator-wrapper app-shell-footer">
        <div class="fill-height box-flex align-center">
            <router-link
                v-for="nav in navigation"
                :key="nav.icon"
                class="flex"
                active-class="on"
                :to="{name: nav.link}">
                <span class="iconfont"><img :src="nav.link==$route.name?nav.iconon:nav.icon"/></span>
                <span>{{nav.name}}</span>
            </router-link>
        </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex'

const navigation = [
    {
        name: '首页',
        icon: require('../assets/images/footer/ic_home_b@3x.png'),
        iconon: require('../assets/images/footer/ic_home_r@3x.png'),
        link: 'home'
    },
    {
        name: '购物车',
        icon: require('../assets/images/footer/ic_shop_b@3x.png'),
        iconon: require('../assets/images/footer/ic_shop_r@3x.png'),
        link: 'cart'
    },
    {
        name: '我的',
        icon: require('../assets/images/footer/ic_my_b@3x.png'),
        iconon: require('../assets/images/footer/ic_my_r@3x.png'),
        link: 'user'
    },
]
export default {
    data(){
        return{
            navigation
        }
    }
}
</script>

<style scoped>
    .app-shell-footer{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9999;
    }
    .app-bottom-navigator-wrapper{
        height: 52px;
        background: #fff;
        box-shadow: 0 3px 14px 2px rgba(0, 0, 0, .12);
    }
    .fill-height{
        height: 100%;
    }
    .box-flex{
        display: flex;
    }
    .flex{
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #000;
    }
    .iconfont img{
        width: 24px;
        margin-bottom: 3px;
    }
    .flex span{
        font-size: 12px;
    }
    .on{
        color: #FF3947;
    }
</style>
