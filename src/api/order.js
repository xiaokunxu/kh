import fetch from './fetch.js'

class Order {
    // 获取订单列表
    static UserOrderTable (data) {
        return fetch('UserOrder', data)
    }
    // 获取售后申请记录列表
    static Information (data) {
        return fetch('UserOrder', data)
    }
    // 记录详情
    static RecordInfo (data) {
        return fetch('UserOrder', data)
    }
    // 订单详情
    static OrderInfo (data) {
        return fetch('UserOrder', data)
    }
    // 下单结算
    static UserOrder (data) {
        return fetch('UserOrder', data)
    }
    // 审核进度
    static AuditProgress (data) {
        return fetch('UserOrder', data)
    }
    // 申请退货
    static Reformat (data) {
        return fetch('UserOrder', data)
    }
}

export default Order