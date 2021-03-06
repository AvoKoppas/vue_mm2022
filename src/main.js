import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import VueAxios from "vue-axios"
import './assets/reset.css'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
