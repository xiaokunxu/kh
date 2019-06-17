import Vue from 'vue'
import Router from 'vue-router'
// import routes from './tmp'
// import routes from './views'
// import Home from './views/Home'
import KhHome from './views/KhHome.vue'
import Cart from './views/Cart.vue'
import User from './views/User.vue'
import UserInfo from './views/user/UserInfo.vue'
import ChangeTel from './views/user/ChangeTel.vue'
import ChangePassword from './views/user/ChangePassword.vue'
import NewTel from './views/user/NewTel.vue'
import AddressList from './views/AddressList.vue'
import AddressEdit from './views/AddressEdit.vue'
import Order from './views/Order.vue'
import OrderCheckout from './views/cart/OrderCheckout.vue'
import OrderSuccess from './views/cart/OrderSuccess.vue'
import Invoice from './views/cart/Invoice.vue'
import InvoiceHelp from './views/cart/InvoiceHelp.vue'
import SalesServiceList from './views/service/SalesServiceList.vue'
import ApplicationForReturn from './views/service/ApplicationForReturn.vue'
import ServiceSuccess from './views/service/ServiceSuccess.vue'
import RecordDetail from './views/service/RecordDetail.vue'
import CheckProgress from './views/service/CheckProgress.vue'
import OrderDetail from './views/order/OrderDetail.vue'
import KhSearch from './views/KhSearch.vue'
import CommodityList from './views/CommodityList.vue'
import KhDetail from './views/KhDetail.vue'
// import KhLogin from './tmp/KhLogin'
import KhLogin from './views/KhLogin.vue'
import KhForgetPwd from './views/ForgetPassword.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: KhHome
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/user',
            name: 'user',
            component: User,
            // children: [
            //     {
            //         path: 'userinfo',
            //         component: UserInfo
            //     }
            // ]
        },
        // {
        //     path: '/login',
        //     name: 'login',
        //     component: KhLogin
        // },
        {
            path: '/login',
            name: 'login',
            component: KhLogin
        },
        {
            path: '/forgetPwd',
            name: 'KhForgetPwd',
            component: KhForgetPwd
        },
        {
            path: '/search',
            name: 'KhSearch',
            component: KhSearch
        },
        {
            path: '/commodityList',
            name: 'CommodityList',
            component: CommodityList
        },
        {
            path: '/detail',
            name: 'KhDetail',
            component: KhDetail
        },
        {
            path: '/user/info',
            name: 'UserInfo',
            component: UserInfo,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/order',
            name: 'Order',
            component: Order,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/userInfo/changetel',
            name: 'ChangeTel',
            component: ChangeTel
        },
        {
            path: '/userInfo/newtel',
            name: 'NewTel',
            component: NewTel
        },
        {
            path: '/userInfo/ChangePassword',
            name: 'ChangePassword',
            component: ChangePassword
        },
        {
            path: '/address/list',
            name: 'AddressList',
            component: AddressList,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/address/edit',
            name: 'AddressEdit',
            component: AddressEdit
        },
        {
            path: '/order/checkout',
            name: 'OrderCheckout',
            component: OrderCheckout,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/invoice',
            name: 'Invoice',
            component: Invoice
        },
        {
            path: '/invoiceHelp',
            name: 'InvoiceHelp',
            component: InvoiceHelp
        },
        {
            path: '/order/success',
            name: 'OrderSuccess',
            component: OrderSuccess
        },
        {
            path: '/order/salesServiceList',
            name: 'SalesServiceList',
            component: SalesServiceList,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/order/applicationForReturn',
            name: 'ApplicationForReturn',
            component: ApplicationForReturn
        },
        {
            path: '/order/serviceSuccess',
            name: 'ServiceSuccess',
            component: ServiceSuccess
        },
        {
            path: '/order/recordDetail',
            name: 'RecordDetail',
            component: RecordDetail
        },
        {
            path: '/order/checkProgress',
            name: 'CheckProgress',
            component: CheckProgress
        },
        {
            path: '/order/orderDetail',
            name: 'OrderDetail',
            component: OrderDetail
        }
    ]
    // routes
})