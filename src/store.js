import Vue from 'vue'

export const store = Vue.observable({ userImg: "static/logo.png", userName: "Song Ying" })

export const mutations = {
    setUserName(name) {
        store.userName = name
    }
}