import fetch from './fetch.js'

class Commodity {
    // 商品详情
    static CommodityInfo (data) {
        return fetch('GetCommodity', data)
    }
}

export default Commodity