const state = {
    songslist: JSON.parse(window.localStorage.getItem('songslist') || '[]'),
    newSong: '',
    currentPlaylist: ''
}

const getters = {
    newSong: state => state.newSong,
    songslist: state => state.songslist,
    currentPlaylist: state => state.currentPlaylist
}

const actions = {
    getSong({ commit }, song) {
        commit('GET_SONG', song)
    },
    addSong({ commit }) {
        commit('ADD_SONG')
    },
    removeSong({ commit }, index) {
        commit('REMOVE_SONG', index)
    },
    clearSong({ commit }) {
        commit('CLEAR_SONG')
    },
    selectCurrentPlaylist({ commit }, currentPlaylist) {
        commit('SELECT_PLAYLIST', currentPlaylist, { root: true })
    }
}

const mutations = {
    GET_SONG(state, song) {
        state.newSong = song
    },

    ADD_SONG(state) {
        state.songslist.push({
            artist: state.newSong.artist,
            title: state.newSong.title,
            id: state.songslist.length > 0 ? state.songslist[state.songslist.length - 1].id + 1 : 0
        })
        localStorage.setItem('songslist', JSON.stringify(state.songslist));
    },

    CLEAR_SONG(state) {
        state.newSong = ''
    },

    REMOVE_SONG(state, index) {
        state.songslist.splice(index, 1);
        localStorage.setItem('songslist', JSON.stringify(state.songslist));
    },

    SELECT_PLAYLIST(state, index) {
        state.currentPlaylist = index;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}