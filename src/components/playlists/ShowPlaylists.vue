<template>
    <div class='playList'>
        <h2><i class='fas fa-list-ul'></i>My Playlists</h2>
        <ul class='list'>
        <li v-for='(playlist, indexPlaylist) in playlists' :key='indexPlaylist'>
            <div class='title'>
            <p class='playlist-name'><i class='fas fa-bolt'></i>{{playlist.name}}</p>
            <button @click='removePlaylist(indexPlaylist)' ><i class='fas fa-trash-alt'></i></button>
            </div>
            <ul class='song-list'>
            <li v-for='(song, indexSong) in playlist.songsList' :key='indexSong'>
                <div class='artists-info'>
                  <span class='count'>{{indexSong + 1}}</span>
                  <span>{{song.artist}} - {{song.title}}</span>
                </div>
                <div class='songs-list__controller'>
                <button @click='deleteFromPlaylist(song.id, indexPlaylist)'><i class='fas fa-trash-alt'></i></button>
                 </div>
            </li>
            
            </ul>
        </li>
        </ul>
    </div>
</template>
<style scoped>
.playList {
  margin-bottom: 45px;
}
ul {
  list-style: none;
}
.list {
  padding: 0;
}
.song-list {
  padding: 0;
}
@media (min-width: 992px) {
  .song-list {
    padding-left: 20px;
  }
}
.list li {
  margin-bottom: 20px;
}
.list li:last-child {
  border-bottom: none;
}
.song-list li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 10px 2px;
  margin-bottom: 0;
  border-bottom: 1px solid #fdfdfd;
}
.list li .title {
  border-bottom: 1px solid #42a5c0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 10px 2px;
}
.title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #fdfdfd;
}
.count {
  color: #fdfdfd;
  margin-right: 20px;
}
.artists-info {
  color: #fdfdfd;
  text-align: left;
  display: flex;
}
.playlist-name {
  text-transform: uppercase;
}
.fa-bolt {
  color: #42a5c0;
  margin-right: 10px;
}
.songs-list__controller {
  text-align: right;
}
@media (max-width: 992px) {
  .songs-list__controller {
    min-width: 70px;
  }
}
</style>
<script>
export default {
  name: 'ShowPlaylists',
  methods: {
    removePlaylist(index) {
      this.$store.dispatch('removePlaylist', index);
    },
    deleteFromPlaylist(songId, playlist) {
      this.$store.dispatch('deleteFromPlaylist', { songId, playlist });
    }
  },

  computed: {
    playlists() {
      return this.$store.getters.playlists;
    },
    currentPlaylist() {
      return this.$store.getters.currentPlaylist;
    }
  }
};
</script>