<template>
    <div class="layout">
        <the-title title="发票常见问题"/>
        <div class="container">
            <div class="list">
                <p class="questions">1. 发票的类型有哪些？</p>
                <p class="answers">目前可以开具电子增值税普通发票(简称“电子发票”)、纸质增值税普通发票(简称“纸质发票”)、以及增值税专用发票(简称“专用发票”)。</p>
            </div>
            <div class="list">
                <p class="questions">2. 发票内容可以开什么？</p>
                <p class="answers">订单中含有办公用品（箱包、文具、口罩），可选开票内容：办公用品等、耗材等、日用品、家居用品、食品、酒/饮料、服饰、化妆品； 不含有办公用品，可选开票内容：日用品、家居用品、食品、酒/饮料、服饰、化妆品；礼品卡开票内容：预付卡。</p>
            </div>
            <div class="list">
                <p class="questions">3. 发票的金额包含运费或活动金额吗？</p>
                <p class="answers">发票总金额等于您实际支付的消费金额（含运费），不包括未实际支出的折扣的金额和使用礼品卡支付的金额。</p>
            </div>
            <div class="list">
                <p class="questions">4. 为什么我的订单不支持开发票？</p>
                <p class="answers">当您的订单金额为0元或者该订单完全使用礼品卡支付的时候；或特殊渠道下单时不支持开发票。</p>
            </div>
            <div class="list">
                <p class="questions">5. 为什么使用礼品卡支付时不支持开发票？</p>
                <p class="answers">在购买礼品卡时已支持开具发票，因此在使用礼品卡消费时，不再支持重复开票。</p>
            </div>
            <div class="list">
                <p class="questions">6. 什么是电子发票？</p>
                <p class="answers">电子发票是指在购销商品、提供或者接受服务以及从事其他经营活动中，开具、收取的以电子方式存储的收付款凭证。严选开具的电子发票均为真实有效的合法发票，与传统纸质发票具有同等法律效力。电子发票可以用于财务报销、保修和维权。
根据国家税务总局公告2015年84号《关于推行通过增值税电子发票系统开具的增值税电子普通发票有关问题的公告》第三条：增值税电子普通发票的开票方和受票方需要纸质发票的，可以自行打印增值税电子普通发票的版式文件，其法律效力、基本用途、基本使用规定等与税务机关监制的增值税普通发票相同。</p>
            </div>
            <div class="list">
                <p class="questions">7. 电子发票什么时候开具？</p>
                <p class="answers">电子发票将会在订单下所有包裹确认收货后开具。</p>
            </div>
            <div class="list">
                <p class="questions">8. 电子发票在哪里下载？</p>
                <p class="answers">您可在电脑网页版的网易严选“个人中心——订单详情”中进行下载。</p>
            </div>
            <div class="list">
                <p class="questions">9. 电子发票如何在网上查验？</p>
                <p class="answers">可在浙江省国家税务局发票查验系统查询，网址为：<a href="http://www.zjtax.gov.cn/fpcx/include2/wlfpcybd_lscx.jsp">http://www.zjtax.gov.cn/fpcx/include2/wlfpcybd_lscx.jsp</a></p>
            </div>
            <div class="list">
                <p class="questions">10. 如果申请退换货，发票如何处理？</p>
                <p class="answers">您在申请退货后，已经开具的发票将会作废。如您还需要对其他商品开发票，可联系客服处理。</p>
            </div>
            <div class="list">
                <p class="questions">11. 纸质增值税普通发票和增值税专用发票怎么开？</p>
                <p class="answers">如您需要开具增值税专用发票，请在购买后联系客服帮忙处理。</p>
            </div>
        </div>
    </div>
</template>

<script>
import TheTitle from 'components/TheTitle.vue'

export default {
    components: {
        TheTitle
    }
}
</script>

<style lang="stylus" scoped>
    .container{
        padding-top 50px
        padding-bottom 25px
        text-align left 
        .list{
            padding 0 10px
            font-size 14px
            color #000
            p{
                line-height 24px
            }
            .questions{
                padding 18px 0 8px 0
                font-size 15px
                color #FF3947
            }
        }
    }
</style>

