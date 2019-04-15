import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Works from './views/Works.vue'
import Skil from './views/Skil.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/works',
            name: 'works',
            component: Works
        },
        {
            path: '/skil',
            name: 'skil',
            component: Skil
        }
    ]
})
