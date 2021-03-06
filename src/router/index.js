import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../views/login.vue"
import SecureComponent from "../views/Ankeet.vue"
//import Home from '../views/Home.vue'
import MM2022 from "../views/MM2022.vue"
import Ankeet from '../views/Ankeet'
//import Registreeri from '../views/Registreeri'
// import Vuetify from 'vuetify/lib/util/colors'

// Vue.use(Vuetify)

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: '/login',
            name: "login",
            component: LoginComponent
        },
        {
            path: "/Ankeet",
            name: "Ankeet",
            component: SecureComponent
        },
        {
            path: '/MM2022',
            name: 'MM2022',
            component: MM2022
        },
        {
            path: '/Ankeet',
            name: 'Ankeet',
            component: Ankeet
        },
        {
            path: '/about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
    ]
})
