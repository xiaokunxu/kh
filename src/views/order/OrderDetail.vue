<template>
    <div class="layout">
        <header>
            <the-title title="订单详情"></the-title>
        </header>
    </div>
</template>

<script>
import Order from '../../api/order'
import TheTitle from 'components/TheTitle.vue'

export default {
    components: {
        TheTitle
    },
    created(){
        console.log(this.$route.query.DealNumber)
        this.getOrderDetail()
    },
    methods: {
        getOrderDetail(){
            Order.OrderInfo({
                "SOURCE": "TEST",
                "CREDENTIALS": "0",
                "ADDRESS": "192.168.1.195",
                "TERMINAL": "0",
                "INDEX": "20170714",
                "METHOD": "OrderInfo",
                "UserAccount": "test001",
                "DealNumber": this.$route.query.DealNumber
            }).then(res => {
                console.log(res)
            })
        }
    }
}
</script>
