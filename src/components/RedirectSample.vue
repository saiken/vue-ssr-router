<template>
    <p>RedirectSample</p>
</template>
<script>
    export default {
        asyncData ({ store, route }) {
            // throw {url:'/redirectTo?param=hoge'}
            throw {url:'http://localhost:8080/redirectTo?param=hoge'}
        },

        created () {
            // not called
            console.log("on created")
            this.$router.push('/')
        }
    }
</script>
