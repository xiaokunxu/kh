import fetch from './fetch.js'

class Address {
    // 获取用户地址信息
    static GetUserAddress (data) {
        return fetch('UserInfo', data)
    }
    // 用户地址管理
    static UserAddressManage (data) {
        return fetch('UserInfo', data)
    }
    // 设为默认地址
    static SetDefaultAddress (data) {
        return fetch('UserInfo', data)
    }
}

export default Address