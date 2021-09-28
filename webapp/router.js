import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        name: 'home',
        path: '/',
        component: require('./components/Home/HomePage').default
    },
    {
        name: 'users',
        path: '/users',
        component: require('./components/User/UserIndex').default
    },
  
    { path: '*', component: require('./components/NotFound').default  }
];

export default new VueRouter({
    routes,
    base: '/',
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
})

