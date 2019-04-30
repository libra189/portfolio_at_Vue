import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import VueAnalytics from 'vue-analytics'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Element)

Vue.use(VueAnalytics, {
    id: 'UA-138725033-1',
    router
})

new Vue({
    router,
    el: '#app',
    render: h => h(App)
}).$mount('#app')
