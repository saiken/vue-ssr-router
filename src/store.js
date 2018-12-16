import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export function createStore () {
    return new Vuex.Store({
        state: {
            item: {},
            weather: {}
        },
        actions: {
            fetchItem ({ commit }) {
                // store.dispatch() 経由でデータがフェッチされたときにそれを知るために、Promise を返します
                return axios.get('http://localhost:8080/api/sleep5')
                    .then(response => {
                        return response.data;
                    }).then(item => {
                        commit('setItem', { item });
                    });
            },
            showWeather ({ commit }) {
                return axios.get('http://localhost:8080/api/weather')
                    .then(response => {
                        return response.data;
                    }).then(weather => {
                        commit('setWeather', { weather: {
                            title: weather.title,
                            state: weather.description
                        }
                        });
                        // commit('setWeather', {weather} )
                    });
            }
        },
        mutations: {
            setItem (state, { item }) {
                Vue.set(state.item, 1, item);
            },
            setWeather (state, { weather }) {
                Vue.set(state.weather, 1, weather);
            }
        }
    });
}
