<template>
    <div class='change-playlist row'>
        <h2><i class='fas fa-list-ul'></i>Change playlist</h2>

        <v-select v-model='selectorPlaylist' label='name' :options='playlists' :resetOnOptionsChange='true' @input='selectCurrentPlaylist' ></v-select>

    </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'SelectorPlaylist',

  data() {
    return {
      selectorPlaylist: ''
    };
  },

  components: {
    'v-select': vSelect
  },

  methods: {
    selectCurrentPlaylist() {
      this.$store.dispatch('selectCurrentPlaylist', this.selectorPlaylist);
    },
  },

  computed: {
    playlists() {
      return this.$store.getters.playlists;
    }
  },

};
</script>