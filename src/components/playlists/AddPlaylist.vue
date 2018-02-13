<template>
  <div class='play'>
    <div class='add-playlist'>
       <h2><i class='fas fa-plus'></i>Add Playlist</h2>
      <form class='form-holder' name='new-playlist'>
        <label for='title'>Playlist name</label>
        <input type='text' name='title' id='title' v-model='playlistName'>
        <input class='btn' type='submit' @click.prevent='addPlaylist' value='add to playlist'>
      </form>
    </div>    
  </div>
</template>
<style scoped>
.form-holder {
  max-width: 300px;
  margin: 0 auto;
}
label {
  color: #fdfdfd;
}
</style>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'AddPlaylist',
  data() {
    return {
      playlistName: ''
    };
  },
  methods: {
    addPlaylist() {
      if (this.playlistName) {
        this.$store.dispatch('addPlaylist', this.playlistName);
        this.playlistName = '';
      }
    }
  }
};
</script>
