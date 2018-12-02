import { createApp } from './entry-base';

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)

        let diffed = false
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c))
        })

        if (!activated.length) {
            return next()
        }

        Promise.all(activated.map(c => {
            console.log(c)
            try {
                if (c.asyncData) {
                    return c.asyncData({store, route: to})
                }
            } catch(err){
                // asyncDataでthrow しても、後続のcatch に入らなかったのでcatch
                if (err.url) {
                    console.log(err.url)
                    if ( /^http:\/\/|^https:\/\//.test(err.url)){
                        window.location.href = err.url
                        return
                    }
                    next({path:err.url})
                    return
                }
            }
        })).then(() => {
            next()
        }).catch(next)
    })

    app.$mount('#app')
})
