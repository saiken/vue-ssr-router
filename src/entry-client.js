import { createApp } from './entry-base';
import { createStore } from './store';

const store = createStore();

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}

const { app, router } = createApp(store);

router.onReady(() => {
    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to);
        const prevMatched = router.getMatchedComponents(from);

        let diffed = false;
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c));
        });

        if (!activated.length) {
            return next();
        }

        Promise.all(activated.map(c => {
            console.log(c);
            if (c.asyncData) {
                return c.asyncData({ store, route: to });
            }
        })).then(() => {
            next();
        }).catch((err) => {
            console.log(err);
            if (err.url) {
                console.log(err.url);
                if (/^http:\/\/|^https:\/\//.test(err.url)) {
                    window.location.href = err.url;
                    return;
                }
                next({ path: err.url });
                return;
            }
        });
    });

    app.$mount('#app');
});
