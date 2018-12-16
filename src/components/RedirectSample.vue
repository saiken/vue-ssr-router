<template>
  <p>RedirectSample</p>
</template>
<script>
export default {
    asyncData ({ store, route }) {
        // throw {url:'/redirectTo?param=hoge'}
        return Promise.reject({ url: '/redirectTo?param=hoge' });
    },

    created () {
        // not called
        console.log('on created');
        this.$router.push('/');
    }
};
</script>
