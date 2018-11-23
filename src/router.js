import Vue from 'vue'
import Router from 'vue-router'
import Top from './components/Top.vue'
import HydrationMiss from './components/HydrationMiss.vue'
import StoreSample from './components/StoreSample.vue'
import CallApiOnCreated from './components/CallApiOnCreated.vue'

Vue.use(Router)

const routes = [
    { path: '/', component: Top },
    { path: '/hydrationMiss', component: HydrationMiss },
    { path: '/callApiOnCreated', component: CallApiOnCreated },
    { path: '/storeSample', component: StoreSample }
];

const createRouter = () => {
    return new Router({
        mode: 'history',
        routes
    })
}

export { createRouter }
