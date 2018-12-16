import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';

import { sync } from 'vuex-router-sync';

const createApp = (store) => {
    const router = createRouter(store);

    sync(store, router);

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });

    return { app, router, store };
};

export { createApp };
