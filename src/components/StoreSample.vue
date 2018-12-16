<template>
  <div>
    <h2>server to server api</h2>
    {{ items }}
    <h2>client to server api</h2>
    <p> {{ weather.title }} </p>
    <p> {{ weather.state }} </p>
  </div>
</template>

<script>
export default {
    asyncData ({ store, route }) {
        // アクションから Promise が返されます
        return store.dispatch('fetchItem');
    },

    computed: {
        // ストアの状態から item を表示します
        items () {
            return this.$store.state.item[1];
        },
        weather () {
            if (!this.$store.state.weather[1]) {
                return { title: '', state: '' };
            }

            return this.$store.state.weather[1];
        }
    },

    created () {
    },

    beforeMount () {
        this.$store.dispatch('showWeather');
    }
};
</script>
