import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import songs from './modules/songs'
import playlists from './modules/playlists'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
      songs,
      playlists
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})