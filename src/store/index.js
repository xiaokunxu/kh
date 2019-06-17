import Vue from 'vue'
import Vuex from 'vuex'
import fetch from 'api/fetch.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: null,
        // isLogin: false
    },
    getters: {
        isLogin: state => {
            return !!state.userInfo
            // return false
            // state.isLogin
        }
    },
    // 设置属性状态
    mutations: {
        // 保存登录状态
        changeLoginStatu(state, info){
            state.userInfo = info
        }
    },
    // 应用 mutations
    actions: {
        // 获取登录状态
        getUserInfo({commit}){
            fetch('UserLogoin').then(res => {
                commit('changeLoginStatu', res)
            })
        }
    }
})