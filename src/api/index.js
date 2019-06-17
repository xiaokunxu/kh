// let host = 'https://easy-mock.com/mock/5cd13f74bbe6b75014dac64c/mall'
let host = '/Container'
let endUrl = '/TServerMethods/Transaction'
// let { NODE_ENV, VUE_APP_API } = process.env
// if(NODE_ENV === 'development' || (NODE_ENV === 'production' && VUE_APP_API === 'rap')){
//     host = 'https://easy-mock.com/mock/5cd13f74bbe6b75014dac64c/mall'
// }

const url = {
    login: '/user/login',
    GetOrderList: '/order/GetOrderList',
    GetRecordDetail: '/record/GetRecordDetail',
    getImg: '/img',
    UserInfo: '/UserInfo.dll',
    UserOrder: '/UserOrder.dll',
    GetCommodity: '/GetCommodity.dll',
}

Object.keys(url).forEach(key => {
    url[key] = host + url[key] + endUrl
})

export default url