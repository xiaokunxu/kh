import fetch from './fetch.js'

class User {
    static UserRegister (data) {
        return fetch('UserInfo', data)
    }
    static UserLogoin (data) {
        return fetch('UserInfo', data)
    }
    // 修改用户信息
    static UserInfoManage (data) {
        return fetch('UserInfo', data)
    }
    // 修改密码
    static UpdatePasswd (data) {
        return fetch('UserInfo', data)
    }
}

export default User