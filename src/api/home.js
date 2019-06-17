import fetch from './fetch.js'

class Home {
    // 首页
    static IndustryInfo (data) {
        return fetch('GetCommodity', data)
    }
    // 首页分类商品列表
    static GetCommodityTable (data) {
        return fetch('GetCommodity', data)
    }
}

export default Home