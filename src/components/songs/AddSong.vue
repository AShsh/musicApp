<template>
    <div class='add-new-song row'>
        <h2><i class='fas fa-plus'></i>Add new song</h2>
        <form name='new-song'>
            <label for='artist'>Artist</label>
            <input type='text' name='artist' id='artist' v-model='artist' @change='getSong'>
            <label for='title'>Song title</label>
            <input type='text' name='title' id='title' v-model='title' @change='getSong'>
            <input type='submit' class='btn' value='Add' @click.prevent='addSong'>
        </form>
    </div>
</template>
<style>
</style>
<script>
export default {
  name: 'AddSong',

  data() {
    return {
      artist: '',
      title: ''
    };
  },

  methods: {
    getSong(e) {
      this.$store.dispatch('getSong', {
        artist: this.artist,
        title: this.title
      });
    },
    addSong() {
      if (this.artist && this.title) {
        this.$store.dispatch('addSong');
        this.$store.dispatch('clearSong');
        this.artist = '';
        this.title = '';
      }
    }
  }

};
</script>