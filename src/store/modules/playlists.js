const state = {
    playlists: JSON.parse(window.localStorage.getItem('playlists') || '[]')
}

const getters = {
    playlists: state => state.playlists
}

const actions = {
    addPlaylist({ commit }, playlistName) {
        commit('ADD_PLAYLIST', playlistName)
    },
    removePlaylist({ commit }, playlist) {
        commit('REMOVE_PLAYLIST', playlist)
    },
    addToPlaylist({ commit }, song) {
        commit('ADD_TO_PLAYLIST', song, { root: true })
    },
    deleteFromPlaylist({ commit }, data) {
        if (data.playlist == undefined) {
            commit('DELETE_FROM_PLAYLIST', data, { root: true })
        } else {
            commit('DELETE_FROM_DEFINITE_PLAYLIST', data, { root: true })
        }
        localStorage.setItem('playlists', JSON.stringify(state.playlists));
    }
}

const mutations = {
    ADD_PLAYLIST(state, playlistName) {
        state.playlists.push({
            name: playlistName,
            songsList: [],
            id: state.playlists.length > 0 ? state.playlists[state.playlists.length - 1].id + 1 : 0
        });
        localStorage.setItem('playlists', JSON.stringify(state.playlists));
    },

    REMOVE_PLAYLIST(state, index) {
        state.playlists.splice(index, 1);
        localStorage.setItem('playlists', JSON.stringify(state.playlists));
    },

    ADD_TO_PLAYLIST(state, data) {
        var currentPlaylist = data.currentPlaylist;
        var song = data.song;
        state.playlists.forEach(element => {
            if (element.id == currentPlaylist.id) {
                element.songsList.push(song);
                localStorage.setItem('playlists', JSON.stringify(state.playlists));
            }
        });
    },

    DELETE_FROM_PLAYLIST(state, songId) {
        state.playlists.forEach((playlist) => {
            playlist.songsList.forEach((element, index) => {
                if (element.id == songId) {
                    playlist.songsList.splice(index, 1);
                }
            });
        });
        localStorage.setItem('playlists', JSON.stringify(state.playlists));
    },

    DELETE_FROM_DEFINITE_PLAYLIST(state, data) {
        state.playlists[data.playlist].songsList.forEach((element, index) => {
            if (element.id == data.songId) {
                state.playlists[data.playlist].songsList.splice(index, 1);
            }
        });
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}