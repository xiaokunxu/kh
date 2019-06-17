import Home from './Home.vue'
import Cart from './Cart.vue'
import User from './User.vue'

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: './user',
        name: 'user',
        component: User
    }
]