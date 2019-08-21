import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('@/views/login/Login');
const Homepage = () => import('@/components/homepage');

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/login',
            component:Login
        },
        {
            path:'/homepage',
            component:Homepage
        }
    ]
})