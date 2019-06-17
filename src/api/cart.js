import fetch from './fetch.js'

class Cart {
    // 获取购物车列表
    static CartList (data) {
        return fetch('UserOrder', data)
    }
    // 购物车管理
    static CartManage (data) {
        return fetch('UserOrder', data)
    }
    // 删除购物车
    static DeleteCart (data) {
        return fetch('UserOrder', data)
    }
}

export default Cart