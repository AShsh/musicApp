<template>
    <div class='my-songs row'>
        <h2><i class='fas fa-music'></i>My Songs</h2>
        <ul class='songs-list' v-if='songslist.length > 0'>
            <li class='item' v-for='(song, index) in songslist' :key='index'>
                <div class='artists-info'>
                    <span class='count'>{{index + 1}}</span>
                    <span>{{song.artist}} - {{song.title}}</span>
                </div>
                <div class='songs-list__controller'>
                    <button @click.prevent='removeSong(index, song.id)'><i class='fas fa-trash-alt'></i></button>
                    <button @click.prevent='addToPlaylist(index, song.id)'><i class='fas fa-plus'></i></button>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.songs-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10px 2px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid #4a4a4a;
}
.artists-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-right: 5px;
  text-align: left;
}
.count {
  color: #4a4a4a;
  margin-right: 10px;
}
.count i {
  margin: 0 3px;
}
.songs-list__controller {
  text-align: right;
  min-width: 125px;
}
button {
  margin: 3px;
}
</style>

<script>
export default {
  name: 'ShowSongs',

  methods: {
    removeSong(index, id) {
      this.$store.dispatch('removeSong', index);
      this.$store.dispatch('deleteFromPlaylist', id);
    },

    addToPlaylist(index, id) {
      if (this.currentPlaylist) {
        var songsList = this.currentPlaylist.songsList;
        var match = function(element) {
          return element.id !== id;
        };

        if (songsList.length > 0 && songsList.every(match)) {
          this.$store.dispatch('addToPlaylist', {
            song: this.songslist[index],
            currentPlaylist: this.currentPlaylist
          });
        } else if (songsList.length == 0) {
          this.$store.dispatch('addToPlaylist', {
            song: this.songslist[index],
            currentPlaylist: this.currentPlaylist
          });
        }
      }
    }
  },

  computed: {
    songslist() {
      return this.$store.getters.songslist;
    },
    currentPlaylist() {
      return this.$store.getters.currentPlaylist;
    }
  }
};
</script>